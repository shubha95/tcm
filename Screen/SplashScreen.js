// Import React and Component
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet,  Image} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

    
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
     
      AsyncStorage.getItem('token').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 5000);
  }, []);

  return (
    
    <View style={styles.container}>
      <Image
        source={require('../Image/tcm-logo.png')}
        style={{width: '70%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A0E3',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});