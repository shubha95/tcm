// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image,TextInput,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';
import { heightScale, widthScale } from '../utils/helper';
import Entypo  from 'react-native-vector-icons/Entypo';
// Import Document Picker
import DocumentPicker from 'react-native-document-picker';
const ProfileScreens = () => {
  useEffect(()=>{ 
    getValuesFromStorage();
  },[]);
  const [singleFile, setSingleFile] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [userdetale , setuserdetale] = useState([]);
  const [userName, setUserName] = useState(userdetale.name);
  const [userAdress, setUserAdress] = useState(userdetale.address);
  const [userDob, setUserDob] = useState(userdetale.doa);
  
 
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

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const uploadImage = async () => {
   // Check if any file is selected or not
    if (singleFile != null) { 
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      var dataToSend = {
        fname:userName,
        address:userAdress,
        dob:userDob,
        user_img:data,
      };
      console.log("Alll Input Deta ",dataToSend)







    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <Loader loading={loading} />
           
       <Image  style={styles.tinyLogo} source={image} />
       <View style={{flexDirection:'row',alignItems:'center',}}>
              
              <TouchableOpacity
                onPress={selectFile} >  
                <Text style={{paddingLeft:290}}> <Entypo name="edit" size={20} color='#000000'/></Text>
              </TouchableOpacity>
            </View>
       <Text style={styles.textstyle}>{userdetale.name}</Text>
       <View style={{marginTop:30,paddingLeft: 15,paddingRight: 15}}>
       <TextInput style = {styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
               underlineColorAndroid = "transparent"
              //  placeholder = {userdetale.name}
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               value = {userdetale.name}
             />
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               value = {userdetale.email}
               editable = {false}
             />
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               value = {userdetale.mobile}
               editable = {false}
             />
        <TextInput style = {styles.inputStyle}
               onChangeText={(UserDod) => setUserDob(UserDod)}
               underlineColorAndroid = "transparent"
               placeholder = {userdetale.doa}
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
          <TextInput style = {styles.inputStyle}
               onChangeText={(UserAdress) => setUserAdress(UserAdress)}
               underlineColorAndroid = "transparent"
               placeholder = {userdetale.address}
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
        </View>
        <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={uploadImage}>
              <Text style={styles.buttonTextStyle}>Update Detale</Text>
            </TouchableOpacity>
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
    marginTop: widthScale(15),
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 30,
    borderColor: '#000000',
    marginLeft:20,
    marginRight:40,
  },
  placStyle:{
    marginLeft: widthScale(20),
    marginRight:widthScale(20),
    marginTop:heightScale(30),
  },
  iconStyle: {
    marginTop:-40,
    marginLeft:290,
    marginBottom:10,
   },
   buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#cf242cd6',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#cf242cd6',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
   });