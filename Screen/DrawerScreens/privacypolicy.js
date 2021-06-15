 // Import React and Component
 import React from 'react';
 import {View, Text, SafeAreaView,StyleSheet, Image,TextInput} from 'react-native';
 import { ScrollView } from 'react-native-gesture-handler';
  
 
 const privacypolicy= () => { 
  
   return (
     <SafeAreaView>
     <ScrollView>
        <Text style={styles.headingstyle}>PRIVACY POLICY</Text>
        <Text style={styles.textStyle}>The chamber of mathematics recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Privacy Policy sets out how the chamber of mathematics uses and protects any information that you give the chamber of mathematics when you use this tcmeducation.online or the the chamber of mathematics mobile application or any other digital medium and other offline sources of our Company. the chamber of mathematics is committed to ensure that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this Privacy Policy as it describes how we treat user information we collect from you, the policies and procedures on the collection, use, disclosure and protection of your information when you use our the chamber of mathematics Platform.</Text>
        <Text style={styles.textStyle}>This Privacy Policy applies to current and former visitors to our the chamber of mathematics Platform and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy. the chamber of mathematics may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</Text>
        <Text style={styles.textStyle}>tcmeducation.online is a property of the chamber of mathematics, Proprietor, established under laws of India, having its registered office at Proprietor, Uttar Pradesh - 211001.</Text>
        <Text style={styles.headingstyle}>DEFINITIONS</Text>
        <Text style={styles.textStyle}>The terms  TCM EDUCAION, Company, we  and our refer to the the chamber of mathematics.</Text>
        <Text style={styles.textStyle} >The term "the chamber of mathematics Platform" refers to tcmeducation.online or the the chamber of mathematics mobile application or any other digital medium and other offline sources.</Text>
        <Text style={styles.textStyle}>The terms "you" and "your" refer to the user of the tcmeducation.online.</Text>
        <Text style={styles.textStyle}>The term "Group" means, with respect to any person, any entity that is controlled by such person, or any entity that controls such person, or any entity that is under common control with such person, whether directly or indirectly, or, in the case of a natural person, any Relative (as such term is defined in the Companies Act, 1956 and Companies Act, 2013 to the extent applicable) of such person.</Text>
        <Text style={styles.textStyle}>The term "Services" refers to any services offered by the chamber of mathematics whether on the Swiggy Platform or otherwise.</Text>
        <Text style={styles.textStyle}>The term "Policy" refers to this Privacy Policy.</Text>
        <Text style={styles.textStyle}>Please read this Policy before using the the chamber of mathematics Platform or submitting any personal information to the chamber of mathematics. This Policy is a part of and incorporated within, and is to be read along with, the Terms of Use tcmeducation.online/terms_condition.</Text>
        <Text style={styles.textStyle}>Please read this Policy before using the the chamber of mathematics Platform or submitting any personal information to the chamber of mathematics. This Policy is a part of and incorporated within, and is to be read along with, the Terms of Use tcmeducation.online/terms_condition.</Text>
     <Text></Text>
     </ScrollView>
     </SafeAreaView>
 
 
     
 );
 };
 
 export default privacypolicy;
 
const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff', 
      fontSize: 18,
  },
  headingstyle:{
     textAlign: 'center', 
     fontSize:25 , 
     fontWeight: 'bold',
     marginTop:15,
     marginBottom:10,
     color:'#cf242cd6',
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
  textStyle:{
     marginLeft: 22,
     marginRight:20,
     fontSize: 16,
     fontWeight: '800',
     marginTop:10,
     fontFamily:"Lato",
     textAlign:"justify",
    // lineHeight:3.5,
  }
});