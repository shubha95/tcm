import React, { useEffect, useState } from 'react';
import {View , Text ,Image , StyleSheet} from 'react-native'
import WebView from 'react-native-webview';
import fxp from 'fast-xml-parser';
import axios from 'axios';
import Loader from './Components/Loader';

const JoinClass = (props) => {


    const [token , setToken] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{

        getMeeting();
        
     },[])
 
 

    const getMeeting  = async()=>{

        try{

            let res  =  await axios.get(props.route.params.url);
            console.log("meeting res",res);
            let meetingInfo;
            if(typeof res.data == 'object'){
              meetingInfo = res.data;
            }else{
              meetingInfo  =  fxp.parse(res.data);
            }
            
            console.log("meeting",meetingInfo);
            let sessionToken = meetingInfo.response.session_token
            console.log("session",sessionToken);
            setLoading(false);
            setToken(sessionToken)

            
        }catch(error){
            console.log(error);
        }
    }

   

    return(
        <View style={{flex:1}}>
            <Loader loading={loading} />
            <WebView
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            //mediaPlaybackRequiresUserAction={false}
            allowFileAccessFromFileURLs={true}
            allowUniversalAccessFromFileURLs={true}
            allowsInlineMediaPlayback={true}
            onMessage={event => {
                console.log("event.nativeEvent.data",event.nativeEvent.data);
                alert(event.nativeEvent.data);
            }}
            onShouldStartLoadWithRequest={(request) => {
                console.log("request url",request.url);
                // If we're loading the current URI, allow it to load
                if (request.url === 'http://tcmeducation.in/') return false;
            }}
            userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
            source={{uri:"https://bbl.anumaandreams.com/html5client/join?sessionToken="+token}}
            />
        </View>
    )
}


export default JoinClass;