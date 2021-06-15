

// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image,FlatList} from 'react-native';
import CustomSlider from '../DrawerScreens/Slider/CourseSlider';
import CustomCard from '../Components/CustomCard';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';
import HTMLView from 'react-native-htmlview';
const CourseDetails = (props) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [relatedexam, setrelatedexam] = useState([]);
  const [loading, setLoading] = useState(false);
  const Coursedetale = ()=>{
    setLoading(true);
    fetch('http://tcmeducation.in/api/category-detail/'+props.route.params.id,{
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
     })
     .then((response) =>{return response.json()}  )
    .then((json) =>{setData(json);
      console.log("my Course Id === ",json.id);
      fetch('http://tcmeducation.in/api/subcategoryapi/'+json.id,{
        method: 'GET',
       headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) => response.json())
      .then((json) => {console.log(json);setrelatedexam(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  //  return;
  }

  useEffect(()=>{
    Coursedetale();
    // Courserelatedexam();
  },[]);
  // console.log("course detele",data);
  
  console.log("course related exam detele ",relatedexam);
  return (
      
    <SafeAreaView>
    
    <ScrollView>
    <Loader loading={loading} />
    <Text style={styles.textstyle}>{data.name}</Text>
      <Image  style={styles.tinyLogo}
        source={{uri:data.image}}
      /> 
        
     <View style={styles.htmlStyle}>
          <HTMLView
              value={data.detail}
              style={{ marginLeft: 15,marginRight:10,  fontWeight: '300', textAlign:"justify",}}
          />
      </View>
      {/* <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18, }}>{data.detail}</Text> */}
      <Text style={styles.subhading}>{data.name} RELATED COURSES</Text>
      <View >
        <FlatList
          data={relatedexam}
          keyExtractor={({id}, index) => id}
          renderItem={({ item }) => {
            return(
            <CustomCard 
              // heding="UPCOMING BATCHES"
              title={item.id}
              upcomingb={item.name}
              imageSource={item.image}
              onPressDetails={()=>navigation.navigate('ViewSubCourse',{id:item.id})} />
              )
          }}
        />
      </View>
     
    </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetails;
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
      height: 230,
      justifyContent: 'center',
      marginTop:10,
     marginLeft: 20, 
     marginBottom:10,
    },
    htmlStyle:{
      marginLeft: 10,
      marginRight:20,
      fontSize: 16,
      fontWeight: '800',
      marginTop:10,
      //fontFamily:"Lato",
      textAlign:"justify",
     // lineHeight:3.5,
   }
  });