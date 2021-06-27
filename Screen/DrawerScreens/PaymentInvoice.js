import React from 'react';
import {View , Text ,StyleSheet} from 'react-native';

const PaymentInvoice = (props) => {
    console.log('Payment Complet Response',props.route.params.paymemtRes);
    console.log('Payment Complet user Detale',props.route.params.User);
    return(
        <Text>Payment Invoice</Text>
    )
}


export default PaymentInvoice;