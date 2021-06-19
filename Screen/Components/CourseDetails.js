

// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image,FlatList} from 'react-native';
import CustomSlider from '../DrawerScreens/Slider/CourseSlider';
import CustomCard from '../Components/CustomCard';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';
import HTMLView from 'react-native-htmlview';
import { heightScale, widthScale } from '../utils/helper';
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
      console.log("my Course Detale === ",json);
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
  },[]);
  
  console.log("course related exam detele ",relatedexam);
  return (
      
    <SafeAreaView>
    
    <ScrollView>
    <Loader loading={loading} />
    <Text style={styles.coursenameStyle}>{data.name}</Text>
      <Image  style={styles.courseimageStyle}
        source={{uri:data.image}}
      />
          <HTMLView
              value={data.detail}
              stylesheet={styless}
          />
    
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
const styless = StyleSheet.create({
  p: {
    marginLeft: widthScale(20),
    marginRight: heightScale(30), 
     textAlign:"justify",
     lineHeight: 23,
     fontSize:16,
  },
});
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        fontSize: 18, 
    },
    coursenameStyle:{
      marginTop: heightScale(10), 
       textAlign: 'center', 
       fontSize:25, 
       fontWeight: 'bold',
    },
    subhading:{
      marginRight: widthScale(10),
      marginLeft: widthScale(15),
      fontSize:18 ,
      marginTop:10,
      fontWeight: 'bold',
   },
   courseimageStyle: {
      width: widthScale(345),
      height:heightScale(230),
      justifyContent: 'center',
      textAlign: 'center', 
     marginBottom: heightScale(10),
     marginLeft: widthScale(29),
     marginTop: heightScale(10),
    },
  });