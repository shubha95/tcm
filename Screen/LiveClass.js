  // Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, FlatList, SafeAreaView,StyleSheet, Image, Text,ScrollView,Button} from 'react-native';
 
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-elements';

const LiveClass = () => {
  const navigation = useNavigation();
   

  const [user , setUser] = useState([]);

   console.log("valueParsed Home Screen",user);
  const getValuesFromStorage = async () => {
      let valueParsed   =  await AsyncStorage.getItem('token');

      fetch('http://tcmeducation.in/api/my-live-classess/'+valueParsed,{
        method: 'GET',
       headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) =>{return  response.json() })
      .then((json) => {console.log(json);setUser(json)})
      .catch((error) => console.error(error))
 

      valueParsed = setUser(valueParsed);

    }
    let edited = user.success;
    console.log("valueParsed",edited);
  useEffect(()=>{ 
      getValuesFromStorage();
    },[]);

  return (
    <SafeAreaView style={styles.bannerStyle}>
    <ScrollView >
       
    {edited ? (
     <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
     <FlatList
                        data={user}
                        keyExtractor={({meetingID}, index) => meetingID}
                        renderItem={({ item }) => (
                            <Card title={item.meetingname}>
                                {/*react-native-elements Card*/}
                                <View >
                                
                                </View>
                                <Text style={styles.paragraph}>Subjact : {item.meetingname} </Text>
                                <Button
                                 onPress={()=>navigation.navigate('JoinMeet',{pass:attendeePW,id:meetingID})} 
                                    title="Join To Class"
                                    color="#841584"
                                    accessibilityLabel="Join To Class"
                                />
                                
                                
                            </Card>
                            )}
                        />
     
     </View>
     ) : (<Text style={styles.paragraph}>{user.message}</Text> )}
                           
    </ScrollView>
  </SafeAreaView>
)   
};

export default LiveClass;

const styles = StyleSheet.create({
 
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
 
 
 
});