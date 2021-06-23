  // Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, FlatList, SafeAreaView,StyleSheet,PermissionsAndroid, Image, Text,ScrollView,Button} from 'react-native';
 
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import config from './utils/config';
import encript from './utils/encript';
import axios from 'axios';
import fxp from 'fast-xml-parser'
import Loader from './Components/Loader';

const LiveClass = () => {
  useEffect(()=>{ 
    getValuesFromStorage(); 
  },[]);
  const navigation = useNavigation();
  const [user , setUser] = useState([]);
  console.log("valueParsed Home Screen",user);
  const [animating, setAnimating] = useState(true);
  console.log("All Class",animating );
  const getValuesFromStorage = async () => {
     //requestCameraPermission();
     setUser('');
      let valueParsed   =  await AsyncStorage.getItem('token');
      fetch('http://tcmeducation.in/api/my-live-classess/'+valueParsed,{
        method: 'GET',
       headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) =>{return  response.json() })
      .then((json) => {
        setAnimating(false)
       // console.log(json,"live class");
        setUser([...json.data]);
        GetAllPermissions();
       // requestAudioPermission();
      })
      .catch((error) => console.error(error))


  }

   async function GetAllPermissions() {
    try {
      if (Platform.OS === "android") {
        const userResponse = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
        ]);
        console.log("userres",userResponse);
        return userResponse;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  }  
const onTimeClick = async(timestatus) =>{
  alert(' ')
} 

  const onJoinClick  = async(meetingid,usernames,attendeePW,modpw) => {
    usernames=usernames.replace(/\s+/g, '');
    let url;
    url = `${config.serverUrl}api/join?meetingID=${meetingid}&fullName=${usernames}&redirect=false&password=${attendeePW}`;
    url = await encript(url);
    console.log(url,"url--");
   
    navigation.navigate('JoinClass',{url:url})
  }
 
  return (
    <SafeAreaView style={styles.bannerStyle}>
    <ScrollView >
       
    {!animating ? (
     <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
     <FlatList
        data={user}
        keyExtractor={({id}, index) => id}
       // keyExtractor={({meetingID}, index) => 'key'+meetingID}
        renderItem={({ item }) => (
            <Card title={item.meetingname}>
                {/*react-native-elements Card*/}
                
                <Text style={styles.paragraph}>Topic Name : {item.meetingname} </Text>
                <Text style={styles.paragraph}>By : {item.presen_name} </Text>
                <Text style={styles.paragraph}>At Time : {item.timestatus} </Text>
                {item.classstart ? (   
                   <Button
                   onPress={()=>{
                     onJoinClick(item.meetingid,item.username,item.attendeepw,item.modpw)
                   }} 
                     title="Join To Class"
                     color="#00A0E3"
                     accessibilityLabel="Join To Class"
                 />             
               ) : (    <Button
                onPress={()=>{
                  onTimeClick(item.timestatus)
                }} 
                  title="Join To Class"
                  color="#cf242cd6"
                  accessibilityLabel="Join To Class"
              />)}

                
                
            </Card>
            )}
        />
     
     </View>
     ) : (<Text style={styles.paragraph}>No Meeting Found</Text> )}

    <Loader loading={animating} />
                           
    </ScrollView>
  </SafeAreaView>
)   
};

export default LiveClass;

const styles = StyleSheet.create({
 
  paragraph: {
    margin: 7,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  // subdetaleImage: {
  //   width: widthScale(345),
  //   height:heightScale(230),
  //   textAlign: 'center', 
  //  marginLeft: widthScale(35),
  //  marginTop: heightScale(10),
  // },
 
});