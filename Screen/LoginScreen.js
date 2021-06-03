 // Import React and Component
import React, {useState, createRef} from 'react';
import { StyleSheet,TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';

import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();
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
  
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    // let formBody = [];
    // for (let key in dataToSend) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

  console.log("datatosend",dataToSend);

    fetch('http://tcmeducation.in/api/login', {
      method: 'POST',
      body:JSON.stringify(dataToSend) ,
      headers: {"Content-type": "application/json; charset=UTF-8"}
     
    })
      .then((response) => response.json())
      .then(async(responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log("response data",responseJson);
        console.log("responseJson.status",responseJson.Status);
        // console.log(responseJson.token);

        // {responseJson.Status ? (console.log("responseJson.true",responseJson.Status)) : (console.log("responseJson.Folse",responseJson.Status) )}


        if(responseJson.Status=='true'){
          await AsyncStorage.setItem('token',JSON.stringify(responseJson.token.id) );
          const value = await AsyncStorage.getItem('token');
          console.log("retaurn save api",value);
          // alert('You clicked the button!')  
          navigation.navigate('DrawerNavigationRoutes');
        }
        else{
          alert('Please Cheak your Email Id Or Password');
        }
        
        // If server response message same as Data Matched
        // if (responseJson.status === 'success') {
        //   AsyncStorage.setItem('user_id', responseJson.data.email);
        //   console.log(responseJson.data.email);
        //   navigation.replace('DrawerNavigationRoutes');
        // } else {
        //   setErrortext(responseJson.msg);
        //   console.log('Please check your email id or password');
        // }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });

// //success
//       {
//         "success":true,
//         "data"  :{
//         "token": "dkkgdgkgfkgffgfgffkfkj"
//         }
//       }
// //error
//       {
//         "success":false,
//         "message" :"Unauthorized"
//       }
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
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#FFFFFF"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
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
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              No Account ? Register here
            </Text>
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
});