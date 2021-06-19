import React from 'react';
import {View , Text,SafeAreaView,ScrollView, Image ,TouchableOpacity,StyleSheet}  from 'react-native';
import { Card } from 'react-native-elements';
import { heightScale, widthScale } from '../utils/helper';

const CustomPurchasHistory = (props) => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.container}>
        
          <Card title={props.title}>
          <View >
              <Image
                source={props.imageSource}
                style={styles.purchimageStyle}
              />
            </View>
            {/*react-native-elements Card*/}
            <Text style={styles.paragraph}>{props.name}</Text>
            <Text style={styles.paragraph}>Enroll On - {props.enroll}</Text>
            <Text style={styles.paragraph}>Payment Mode - {props.Paymentmathod }</Text>
            <Text style={styles.paragraph}>Total Price - {props.totalprice }</Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={()=>props.onPressDetails()}
              // onPress={() => navigation.navigate('ViewCourse')}              
               >
              <Text style={styles.buttonTextStyle}>{props.buttomn}</Text>
            </TouchableOpacity>
          </Card>
        </View>
        </ScrollView>
      </SafeAreaView>
      );

}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      marginTop:heightScale(10),
      fontSize: 18,
      fontWeight: 'bold',
      // textAlign: 'center',
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
        marginTop: 20,
        marginBottom: 25,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
    
    
      purchimageStyle: {

        width: widthScale(350),
        height:heightScale(350),
        justifyContent: 'center',
      },
  });


export default CustomPurchasHistory;