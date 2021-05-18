

// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';
import HTMLView from 'react-native-htmlview';
import { Card } from 'react-native-elements';
const SubCourse = (props) => {
  console.log("Baches Detele id == ",props.route.params.id);
  const navigation = useNavigation();
  const [BachesDetaile, setBaches] = useState([]); 
  const [loading, setLoading] = useState(false);
  const Bachdetails = ()=>{
    setLoading(true);
    fetch('http://naukrighar.org/api/batch-detail/'+props.route.params.id,{
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
 
  return (
    <SafeAreaView>
    <ScrollView>
    <Loader loading={loading} />
      <Image  style={styles.tinyLogo}
        source={{uri:BachesDetaile.image}}
      />
      <Text style={styles.textstyle}>{BachesDetaile.name}</Text>
      <HTMLView
             value={details}
              // value={BachesDetaile.detail} 
              style={{ marginLeft: 15,marginRight:10, marginTop:10,fontSize:22}}
          />
      <View>
     

  
 
 
    </View>


    </ScrollView>
    </SafeAreaView>
  );
};

export default SubCourse;
const styles = StyleSheet.create({
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
      marginTop:10,
     marginLeft: 20, 
    },
  
  });