 // Import React and Component
 import React ,{useState, useEffect} from 'react';
 import {View, Text, SafeAreaView,StyleSheet, FlatList,Image, Dimensions,ScrollView } from 'react-native';
 import Carousel from 'react-native-banner-carousel';
 import CustomPurchasHistory from '../Components/CustomPurchaseHistory';
 import { useNavigation } from '@react-navigation/native';
 import Loader from '../Components/Loader';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 const PurchaseHistory= () => {
   const navigation = useNavigation();
  
   const [Purchase, setPurchase] = useState([]); 
   const [loading, setLoading] = useState(false);
   console.log("Purchase",Purchase);
   const getValuesFromStorage = async () => {
    let valueParsed   =  await AsyncStorage.getItem('token');
    // valueParsed = setUser(valueParsed);
    console.log("Url",valueParsed);

    fetch('http://naukrighar.org/api/purchase-history/'+valueParsed,{
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => response.json())
    .then((json) => setPurchase(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
  useEffect(()=>{ 
    getValuesFromStorage();
  },[]);
  let PurchaseV = Purchase.success;
  console.log("Course related Detae id  edited==", Purchase.data);
   return (
     <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
     <ScrollView >
  {PurchaseV ? (
    <FlatList
          data={Purchase.data}
          keyExtractor={({id}, index) => id}
          renderItem={({ item }) => (
            <CustomPurchasHistory 
                  title={item.id}
                  name={item.name}
                  enroll={item.enrolldate}
                  Paymentmathod={item.paymethod}
                  totalprice={item.price}
                  imageSource={{uri:item.image}}
                  buttomn="Invoice"
                  onPressDetails={()=>navigation.navigate('Invoicedetail',{id:item.ordernumber})}
                />
            )}
        />
    
) : (<Text> No Purchase  </Text> )}
   
     </ScrollView>
   </SafeAreaView>
 )
 };
 
 export default PurchaseHistory;
 
 const styles = StyleSheet.create({
   container: {
       backgroundColor: '#fff',
       justifyContent: 'center',
       paddingTop:10,
   },
   paragraph: {
   
     fontSize: 18,
     fontWeight: 'bold',
     paddingLeft:20,
     color: '#34495e',
   },
 });