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
          <Text style={{fontSize: 25, color: '#307ecc'}}> </Text>
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
         <TouchableOpacity
            onPress={()=>navigation.navigate('homeScreenStack')}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>navigation.navigate('CourseScreenStack')}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>navigation.navigate('mycoursesScreenStack')}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}> My Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              navigation.reset({
                routes: [{ name: 'PurchaseScreenStack' }]
              });
              //navigation.navigate('PurchaseScreenStack')
              }}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}>Purchase History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>navigation.navigate('Liveroom')}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}>Live Classes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={()=>navigation.navigate('ProfileScreenStack')}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}>Profile</Text>
          </TouchableOpacity>
         <TouchableOpacity
            onPress={()=>navigation.navigate('aboutScreenStack')}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}>About TCM Education</Text>
          </TouchableOpacity>


          <TouchableOpacity


            onPress={()=>logouts('')}  >
            <Text style={{color: '#FFFF',fontSize:20,fontWeight:"100",marginLeft:20,marginTop:10,}}>LogOut</Text>
          </TouchableOpacity>




        {/* <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text style={{color: '#d8d8d8',fontSize:20,fontWeight:"100"}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
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
          }}
        /> */}
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00A0E3',
    paddingTop: 10,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#00A0E3',
    padding: 15,
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
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },     
    buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop:10,
  },
});