import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Kiryl',
                address: {
                    street: 'Test street',
                    zipCode: '34094',
                    country: 'USA'
                },
                email: 'test@test.com',
            },
            delieveryMethod: 'fastest'    
        };

        axios.post('https://react-my-burger-1bb41.firebaseio.com/orders.json', order)
            .then(response => {
                console.log("Success");
                console.log(response);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => { 
                console.log(error)
                this.setState({
                    loading: false
                });
            });
        
    }

    render () {
        let form = (
                <form>
                    <input className={classes.Input}   type="text" name="name" placeholder="Your name"/>
                    <input className={classes.Input}   type="email" name="email" placeholder="Your email"/>
                    <input className={classes.Input}   type="text" name="street" placeholder="Your street"/>
                    <input className={classes.Input}   type="text" name="postal" placeholder="Your Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );

        if (this.state.loading === true) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                { form }
            </div>
        );
    }
}

export default ContactData;