

// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image,FlatList} from 'react-native';
import CustomSlider from '../DrawerScreens/Slider/CourseSlider';
import CustomCard from '../Components/CustomCard';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';

const SubCourse = (props) => {
  console.log("Course Detele id == ",props.route.params.id);
  const navigation = useNavigation();
  const [SubCourseDetele, setData] = useState([]);  
  const [loading, setLoading] = useState(false);
  const SubCoursedetales = ()=>{
    setLoading(true);
    fetch('https://naukrighar.org/api/subcategory-detail/'+props.route.params.id,{
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
     })
     .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
   return;
  }
 
  useEffect(()=>{
 
    SubCoursedetales();
    
  },[]);
 console.log("Course Detae id ==", SubCourseDetele);
 
  return (
      
    <SafeAreaView>
    <ScrollView>
    <Loader loading={loading} />
      <Image  style={styles.tinyLogo}
        source={{uri:SubCourseDetele.image}}
      />
      <Text style={styles.textstyle}>{SubCourseDetele.name}</Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18, }}>{SubCourseDetele.detail}</Text>
      <Text style={styles.subhading}>{SubCourseDetele.name} Up Comming BATCHES</Text>
 
     
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
        height:300,
        width:300,
      justifyContent: 'center',
      marginTop:10,
     marginLeft: 50, 
    },
  
  });