

// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native';
import CustomSlider from '../DrawerScreens/Slider/CourseSlider';
import CustomCard from '../Components/CustomCard';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';
import HTMLView from 'react-native-htmlview';
import { Card } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SubCourse = (props) => {
  console.log("Course Detele id == ",props.route.params.id);
  const navigation = useNavigation();
  const [SubCourseDetele, setData] = useState([]); 
  const [relatedbach, setrelatedbach] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null)
  const SubCoursedetales = ()=>{
    setLoading(true);
    fetch('http://tcmeducation.in/api/subcategory-detail/'+props.route.params.id,{
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
     })
     .then((response) => {return response.json()}  )
     .then((json) => {setData(json);
      setLoading(true);
      // console.log("my Sub_Course Id === ",json.id);
      // console.log("Url ==", 'http://naukrighar.org/api/related-baches/'+json.id);
      fetch('http://tcmeducation.in/api/related-baches/'+json.id,{
        method: 'GET',
       headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) =>{return  response.json() })
      .then((json) => {console.log(json);setrelatedbach(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    })

    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
 
  if(SubCourseDetele.detail != undefined){
    var details = `<div>${SubCourseDetele.detail.replace(/(\r\n|\n|\r)/gm, "")}</div>`;
   }

  
  useEffect(()=>{
 
    SubCoursedetales();
    
  },[]);
  
 console.log("Course Detae id ==", SubCourseDetele);
 console.log("Course related Detae id ==", relatedbach);
 let edited = relatedbach.success;
 
 console.log("Course related Detae id  edited==", edited);
  return (
    <SafeAreaView>
    <ScrollView>
    <Loader loading={loading} />
    <Text style={styles.textstyle}>{SubCourseDetele.name}</Text>
      <Image  style={styles.tinyLogo}
        source={{uri:SubCourseDetele.image}}
      />
      <View style={{marginLeft:10, marginLeft:30,textAlign:"justify",}}>
      <HTMLView
              value= {details} 
              stylesheet={styless}
          />
      </View>
      <View>
      {edited ? (
      <Text style={{ marginLeft: 15,marginRight:10, fontSize:20}}>{SubCourseDetele.name} Related baches</Text>,
        <Card style={{marginBottom:50}}>
  {/* <Card.Title>{relatedbach.data.name}</Card.Title> */}
   
  <Card.Image  source={{uri:relatedbach.data.image}}
          style={{
                  width: 345,
                  height: 200,
                  justifyContent: 'center',
                  marginRight: 45,
                }}
  >
    <Text> </Text>
   
  </Card.Image>
  <TouchableOpacity
            onPress={()=>navigation.navigate('ViewUpcomingBatch',{id:relatedbach.data.id})} 
            style={styles.buttonStyle}
            >
            <Text style={styles.buttonTextStyle}>View Details</Text>
          </TouchableOpacity>
</Card>
) : (<Text></Text> )}
 
 
    </View>


    </ScrollView>
    </SafeAreaView>
  );
};

export default SubCourse;
const styless = StyleSheet.create({
  p:{
    // marginLeft: 28,marginRight:10, marginTop:10, fontWeight:'bold',fontSize:30,
   
   // fontWeight: '100',
     textAlign:"justify",
     lineHeight: 23,
     fontSize:16,
    //fontWeight: '300',
    //color: '#FF3366', // make links coloured pink
  },
});
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        fontSize: 18,
    },
    textstyle:{
      marginTop:10,
      textAlign: 'center', 
      fontSize:25, 
      fontWeight: 'bold',
    
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
      height: 200,
      justifyContent: 'center',
      marginTop:20,
     marginLeft: 30, 
     marginBottom:15,
    },
    buttonStyle: {
      backgroundColor: '#307ecc',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#307ecc',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop:10,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
  
  });