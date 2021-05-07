

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image} from 'react-native';
import CustomSlider from '../DrawerScreens/Slider/CourseSlider';


const CourseDetails = () => {

  
  return (
      
    <SafeAreaView>
    <ScrollView>
 
      <Image  style={styles.tinyLogo}
        source={require('../../Image/CAT.png')}
      />
      <Text style={styles.textstyle}>LAW ENTRANCE</Text>
     
      {/* <Text style={{textAlign: 'center',  fontSize:30 , fontWeight: 'bold' ,paddingBottom:10,paddingTop:10}}>Created by: TCM</Text> */}
      
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18, }}>The institution you choose to pursue law will play the most crucial role in determining your success rate in the field of law. An ace university/college will provide you with the most holistic environment essential for improving, learning and competing with the best in this field. The curriculum, exchange programmes with foreign universities, the crowd, the opportunities, and the exposure that you will get will be unmatched in a sought-after law college/university. Giving a small example, Gujarat National Law University, every year, organizes an international moot in which law students from all over the world participate including the USA and UK. Imagine how enlightening it will be to compete with those students, to get a chance to talk to them and discuss the law of their country, something that will broaden your horizon and give you an edge over others.</Text>
      <Text style={styles.subhading}>LAW ENTRANCE RELATED COURSES</Text>
    <CustomSlider 
      buttomn="View Course"
    />
     
    </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetails;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        fontSize: 18,
    },
    textstyle:{
       textAlign: 'center', 
       fontSize:30 , 
       fontWeight: 'bold',
    
    },
    subhading:{
      // textAlign: 'center', 
      fontSize:18 ,
      marginTop:10,
      fontWeight: 'bold',
      marginLeft: 15,
      marginRight:10
   
   },
    tinyLogo: {
        height:300,
        width:300,
      justifyContent: 'center',
      marginTop:10,
     marginLeft: 50, 
    },
  
  });