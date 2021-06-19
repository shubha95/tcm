import React from 'react';
import {View , Text, Image ,TouchableOpacity,StyleSheet}  from 'react-native';
import { Card } from 'react-native-elements';
import { heightScale, widthScale } from '../utils/helper';

const CustomCard = (props) => {
  let image = props.imageSource !== null ? {uri:props.imageSource} : require('../../Image/tcm-logo.png');
    return( 
        <Card title={props.title}>
          <View >
            <Text style={styles.heding} >{props.upcomingb}</Text>
                  <Image
                    source={image}
                    style={styles.cardimageStyle}
                  />
            <TouchableOpacity
                onPress={()=>props.onPressDetails()}
                style={styles.buttonStyle}
                >
                <Text style={styles.buttonTextStyle}>View Details</Text>
              </TouchableOpacity>
          </View>
   
      </Card>
    )

}


const styles = StyleSheet.create({
  heding:{   
    marginBottom: heightScale(10),
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    // paragraph: {
    //     margin: 24,
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: '#34495e',
    //   },
      buttonStyle: {
        backgroundColor: '#00A0E3',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height:heightScale(40),
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: widthScale(35),
        marginRight: widthScale(35),
        marginTop:heightScale(10),
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      cardimageStyle:{
        width: widthScale(320),
        height:heightScale(220),
        marginLeft: widthScale(10),
        fontWeight: 'bold',
        alignItems: 'center',
      },
})


export default CustomCard;