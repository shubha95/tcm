

// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Loader from '../Components/Loader';
import HTMLView from 'react-native-htmlview'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightScale, widthScale } from '../utils/helper';
const SubCourse = (props) => {
  //console.log("Baches Detele id == ",props.route.params.id);
  const navigation = useNavigation();
  const [BachesDetaile, setBaches] = useState([]); 
  const [userdetale,setUserdetale]= useState('');
  const [CourseName, setCoursename] = useState('');
  console.log("Baches Detele == ",userdetale);
  const [loading, setLoading] = useState(false);
  const EnrollDemoclass = async()=>{
    let userid = await getValuesFromStorage() ;
    setLoading(true);
    fetch('http://tcmeducation.in/api/myprofile/'+userid,{
        method: 'GET',
        headers: {"Content-type": "application/json; charset=UTF-8"}
       })
       .then((response) => response.json())
      .then((json) => {setUserdetale(json)
        let dataToSend = {
          uname: json.name, 
          emails: json.email,
          mobiles:json.mobile,
          coursename:CourseName,
        }
        console.log("dataToSende == ",dataToSend);
        fetch('http://tcmeducation.in/api/course-enroll', {
          method: 'POST',
          body:JSON.stringify(dataToSend) ,
          headers: {"Content-type": "application/json; charset=UTF-8"}
         
        })
        .then((response) => response.json())
        .then(async(responseJson) => {
          console.log(responseJson.success)
          if(responseJson.success==true){
            alert('You Are Enrolled Successfully  ',CourseName)
           navigation.navigate('homeScreenStack');
          }
          else{
            alert('Agen Trey');
          }
        })
        .catch((error) => {  console.error(error);  });
     
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  const Bachdetails = ()=>{
    setLoading(true);
    fetch('http://tcmeducation.in/api/batch-detail/'+props.route.params.id,{
        method: 'GET',
        headers: {"Content-type": "application/json; charset=UTF-8"}
       })
       .then((response) => response.json())
      .then((json) => {setBaches(json)
        setCoursename(json.name)})
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
      <Image 
        source={{uri:BachesDetaile.image}}
        style={styles.subdetaleImage}
      />
      <HTMLView
             value={details}
              style={styles.htmtext}
          />
            <TouchableOpacity  
                style={styles.inrollbutton}
                onPress={EnrollDemoclass}
            >
          <Text style={styles.buttonTextStyle}>Enroll For Demo Class</Text>
        </TouchableOpacity>
      <View></View>


          <TouchableOpacity  style={styles.buttonStyle} onPress={async()=>{
          let userid = await getValuesFromStorage() ;
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
    marginLeft: widthScale(28),
    marginRight: widthScale(10),
    marginTop: heightScale(10),
    fontWeight:'bold',
    fontSize:30,
  },
  buttonStyle: {
    backgroundColor: '#00A0E3',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: heightScale(40),
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: widthScale(35),
    marginRight: widthScale(35),
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
  //   subhading:{
  //     // textAlign: 'center', 
  //     fontSize:18 ,
  //     marginTop:10,
  //     fontWeight: 'bold',
  //     marginLeft: 15,
  //     marginRight:10
   
  //  },
   subdetaleImage: {
      width: widthScale(345),
      height:heightScale(230),
      textAlign: 'center', 
     marginLeft: widthScale(35),
     marginTop: heightScale(10),
    },
    inrollbutton:{ backgroundColor: '#cf242cd6',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
   marginTop:heightScale(15),
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: widthScale(35),
    marginRight: widthScale(35),
   },
  
  });