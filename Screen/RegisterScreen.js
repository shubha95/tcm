 // Import React and Component
import React, {useState, createRef} from 'react';
import { StyleSheet, Select,TextInput,  View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity,    ScrollView,
} from 'react-native';
import Loader from './Components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import SelectBox from 'react-native-multi-selectbox';
// import { xorBy } from 'lodash';


const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setuserMobile] = useState('');
  const [userRepassword, setuserRepassword] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess,setIsRegistraionSuccess] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill full  Name');
      return;
    }
    // else if (!/A-Za-z/.test(userName)){
    //   alert('Please enter your name');
    //     return;}
    if (!userEmail) {
      alert('Please fill Email');
      return;
 
    }else if (!/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(userEmail)){
      alert('Please enter your email Address');
        return;}
    if (!userPassword) {
      alert('Please enter your P1assword');
      return;
    }
    if (!userRepassword) {
      alert('Please enter your Re Password');
      return;
    }
    if(userPassword!==userRepassword){
      alert('Password And Re Password Not Mach');
      return;
    }
    if (!userMobile)
    {
      alert('Please  Enter Mobile Numbar');
      return;
 
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      fname: userName,
      email: userEmail,
      mobile:userMobile,
      password:userPassword,
      c_password:userRepassword
    };
    console.log("Alll Input Deta ",dataToSend)
    fetch('https://naukrighar.org/api/register', {
      method: 'POST',
      body:JSON.stringify(dataToSend) ,
      headers: {"Content-type": "application/json; charset=UTF-8"}
     
    })
    .then((response) => response.json())
    .then(async(responseJson) => {
      //Hide Loader
      setLoading(false);
      // if (responseJson.status === 'success') {
      //
      //   console.log(
      //     'Registration Successful. Please Login to proceed'
      //   );
      // } else {
      //   setErrortext(responseJson.msg);
      // }
      
      console.log("response data",responseJson);
      console.log("responseJson.success",responseJson.success);
      if(responseJson.success=="true"){
        console.log(responseJson.data.token);
        await AsyncStorage.setItem('token',JSON.stringify(responseJson) );
        const value = await AsyncStorage.getItem('token');
        console.log("retaurn save api",value);
        setIsRegistraionSuccess(true);
        // navigation.navigate('DrawerNavigationRoutes');
      }
      else{
        alert(responseJson.error);
      }
    })
    .catch((error) => {
      //Hide Loader
      setLoading(false);
      console.error(error);
    });
  };
  

  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#00A0E3',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Image/tcm-logo.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Your Full name"
              placeholderTextColor="#FFFFFF"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#FFFFFF"
              keyboardType="email-address"
              value={userEmail}
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#FFFFFF"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userRepassword) =>
                setuserRepassword(userRepassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Re Password"
              placeholderTextColor="#FFFFFF"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userMobile) => setuserMobile(userMobile)}
              underlineColorAndroid="#f000"
              placeholder="Mobile No."
              placeholderTextColor="#FFFFFF"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current &&
                addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
         
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
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
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
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
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});




// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/

// // Import React and Component
// import React, {useState, createRef} from 'react';
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   Image,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// import Loader from './Components/Loader';

// const RegisterScreen = (props) => {
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userAge, setUserAge] = useState('');
//   const [userAddress, setUserAddress] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
//   const [
//     isRegistraionSuccess,
//     setIsRegistraionSuccess
//   ] = useState(false);

//   const emailInputRef = createRef();
//   const ageInputRef = createRef();
//   const addressInputRef = createRef();
//   const passwordInputRef = createRef();

//   const handleSubmitButton = () => {
//     setErrortext('');
//     if (!userName) {
//       alert('Please fill Name');
//       return;
//     }
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userAge) {
//       alert('Please fill Age');
//       return;
//     }
//     if (!userAddress) {
//       alert('Please fill Address');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
//     //Show Loader
//     setLoading(true);
//     var dataToSend = {
//       name: userName,
//       email: userEmail,
//       age: userAge,
//       address: userAddress,
//       password: userPassword,
//     };
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//     fetch('http://localhost:3000/api/user/register', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type':
//         'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Hide Loader
//         setLoading(false);
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status === 'success') {
//           setIsRegistraionSuccess(true);
//           console.log(
//             'Registration Successful. Please Login to proceed'
//           );
//         } else {
//           setErrortext(responseJson.msg);
//         }
//       })
//       .catch((error) => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });
//   };
//   if (isRegistraionSuccess) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#307ecc',
//           justifyContent: 'center',
//         }}>
//         <Image
//           source={require('../Image/success.png')}
//           style={{
//             height: 150,
//             resizeMode: 'contain',
//             alignSelf: 'center'
//           }}
//         />
//         <Text style={styles.successTextStyle}>
//           Registration Successful
//         </Text>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           activeOpacity={0.5}
//           onPress={() => props.navigation.navigate('LoginScreen')}>
//           <Text style={styles.buttonTextStyle}>Login Now</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
//   return (
//     <View style={{flex: 1, backgroundColor: '#307ecc'}}>
//       <Loader loading={loading} />
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           justifyContent: 'center',
//           alignContent: 'center',
//         }}>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={require('../Image/aboutreact.png')}
//             style={{
//               width: '50%',
//               height: 100,
//               resizeMode: 'contain',
//               margin: 30,
//             }}
//           />
//         </View>
//         <KeyboardAvoidingView enabled>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserName) => setUserName(UserName)}
//               underlineColorAndroid="#f000"
//               placeholder="Enter Name"
//               placeholderTextColor="#8b9cb5"
//               autoCapitalize="sentences"
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 emailInputRef.current && emailInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserEmail) => setUserEmail(UserEmail)}
//               underlineColorAndroid="#f000"
//               placeholder="Enter Email"
//               placeholderTextColor="#8b9cb5"
//               keyboardType="email-address"
//               ref={emailInputRef}
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 passwordInputRef.current &&
//                 passwordInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserPassword) =>
//                 setUserPassword(UserPassword)
//               }
//               underlineColorAndroid="#f000"
//               placeholder="Enter Password"
//               placeholderTextColor="#8b9cb5"
//               ref={passwordInputRef}
//               returnKeyType="next"
//               secureTextEntry={true}
//               onSubmitEditing={() =>
//                 ageInputRef.current &&
//                 ageInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserAge) => setUserAge(UserAge)}
//               underlineColorAndroid="#f000"
//               placeholder="Enter Age"
//               placeholderTextColor="#8b9cb5"
//               keyboardType="numeric"
//               ref={ageInputRef}
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 addressInputRef.current &&
//                 addressInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.SectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserAddress) =>
//                 setUserAddress(UserAddress)
//               }
//               underlineColorAndroid="#f000"
//               placeholder="Enter Address"
//               placeholderTextColor="#8b9cb5"
//               autoCapitalize="sentences"
//               ref={addressInputRef}
//               returnKeyType="next"
//               onSubmitEditing={Keyboard.dismiss}
//               blurOnSubmit={false}
//             />
//           </View>
//           {errortext != '' ? (
//             <Text style={styles.errorTextStyle}>
//               {errortext}
//             </Text>
//           ) : null}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             activeOpacity={0.5}
//             onPress={handleSubmitButton}>
//             <Text style={styles.buttonTextStyle}>REGISTER</Text>
//           </TouchableOpacity>
//         </KeyboardAvoidingView>
//       </ScrollView>
//     </View>
//   );
// };
// export default RegisterScreen;

// const styles = StyleSheet.create({
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#7DE24E',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: '#dadae8',
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   successTextStyle: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 30,
//   },
// });