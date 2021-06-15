// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
// import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import AboutScreens from './DrawerScreens/AboutScreens';
import ProfileScreens from './DrawerScreens/ProfileScreens'; 
import CourseScreen from './DrawerScreens/CourseScreen';
import CourseDetails from './Components/CourseDetails';
import BatcheDetail from './Components/BatcheDetail';
import PurchaseHistory from './DrawerScreens/PurchaseHistory';
import Invoice from './DrawerScreens/invoice';
import LiveRoom from './LiveRoom';
import LiveClass from './LiveClass'
import JoinMeet from './JoinMeet';
import SubCourse from './DrawerScreens/SubCourse';
import MyCourses from './DrawerScreens/Mycourses';
import JoinClass from './JoinClass';
import PayNowDetails from './DrawerScreens/PayNowDetails';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'TCM Education', //Set Header Title
          drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="md-home"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },    // headerLeft: () => (
          //   <NavigationDrawerHeader navigationProps={navigation} />
          // ),
          headerTintColor: '#ffff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PayNowDetails"
        component={PayNowDetails}
        options={{
          title: 'Summary', //Set Header Title
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
       <Stack.Screen
        name="ViewPurchase"
        component={CourseScreen}
        options={{
          title: 'Purchase History', //Set Header Title
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#FFFFFF', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ViewCourse"
        component={CourseScreen}
        options={{
          title: 'View Course', //Set Header Title
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
     <Stack.Screen
        name="ViewCourseDetale"
        component={CourseDetails}
        options={{
          title: 'View Course Details', //Set Header Title
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ViewSubCourse"
        component={SubCourse}
        options={{
          title: 'Related Course Detail', //Set Header Title
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      
      <Stack.Screen
        name="ViewUpcomingBatch"
        component={BatcheDetail}
        options={{
          title: 'Upcoming Batches Detail', //Set Header Title
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      {/* <Stack.Screen
        name="PurchaseHistory"
        component={PurchaseHistory}
        options={{
          title: 'Purchase History', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      /> */}


    </Stack.Navigator>
  );
};
const CourseScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="CourseScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#00A0E3', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={{
            title: 'Course', //Set Header Title
          }}/>
   <Stack.Screen
        name="ViewUpcomingBatch"
        component={BatcheDetail}
        options={{
          title: 'Batches Detail', //Set Header Title
          // headerStyle: {
          //   backgroundColor: '#307ecc', //Set Header color
          // },
          // headerTintColor: '#fff', //Set Header text color
          // headerTitleStyle: {
          //   fontWeight: 'bold', //Set Header text style
          // },
        }}
      />
  
    </Stack.Navigator>
  );
};

const aboutScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="AboutScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#00A0E3', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AboutScreens"
        component={AboutScreens}
        options={{
          title: 'About', //Set Header Title
            headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const PurchaseScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="PurcaseScreens"
      screenOptions={{
        
        headerStyle: {
          backgroundColor: '#00A0E3', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
 
      <Stack.Screen
           name="PurcaseScreens"
           component={PurchaseHistory}
           options={{
            headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
          title: 'Purchase History', //Set Header Title
          }}/>
        <Stack.Screen
          name="Invoicedetail"
          component={Invoice}
          options={{
        title: 'Invoice Detail', //Set Header Title
        }}
          />
  
    </Stack.Navigator>
  );
};
 
const LiveClassesScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="LiveScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#00A0E3', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
     
      <Stack.Screen
        name="LiveRoom"
        component={LiveClass}
        options={{
          title: 'Live Class ', //Set Header Title
          // headerStyle: {
          //   backgroundColor: '#307ecc', //Set Header color
          // },
          // headerTintColor: '#fff', //Set Header text color
          // headerTitleStyle: {
          //   fontWeight: 'bold', //Set Header text style
          // },
        }}
      />
      <Stack.Screen
        name="JoinClass"
        component={JoinClass}
        options={{
         headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};
const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#00A0E3', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreens}
        options={{
          title: 'Profile', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const mycoursesScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="mycourse"
      screenOptions={{

        headerStyle: {
          backgroundColor: '#00A0E3', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="mycourse"
        component={MyCourses}
        options={{
          headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
          title: 'My Courses', //Set Header Title
        }}
      />
      <Stack.Screen
        name="ViewUpcomingBatchs"
        component={BatcheDetail}
        options={{
          title: 'Batches Detail', //Set Header Title
          headerStyle: {
            backgroundColor: '#00A0E3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};


const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical:0, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',fontSize:20,fontWeight:"100",
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={(props)=> <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="ProfileScreenStack"
        options={{drawerLabel: 'Profile'}}
        component={ProfileScreenStack}
      />
      <Drawer.Screen
        name="CourseScreenStack"
        options={{drawerLabel: 'Courses'}}
        component={CourseScreenStack}
      />
       <Drawer.Screen
        name="aboutScreenStack"
        options={{drawerLabel: 'About TCM'}}
        component={aboutScreenStack}
      />
      <Drawer.Screen
        name="Liveroom"
        options={{drawerLabel: 'Live Classes'}}
        component={LiveClassesScreenStack}
      />
      <Drawer.Screen
        name="PurchaseScreenStack"
        options={{drawerLabel: 'Purchase History'}}
        component={PurchaseScreenStack}
      />
     <Drawer.Screen
        name="mycoursesScreenStack"
        options={{drawerLabel: 'My Courses'}}
        component={mycoursesScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;