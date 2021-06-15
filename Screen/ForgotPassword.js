 // Import React and Component
 import React, {useState, createRef} from 'react';
 import { StyleSheet,TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 // import AsyncStorage from '@react-native-community/async-storage';
 
 import Loader from './Components/Loader';
 
 const LoginScreen = ({navigation}) => {
   const [otp, Setotp] = useState('');
   const [conformpass, Setconformpass] = useState(false);
   const [userEmail, setUserEmail] = useState('');
   const [userId, setUserId] = useState('');
   const [userotp, setUseOtp] = useState('');
   const [loading, setLoading] = useState(false);
   const passwordInputRef = createRef();
   const ConformOtpSubmit=() => {
    console.log(userotp);
    if(otp==userotp){
       navigation.navigate('UpdatePassword',{userEmail:userEmail,userId:userId});
    }else{
      alert('Please Check your Login Id Wrong');
  }
   
   };
   console.log("otp Ganreat",otp);
   const forgatSubmitPress=() => {
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }else if (!/\S+@\S+\.\S+/.test(userEmail)){
      alert('Email address is invalid');
      return;
    } 
   let valmbar = Math.floor(1000 + Math.random() * 9000);
    
     let dataToSend = {email: userEmail, otp: valmbar};
     console.log("datatosend",dataToSend);
     setLoading(true);
     fetch('http://tcmeducation.in/api/forget-password', {
       method: 'POST',
       body:JSON.stringify(dataToSend) ,
       headers: {"Content-type": "application/json; charset=UTF-8"}
      
     })
       .then((response) => response.json())
       .then(async(responseJson) => {
         console.log("response data",responseJson);
         console.log("responseJson.status",responseJson.success);
     if(responseJson.success==true){
      Setconformpass(true);
      Setotp(responseJson.data.otp);
      setUserId(responseJson.data.userid);
     }else{
      alert("Plesse Chek Email Id This Email Id Not Register");
     }
        
       })
       .catch((error) => {
         //Hide Loader
         setLoading(false);
         console.error(error);
       });
 
     setLoading(false);
   };
   const handleSubmitPress = () => {
     setErrortext('');
     if (!userEmail) {
       alert('Please fill Email');
       return;
     }else if (!/\S+@\S+\.\S+/.test(userEmail)){
       alert('Email address is invalid');
       return;
     }
     if (!userPassword) {
       alert('Please fill Password');
       return;
     }
   };
 
   return (
     <View style={styles.mainBody}>
       <Loader loading={loading} />
       <ScrollView
         keyboardShouldPersistTaps="handled"
         contentContainerStyle={{
           flex: 1,
           justifyContent: 'center',
           alignContent: 'center',
         }}>
         <View>
           <KeyboardAvoidingView enabled>
             <View style={{alignItems: 'center'}}>
               <Image
                 source={require('../Image/tcm-logo.png')}
                 style={{
                   width: '70%',
                   height: 100,
                   resizeMode: 'contain',
                   margin: 30,
                 }}
               />
             </View>
             <Text style={styles.heading}>Enter your Register Email Id</Text>
          
                <View>
                    <View>
                        <View style={styles.SectionStyle}>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={(UserEmail) =>
                            setUserEmail(UserEmail)
                        }
                        placeholder="Enter Email" //dummy@abc.com
                        placeholderTextColor="#FFFFFF"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            passwordInputRef.current &&
                            passwordInputRef.current.focus()
                        }
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                        />
                        </View>
                    </View>
                 {conformpass ? (  
                     <View>  
                         <Text style={styles.para}>Check Your  Email Id And Enter 4 Degit Otp</Text>             
                        <View style={styles.SectionStyle}>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={(userotp) =>
                             setUseOtp(userotp)
                        }
                        placeholder="Enter Otp" //dummy@abc.com
                        placeholderTextColor="#FFFFFF"
                        autoCapitalize="none"
                        keyboardType="Enter Your Otp"
                        keyboardType="numeric"
                        onSubmitEditing={() =>
                            passwordInputRef.current &&
                            passwordInputRef.current.focus()
                        }
                        underlineColorAndroid="#f000"
                        blurOnSubmit={false}
                        />
                        </View>  
                        <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  
                  onPress={ConformOtpSubmit}>
                  <Text style={styles.buttonTextStyle}>Submit Otp</Text>
                </TouchableOpacity>
                    </View>
                 ) : (<TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  
                  onPress={forgatSubmitPress}>
                  <Text style={styles.buttonTextStyle}>Send Otp</Text>
                </TouchableOpacity> )}



                 {conformpass ? ( <Text></Text>) : ( <Text></Text> )}
                

                 <Text
                   style={styles.registerTextStyle}
                   onPress={() => navigation.navigate('RegisterScreen')}>
                   No Account ? Register here
                 </Text>
             </View>
             {conformpass ? ( <Text></Text>) : ( <Text></Text> )}
 
 
           </KeyboardAvoidingView>
         </View>
       </ScrollView>
     </View>
   );
 };
 export default LoginScreen;
 
 const styles = StyleSheet.create({
   mainBody: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#00A0E3',
     alignContent: 'center',
   },
   SectionStyle: {
     flexDirection: 'row',
     height: 40,
     marginTop: 20,
     marginLeft: 35,
     marginRight: 35,
     margin: 10,
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
   buttonTextStyle: {
     color: '#FFFFFF',
     paddingVertical: 10,
     fontSize: 16,
   },
   inputStyle: {
     flex: 1,
     color: 'white',
     paddingLeft: 15,
     paddingRight: 15,
     borderWidth: 2,
     fontSize: 14,
     borderRadius: 30,
     borderColor: '#dadae8',
   },
   registerTextStyle: {
     color: '#FFFFFF',
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 14,
     alignSelf: 'center',
     padding: 10,
   },
   errorTextStyle: {
     color: 'red',
     textAlign: 'center',
     fontSize: 14,
   },
   heading:{ 
   fontSize: 22,
   fontWeight: 'bold',
   color: '#FFFFFF',
   textAlign:'center',
 },
 para:{ 
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign:'center',
  },
 });