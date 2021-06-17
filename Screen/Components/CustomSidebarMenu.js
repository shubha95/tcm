// Import React and Component
import React ,{useState, useEffect}from 'react';
import {View, Text, Alert,styles, StyleSheet,Image,TouchableOpacity} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/native';
import Entypo  from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 

const CustomSidebarMenu = (props) => {

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [userdetale , setuserdetale] = useState([]);
  console.log("User Detele Profile",userdetale);
  const getValuesFromStorage = async () => {
    let valueParsed   =  await AsyncStorage.getItem('token');
    // valueParsed = setUser(valueParsed);
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
  useEffect(()=>{ 
    getValuesFromStorage();
  },[]);
 const logouts = ()=>{
  Alert.alert(
    'Logout',
    'Are you sure? You want to logout?',
    [
      {
        text: 'Cancel',
        onPress: () => {
          return null;
        },
      },
      {
        text: 'Confirm',
        onPress: () => {
          AsyncStorage.clear();
          props.navigation.replace('Auth');
        },
      },
    ],
    {cancelable: false},
  );
 }

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize:25, color: '#307ecc'}}> </Text>
          <Image
              source={require('../../Image/tcm-logo.png')}
              style={{width: '100%', resizeMode: 'contain', marginBottom: 20}}
            />
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
         {userdetale.name}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
              <Entypo name="home" size={20} color='#000000' style={stylesSidebar.iconStyle}/>
              <TouchableOpacity
                onPress={()=>navigation.navigate('homeScreenStack')}  >
                <Text style={stylesSidebar.textStyle}>Home</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',}}>
              <Image source={require('../../Image/course.png')} 
                 style={stylesSidebar.imageiconStyle}
              />
              <TouchableOpacity
                onPress={()=>navigation.navigate('CourseScreenStack')}  >
                <Text style={stylesSidebar.textStyle}>Courses</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',}}>
              <Image source={require('../../Image/course.png')} 
              style={stylesSidebar.imageiconStyle}
              />
              <TouchableOpacity
                onPress={()=>navigation.navigate('mycoursesScreenStack')}  >
                <Text style={stylesSidebar.textStyle}> My Courses</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
              <MaterialCommunityIcons name="history" size={20} color='#000000' style={stylesSidebar.iconStyle} />
              <TouchableOpacity
                onPress={()=>{
                  navigation.reset({
                    routes: [{ name: 'PurchaseScreenStack' }]
                  });
                  //navigation.navigate('PurchaseScreenStack')
                  }}  >
                <Text style={stylesSidebar.textStyle}>Purchase History</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',}}>
              <Image source={require('../../Image/live_calss.png')} 
                style={stylesSidebar.imageiconStyle}
              />
              <TouchableOpacity
                onPress={()=>navigation.navigate('Liveroom')}  >
                <Text style={stylesSidebar.textStyle}>Live Classes</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
              <MaterialCommunityIcons name="account-circle" size={20} color='#000000' style={stylesSidebar.iconStyle}/>
              <TouchableOpacity
                onPress={()=>navigation.navigate('ProfileScreenStack')}  >
                <Text style={stylesSidebar.textStyle}>Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
              <Entypo name="info-with-circle" size={20} color='#000000' style={stylesSidebar.iconStyle}/>
              <TouchableOpacity
                onPress={()=>navigation.navigate('aboutScreenStack')}  >
                <Text style={stylesSidebar.textStyle}>About TCM Education</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
              <Entypo name="info-with-circle" size={20} color='#000000' style={stylesSidebar.iconStyle}/>
              <TouchableOpacity
                onPress={()=>navigation.navigate('privacypolicyScreenStack')}  >
                <Text style={stylesSidebar.textStyle}>PRIVACY POLICY</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../Image/course.png')} 
              style={stylesSidebar.imageiconStyle}
              />
              <TouchableOpacity
                onPress={()=>navigation.navigate('tarmconditionScreenStack')}  >
                <Text style={stylesSidebar.textStyle}>Terms & Condition</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
            <MaterialCommunityIcons name="logout" size={20} color='#000000' style={stylesSidebar.iconStyle}/>
              <TouchableOpacity
              onPress={()=>logouts('')}  >
                <Text style={stylesSidebar.textStyle}>LogOut</Text>
              </TouchableOpacity>
            </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    //backgroundColor: '#00A0E3',
    //paddingTop: 10//,
    //color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#00A0E3',
    padding: 20,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 3,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
   // marginTop: 15,
  },
  imageiconStyle: {
    marginTop:14,
    marginLeft:13,
    width:20,
    height:20,
  },     
  iconStyle: {
    marginTop:14,
  
   },
  textStyle:{
    color: '#000000',
    fontSize:16,
    fontWeight:"400",
    marginLeft:20,
    marginTop:14,
    fontFamily:"notoserif"
  },
});