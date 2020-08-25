import React, { Component } from 'react';
 
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const WithErrorHandler= (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });

                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                });

                return
            })
        }

        errorConfirmedError = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedError}>
                        {this.state.error ? this.state.error.messsage : null}}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default WithErrorHandler;