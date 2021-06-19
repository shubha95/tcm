  // Import React and Component
import React, {useState, createRef} from 'react';
import { StyleSheet, Select,TextInput,  View, Text, Image, KeyboardAvoidingView, Keyboard, TouchableOpacity,    ScrollView,
} from 'react-native';
import Loader from './Components/Loader';
import { useNavigation } from '@react-navigation/native';


const UpdatePassword = (props) => {
  const navigation = useNavigation();
    console.log("Course Detele id == ",props.route.params.userEmail);
    console.log("Course Detele id == ",props.route.params.userId);
  let useremil = props.route.params.userEmail;
  let userid =  props.route.params.userId;
  const [userRepassword, setuserRepassword] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess,setIsRegistraionSuccess] = useState(false); 
  const ageInputRef = createRef(); 
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
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
    //Show Loader
    setLoading(true);
    var dataToSend = {
      password:userPassword,
      userid:userid,
      email:useremil,
    };
    console.log("Alll Input Deta ",dataToSend)
    fetch('http://tcmeducation.in/api/reset-password', {
      method: 'POST',
      body:JSON.stringify(dataToSend) ,
      headers: {"Content-type": "application/json; charset=UTF-8"}
     
    })
    .then((response) => response.json())
    .then(async(responseJson) => {
      //Hide Loader
      setLoading(false);
      if(responseJson.Status=="true"){
        console.log(responseJson.data.token);
        setIsRegistraionSuccess(true);
         navigation.navigate('login');
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
          Password Update Successful
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
              placeholder="Re Enter password"
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
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Submit Password</Text>
          </TouchableOpacity>
          <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('LoginScreen')}>
              Already Registered ? Please Login
            </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default UpdatePassword;

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
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});
