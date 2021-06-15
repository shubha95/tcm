import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View , Text , TouchableOpacity , StyleSheet, } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Loader from '../Components/Loader';
import RazorpayCheckout from 'react-native-razorpay';



const PayNowDetails = (props) => {

    const [courseName, setCourseName ] = useState('');
    const [coursePrice, setCoursePrice ] = useState('');
    const [price, setPrice ] = useState('');
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone , setCustomerPhone] = useState('');
    const [loading, setLoading] = useState(true);
    

    const getApiData = async() =>{
        try{

            // comments
            
            let response =  await axios.get('http://tcmeducation.in/api/buy/'+props.route.params.course_id+"/"+props.route.params.user_id);
            console.log("axios",response.data.coursename);
            setCourseName(response.data.coursename);
            setCoursePrice(response.data.courseprice);
            setCustomerName(response.data.name);
            setCustomerEmail(response.data.email);
            setCustomerPhone(response.data.mobile);
            setPrice(response.data.price);
            setLoading(false)
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(()=>{

        getApiData();
       
    },[])

    const getRazorpayOrderId = async() => {

        try{

            let json = {
                "courseid":props.route.params.course_id,
                "coursename": courseName,
                "price": price    ,
                "courseprice": coursePrice,
                "userid": props.route.params.user_id,
                "name":  customerName,
                "mobile": customerPhone,
                "email": customerEmail
            }

            let response =  await axios.post('http://tcmeducation.in/api/payment-initiate-request',json);
            console.log("axios",response.data.data);
            let courseorderid = response.data.data.courseorderid;
            var options = {
                order_id:response.data.data.orderId,
                description: courseName,
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_MVRCQLwSXKrfqB', // Your api key
                amount: coursePrice * 100,
                name: 'Course',
                prefill: {
                  email: customerEmail,
                  contact: customerPhone,
                  name: customerName
                },
                theme: {color: '#00A0E3'}
              }
              RazorpayCheckout.open(options).then(async(data) => {
                console.log(data.razorpay_order_id)
                console.log(data.razorpay_signature);
                console.log(data.razorpay_payment_id);
                let params = {
                    "rzp_signature": data.razorpay_signature,
                    "rzp_paymentid": data.razorpay_payment_id,
                    "rzp_orderid": data.razorpay_order_id,
                    "courseorderid": courseorderid
                }
                console.log("params... get ..... code clean",params);
                // let paymemtRes =  await axios.post('http://tcmeducation.in/api/payment-complete',params);
                // console.log("axios payment com",paymemtRes.data);
              }).catch((error) => {
                // handle failure
                console.log(error);
                alert(`Error: ${error.code} | ${error.description}`);
              });
           
        }catch(error){
            console.log(error)
        }

    }

    return(
        !loading 
        ?
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
            <Card containerStyle={{elevation:5,borderRadius:10}}>
                <Card.Title style={{fontSize:22,}}>Course Summary</Card.Title>
                <Card.Divider/>
                    <Card.FeaturedTitle style={{color:'#00A0E3',fontSize:18,textAlign:'center'}}>{courseName}</Card.FeaturedTitle>
                    <Text style={{marginVertical: 10,fontSize:14}}>Buyer Name :  {customerName} </Text>
                    <Text style={{marginVertical: 10,fontSize:14}}>Buyer email :  {customerEmail} </Text>
                    <Text style={{marginVertical: 10,fontSize:14}}>Buyer phone :  {customerPhone} </Text>
                    <Text style={{marginVertical: 10,fontSize:14}}>Course price : <Text style={{fontWeight:'700',fontSize:16}}>{"\u20B9"} {price} </Text></Text>
                    <Text style={{marginVertical: 10,fontSize:14}}>Offer price : <Text style={{fontWeight:'700',fontSize:16}}>{"\u20B9"} {coursePrice} </Text></Text>
                    <Button
                   // icon={<Icon name='code' color='#ffffff' />}
                   onPress={()=>{getRazorpayOrderId()}}
                    buttonStyle={{backgroundColor:'#00A0E3' , borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:20,borderRadius:40}}
                    title='Buy' />
               
            </Card>
        </View>
        :
        <Loader loading={loading} />

    )
}

export default PayNowDetails;