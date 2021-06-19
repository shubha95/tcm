// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';
import { heightScale, widthScale } from '../utils/helper';
const ProfileScreens = () => { 
  const [loading, setLoading] = useState(false);
  const [userdetale , setuserdetale] = useState([]);
  let image = userdetale.file_name !== null ? {uri:userdetale.file_name} : require('../../Image/userProfile.png');
 // console.log("User Detele Profile",userdetale);
  const getValuesFromStorage = async () => {
    let valueParsed   =  await AsyncStorage.getItem('token');
    console.log("Url",'http://tcmeducation.in/api/myprofile/'+valueParsed);
    fetch('http://tcmeducation.in/api/myprofile/'+valueParsed,{
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
       <Image  style={styles.tinyLogo} source={image} />
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
    width: widthScale(300),
    height:heightScale(300),
    justifyContent: 'center',
    marginTop: widthScale(10),
    marginLeft:heightScale(50),
   borderRadius: 450 / 2,  
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  inputStyle: {
    marginBottom:heightScale(10),
    borderWidth: 1,
    flex: 1,
    color: '#141715',
    //marginTop: widthScale(15),
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 30,
    borderColor: '#000000',
    
  },
  placStyle:{
    marginLeft: widthScale(20),
    marginRight:widthScale(20),
    marginTop:heightScale(30),
  }
 
   });