import React ,{useState, useEffect} from 'react';
import {View , Text, Image ,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView}  from 'react-native';
import { Card } from 'react-native-elements';
import Loader from '../Components/Loader';
import { heightScale, widthScale } from '../utils/helper';

const CustomCard = (props) => {
  console.log("Order id == ",props.route.params.id);
 
  const [invoiceDetail, setinvoice] = useState([]); 
 
  const [loading, setLoading] = useState(false);
  const invoiceDetails = ()=>{
    setLoading(true);
    console.log("url",'http://tcmeducation.in/api/invoice/'+props.route.params.id)
    fetch('http://tcmeducation.in/api/invoice/'+props.route.params.id,{
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
     })
     .then((response) => response.json())
    .then((json) => setinvoice(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  };  
  useEffect(()=>{ 
    invoiceDetails();
  },[]);
    

  console.log("invoide inrole date == ",invoiceDetail);
    return(
        <SafeAreaView >
        <ScrollView >
        <Loader loading={loading} />
      <Card  >
        <Text style={styles.paragraph}> Enroll Date : {invoiceDetail.enrolldate}</Text>
        <Text style={styles.paragraph}>To: {invoiceDetail.to}</Text>
        <Text style={styles.paragraph}> Email : {invoiceDetail.toemail} </Text>
        <Text style={styles.paragraph}>Address: {invoiceDetail.toaddress}</Text>
        <Text style={styles.paragraph}>Phone : {invoiceDetail.tomobile}</Text>
        <Text style={styles.paragraph}>Price : {invoiceDetail.totalpay}</Text>
        <Text style={styles.paragraph}>Frome : {invoiceDetail.from} </Text>
        <Text style={styles.paragraph}>Email : {invoiceDetail.email} </Text>
        <Text style={styles.paragraph}>Address: {invoiceDetail.address}</Text>
        <Text style={styles.paragraph}>Phone : {invoiceDetail.phone}</Text>
        <Text style={styles.paragraph}>Enroll On: {invoiceDetail.enrollon}</Text>
        <Text style={styles.paragraph}>Total Price : {invoiceDetail.totalpay}</Text>
      </Card>
      
     </ScrollView>
   </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    paragraph: {
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
        // textAlign: 'center',
        color: '#34495e',
      },
      buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        // borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
})


export default CustomCard;