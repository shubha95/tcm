 // Import React and Component
 import React, {useState, createRef} from 'react';
 
 const profile = async () => {
    let valueParsed   =  await AsyncStorage.getItem('token');
    console.log("Url",'http://tcmeducation.in/api/myprofile/'+valueParsed);
        fetch('http://tcmeducation.in/api/myprofile/'+valueParsed)
          .then((response) => response.json());
          console.log("Profile Detale",response);
          return response;
       
          
          
 
};
 export default profile;
 
 