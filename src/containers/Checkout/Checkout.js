import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary  from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


const checkout = props => {
    const checkoutCancelled = () => {
        props.history.goBack();
    }

    const checkoutContinued = () => {
        props.history.replace('/checkout/contact-data');
    }

        let summary = <Redirect to="/"/>;
        if (props.ings) {
            const purchaseRedirect =  props.purchased ? <Redirect to="/" /> : null;
            summary = (
            <div>
                {purchaseRedirect}
                <CheckoutSummary 
                ingredients={props.ings}
                checkoutCancelled={checkoutCancelled}
                checkoutContinued={checkoutContinued}/>
                <Route path={props.match.path + '/contact-data'}
                       component={ContactData} />
            </div> 
            );
        }

        return summary;
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(checkout);