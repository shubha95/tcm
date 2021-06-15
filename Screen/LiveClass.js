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
  const navigation = useNavigation();
   

  const [user , setUser] = useState([]);
  const [animating, setAnimating] = useState(true);


   console.log("valueParsed Home Screen",user);
  const getValuesFromStorage = async () => {

     //requestCameraPermission();
     
     
      let valueParsed   =  await AsyncStorage.getItem('token');

      fetch('http://tcmeducation.in/api/my-live-classess/'+valueParsed,{
        method: 'GET',
       headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) =>{return  response.json() })
      .then((json) => {
        setAnimating(false)
        console.log(json,"live class");
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

  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.requestMultiple(
  //       [PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: "TCM Education  Camera Permission",
  //         message:
  //           "TCM Education needs access to your camera " +
  //           "so you can take video sessions.",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the camera");
  //     } else {
  //       console.log("Camera permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // const requestAudioPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //       {
  //         title: "TCM Education Audio Permission",
  //         message:
  //           "TCM Education needs access to your audio " +
  //           "so you can join audo session.",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the audio");
  //     } else {
  //       console.log("Camera permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  
   
  useEffect(()=>{ 
       
      getValuesFromStorage();
    },[]);


  const onJoinClick  = async(meetingid,user_name,attendeePW,modpw) => {

    let url;
    url = `${config.serverUrl}api/join?meetingID=${meetingid}&fullName=${'bdjdjd'}&redirect=false&password=${attendeePW}`;
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
        keyExtractor={({meetingID}, index) => 'key'+meetingID}
        renderItem={({ item }) => (
            <Card title={item.meetingname}>
                {/*react-native-elements Card*/}
                <View >
                
                </View>
                <Text style={styles.paragraph}>Subjact : {item.meetingname} </Text>
                <Button
                  onPress={()=>{
                    onJoinClick(item.meetingid,item.presen_name,item.attendeepw,item.modpw)
                  }} 
                    title="Join To Class"
                    color="#841584"
                    accessibilityLabel="Join To Class"
                />
                
                
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
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
 
 
});