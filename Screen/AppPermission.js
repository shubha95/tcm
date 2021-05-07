import React ,{Comment}  from 'react'
import { Platform } from 'react-native';
import {check, PERMISSIONS, RESULTS,request} from 'react-native-permissions';

const PLATFORM_MICROPHONE_PERMISSIONS = {
    ios:PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO
}

const REQUEST_PERMISSION_TYPE = { 
    microphone: PLATFORM_MICROPHONE_PERMISSIONS
}

const PERMISSION_TYPE = {
    microphone:'microphone'
}

class AppPermission {
    checkPermission = async (type): Promise<boolean> => {
        console.log("AppPermission checkPermission type : ", type)
      const permissions = REQUEST_PERMISSION_TYPE[type][Platform.os]
      console.log("AppPermission checkPermission permissions : ", permissions)
      if (!permissions) {
          return true      
       }
    try{
      const result = await check(permissions)
      console.log("AppPermission checkPermission result : ", result)
      if (result == RESULTS.GRANTED) return true
      return this.requestPermission(permissions)//request permission 
         
    }catch (error){
        return false 
        
    }
}

    requestPermission = async (permissions): Promise<boolean> =>{
        console.log("AppPermission checkPermission requestPermission : ", requestPermission)
        try{
           const result = await request(permissions)
           return result == REQUEST.GRANTED
        }catch (error){
           return false
        }
    }
}

const Permission = new AppPermission()
export {Permission, PERMISSION_TYPE}
