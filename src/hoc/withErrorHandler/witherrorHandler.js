// import React, { Component, useState, useEffect } from 'react';
 
// import Modal from '../../components/UI/Modal/Modal';
// import Aux from '../Aux';

// const WithErrorHandler= (WrappedComponent, axios) => {
//     return props => {

//         const [error, setError] = useState(null);
//         useEffect(() => {
//             axios.interceptors.request.use(req => {
//                 setError(null);

//                 return req;
//             });
//             axios.interceptors.response.use(res => res, err => {
//                 setError(err);

//                 return
//             })
//         }, []);

//         const errorConfirmedError = () => {
//             setError(null);
//         }

//         return (
//             <Aux>
//                 <Modal 
//                     show={error}
//                     modalClosed={{errorConfirmedError}}>                        {this.state.error ? this.state.error.messsage : null}}
//                 </Modal>
//                 <WrappedComponent {...props}/>
//             </Aux>
//         );
//     }
// }

// export default WithErrorHandler;