// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { ScrollView } from 'react-native-gesture-handler';

const AboutScreens = () => {

 

  return (
    <SafeAreaView>
    <ScrollView>
 

      <Text style={{textAlign: 'center',  fontSize:30 , fontWeight: 'bold' ,paddingBottom:10,paddingTop:10}}>About TCM</Text>
      <Image 
        style={styles.aboutimage}
        source={require('../../Image/about.jpeg')}
      />
      <Text style={{ marginLeft: 22,marginRight:20,fontSize: 22,fontWeight: '800',marginTop:10,}}> Toil Chamber of Mathematics (TCM EDUCATION) is working in both (offline as well as online) mode and is providing quality education with the most qualified and accomplished mentors from all over the country.
One of the main concern of TCM EDUCATION is to provide quality education for all, So that every student can get the equal opportunity to learn, grow and flourish.
Mentors at TCM EDUCATION never differentiated between the students of different background whether it was of arts, commerce or science, for them every student is a student with unique skills and potential.
Mentors at TCM EDUCATION work immensely hard to support their students and as a result the students forwarded towards success.
In the present scenario where n number of coaching centers are opening and getting closed every hour, TCM EDUCATION stands firmly and with integrity even after more than 15 years of success and hard work and is continuously giving achievers from every field. During the time of covid-19 where none of the coaching centers were able to withstand the crisis, TCM EDUCATION emerged to be the best amongst them and managed to cope with the crisis and succeeded in its online mode as well as offline mode in the wake of it.
Our tagline describes us completely ‘NOT JUST A PROMISE, ONLY RESULTS’, implies that we make students self reliant, confident and capable enough to aim for the sky.</Text>
<Image  style={styles.tinyLogo}
        source={require('../../Image/ajayabout.jpg')}
      />
      <Text style={styles.textstyle}>Ajai Singh </Text>
      <Text style={styles.textstyle}>(Founder & Director)</Text>
      <Text style={{ marginLeft: 22,marginRight:20,fontSize: 22,fontWeight: '800',marginTop:10,}}>Toil Chamber of Mathematics, (TCM EDUCATION) under the directorship of Mr. Ajai Singh surmounted the education sector of Allahabad for more than 15 years.
Ajai sir was very young when he started off in Allahabd. Sir struggled, faced many ups and downs but due to his constant determination he stood up and established himself. Later, he found the higher education sector to be unorganised and disorderly with just a classroom and a few students in it. It was his mission to arrange and systemize the higher education sector and then he launched his first batch of achievers in 2005 under the name of . The Chamber of Mathematics. At that time, sir mainly focused on mathematics so as to remove the phobia of mathematics among students. In 2008 sir launched the complete batches which focused on overall subjects including mathematics, reasoning and verbal ability.
In 2019, sir got his company registered under the name of TOIL CHAMBER OF MATHEMATICS Pvt. Ltd. and launched his full fledged batches under the name of this company itself.
Ajai sir was the first one to change the education pattern of coaching centers of Allahabad for higher studies. During the time of covid-19 where none of the coaching centers were able to withstand the crisis, TCM EDUCATION under the guidance of Ajai sir emerged to be the best amongst them and managed to cope with the crisis and succeeded in its online mode as well as in offline mode in the wake of covid-19 crisis.
Ajai Sir's main concern for Ajai sir was to provide quality education even to whose who were genuinely not able to pay their fees, so for that sir provided education to them at the cost which those students can afford and sometimes even free.
Ajai sir is amongst the most respected and reputed persons of the town who has gained this position and honour due to his constant hard work and helping nature.</Text>
    </ScrollView>
    </SafeAreaView>


    
);
};

export default AboutScreens;

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
  tinyLogo: {
    justifyContent: 'center',
    marginTop:15,
   marginLeft: 50,
   borderRadius: 450 / 2,  
  },
  aboutimage: {
    width: 345,
    height: 350,
    justifyContent: 'center',
    marginTop:10,
   marginLeft: 20, 
  },
});