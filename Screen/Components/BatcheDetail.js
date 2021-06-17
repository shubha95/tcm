

// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';
import HTMLView from 'react-native-htmlview';
import { Card } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SubCourse = (props) => {
  console.log("Baches Detele id == ",props.route.params.id);
  const navigation = useNavigation();
  const [BachesDetaile, setBaches] = useState([]); 
  console.log("Baches Detele Text response == ",BachesDetaile);
  const [loading, setLoading] = useState(false);
  const Bachdetails = ()=>{
    setLoading(true);
    fetch('http://tcmeducation.in/api/batch-detail/'+props.route.params.id,{
        method: 'GET',
        headers: {"Content-type": "application/json; charset=UTF-8"}
       })
       .then((response) => response.json())
      .then((json) => setBaches(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    
  }
 if(BachesDetaile.detail!= undefined){
  var details = `<div>${BachesDetaile.detail.replace(/(\r\n|\n|\r)/gm, "")}</div>`;
 }
const text = 
  useEffect(()=>{
 
    Bachdetails();
  },[]);

  const getValuesFromStorage = async () => {

    let valueParsed   =  await AsyncStorage.getItem('token');
    return valueParsed
 }
 
  return (
    <SafeAreaView>
    <ScrollView>
    <Loader loading={loading} />
    <Text style={styles.textstyle}>{BachesDetaile.name}</Text>
      <Image  style={styles.tinyLogo}
        source={{uri:BachesDetaile.image}}
      />
      <HTMLView
             value={details}
              style={styles.htmtext}
          />
          <TouchableOpacity  style={styles.buttonStyle} onPress={async()=>{
          let userid = await getValuesFromStorage() ;
          console.log("user_id",userid);
          navigation.navigate('PayNowDetails',{course_id:props.route.params.id,user_id:userid})
          }}>
          <Text style={styles.buttonTextStyle}>Buy Now</Text>
        </TouchableOpacity>
      <View>
    </View>


    </ScrollView>
    </SafeAreaView>
  );
};

export default SubCourse;
const styles = StyleSheet.create({
  htmtext:{
 
    marginLeft: 28,marginRight:10, marginTop:10, fontWeight:'bold',fontSize:30,
  },
  buttonStyle: {
    backgroundColor: '#00A0E3',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginVertical:40
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
    container: {
        backgroundColor: '#fff', 
        fontSize: 18,
    }, 
    textstyle:{
       textAlign: 'center', 
       fontSize:30 , 
       fontWeight: 'bold',
       marginTop:10,
    
    },
    subhading:{
      // textAlign: 'center', 
      fontSize:18 ,
      marginTop:10,
      fontWeight: 'bold',
      marginLeft: 15,
      marginRight:10
   
   },
    tinyLogo: {
      width: 345,
      height: 230,
      justifyContent: 'center',
      // resizeMode: 'contain',
      marginTop:10,
     marginLeft: 20, 
    },
  
  });