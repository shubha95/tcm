import React from 'react';
import {View , Text, Image ,TouchableOpacity,StyleSheet}  from 'react-native';
import { Card } from 'react-native-elements';

const CustomCard = (props) => {
  let image = props.imageSource !== null ? {uri:props.imageSource} : require('../../Image/tcm-logo.png');
    return( 
        <Card title={props.title}>
        {/*react-native-elements Card*/}
        <View >
        <Text style={styles.heding}>{props.heding}</Text>
              <Image
              //  resizeMode="contain"
                source={image}
                  style={{
                  width: 345,
                  height: 200,
                  justifyContent: 'center',
                  marginRight: 45,
                }}
              />
              <Text style={styles.heding} >{props.upcomingb}</Text>
                       
        <TouchableOpacity
            onPress={()=>props.onPressDetails()}
            style={styles.buttonStyle}
            >
            <Text style={styles.buttonTextStyle}>View Detale</Text>
          </TouchableOpacity>
            </View>
   
      </Card>
    )

}


const styles = StyleSheet.create({
  heding:{    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',},
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
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
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
})


export default CustomCard;