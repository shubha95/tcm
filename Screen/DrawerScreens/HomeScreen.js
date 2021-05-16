 // Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, FlatList, SafeAreaView,StyleSheet, Image, Text,ScrollView,Button} from 'react-native';
import Loader from '../Components/Loader';
import CustomCard from '../Components/CustomCard';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const HomeScreens = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const  onPressButton = () => {  
        alert('You clicked the button!')  
        return;
     }  
  const [user , setUser] = useState([]);
  const [data, setData] = useState([]);
  const [coursecategory, setCategory] = useState([]);
   console.log("valueParsed Home Screen",user);
  const getValuesFromStorage = async () => {
      let valueParsed   =  await AsyncStorage.getItem('token');
      valueParsed = setUser(valueParsed);
      // console.log("valueParsed",valueParsed);
    }
  const category = () =>{
    setLoading(true);
    fetch('http://naukrighar.org/api/category',{
      method: 'GET',
      headers: {"Content-type": "application/json; charset=UTF-8"}
     })
     .then((response) => response.json())
    .then((json) => setCategory(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
  const Upcamicbach = ()=>{
      setLoading(true);
      fetch('http://naukrighar.org/api/upcoming-batches',{
        method: 'GET',
        headers: {"Content-type": "application/json; charset=UTF-8"}
       })
       .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }
  useEffect(()=>{ 
      Upcamicbach();
      category();
      getValuesFromStorage();
    },[]);

  return (
    <SafeAreaView style={styles.bannerStyle}>
    <Loader loading={loading} />
    <ScrollView >
       <View>
         <Image  style={styles.tinyLogo}
         source={require('../../Image/banner2.png')}
      />
      </View>
                 {/* <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={onPressButton}  
                        style={styles.buttonStyle}
                        title="Register For Off line Classes."  
          
                    />  
                </View>  */}
                {/* <View style={styles.buttonContainer}>  
                    <Button
                        onPress={onPressButton}  
                        style={styles.buttonStyle}
                        title="Register For Online Classes."  
                        
                    />  
                 </View>  */}
             
     <View ><Text style={styles.heading}>UPCOMING BATCHES</Text>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({ item }) => {
            return(
            <CustomCard 
              // heding="UPCOMING BATCHES"
              title={item.id}
              upcomingb={item.name}
              imageSource={item.image}
              onPressDetails={()=>navigation.navigate('ViewUpcomingBatch',{id:item.id})} />
              )
          }}
        />
      </View>
     <View><Text style={styles.heading}>Coures</Text>
     
     <FlatList
          data={coursecategory}
          keyExtractor={({id}, index) => id}
          renderItem={({ item }) => {
       `     // console.log("my item",item.img_path,item.title);`
            return(
            <CustomCard 
 
              // heding="UPCOMING BATCHES"
              title={item.id}
              upcomingb={item.name}
              imageSource={item.image}
              onPressDetails={()=>navigation.navigate('ViewCourseDetale',{id:item.id})} />
              )
          }}
        />
     
     </View>
                  

                
    
                
    </ScrollView>
  </SafeAreaView>
)
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingTop:20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:20,
    color: '#34495e',
  },
 
  buttonContainer: {  
    margin: 20,
    borderRadius: 30,
    
}, 
top: {
  flex: 0.3,
  backgroundColor: '#307ecc',
  // borderWidth: 1,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  padding: 80,
  margin: 20,
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
},
heading:{
  marginTop:10,
  fontSize: 22,
  fontWeight: 'bold',
  paddingLeft:20,
},
});