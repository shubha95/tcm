// Import React and Component
import React, { useEffect, useState } from 'react';
import {View, Text,FlatList, SafeAreaView,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import CustomCard from '../Components/CustomCard';
import Loader from '../Components/Loader';
import { useNavigation } from '@react-navigation/native';

const CourseScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    fetch('http://naukrighar.org/api/category')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <Loader loading={loading} />
       <View style={styles.container}>

       <View>
   
    <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
        {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.id}</Text>
        <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text> */}
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({ item }) => (
            <CustomCard 
              // heding="UPCOMING BATCHES"
              title={item.id}
              upcomingb={item.name}
              imageSource={item.image}
              onPressDetails={()=>navigation.navigate('ViewSubCourse',{id:item.id})} />
              )}
        />
      </View>
    
  </View>
 
        </View>

        
 
 
    </ScrollView>
  </SafeAreaView>
  );
};

export default CourseScreen;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:20,
    color: '#34495e',
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    // borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});