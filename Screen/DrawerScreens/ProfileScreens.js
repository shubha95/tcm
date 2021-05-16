// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';

const ProfileScreens = () => { 
  const [loading, setLoading] = useState(false);
  const [userdetale , setuserdetale] = useState([]);
  console.log("User Detele Profile",userdetale);
  const getValuesFromStorage = async () => {
    let valueParsed   =  await AsyncStorage.getItem('token');
    // valueParsed = setUser(valueParsed);
    console.log("Url",'https://naukrighar.org/api/subcategoryapi/'+valueParsed);

    fetch('http://naukrighar.org/api/myprofile/'+valueParsed,{
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => response.json())
    .then((json) => setuserdetale(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
  useEffect(()=>{ 
    getValuesFromStorage();
  },[]);
  return (
    <SafeAreaView>
    <ScrollView>
    <Loader loading={loading} />
       <Image  style={styles.tinyLogo} source={require('../../Image/userProfile.png')} />
       <Text style={styles.textstyle}>{userdetale.name}</Text>
       <View style={{marginTop:30,paddingLeft: 15,paddingRight: 15}}>
       <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = {userdetale.name}
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = {userdetale.email}
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = {userdetale.mobile}
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
        </View>
     
    </ScrollView>
    </SafeAreaView>


    
);
};

export default ProfileScreens;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff', 
      fontSize: 18,
  },
  textstyle:{
     textAlign: 'center', 
     fontSize:30 , 
     fontWeight: 'bold',
  },
  tinyLogo: {
    width:300,
    height:300,
    justifyContent: 'center',
    marginTop:10,
   marginLeft: 50,
   borderRadius: 450 / 2,  
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    marginBottom:10,
    flex: 1,
    color: '#141715',
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 30,
    borderColor: '#000000',
  },
  placStyle:{
    marginLeft:20,marginRight:20
    ,marginTop:30
  }
 
   });