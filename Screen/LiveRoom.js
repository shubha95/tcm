import React , {Component} from 'react';
import { SafeAreaView,TouchableOpacity,ScrollView,Linking,Image, Button,View,Alert, FlatList, StyleSheet, Text, StatusBar,PermissionsAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import CustomCard from './Components/CustomCard';
import { WebView } from 'react-native-webview';
import {Permission, PERMISSION_TYPE} from '../Screen/AppPermission';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bbb = require('bigbluebutton-js')
let api = bbb.api(
    "https://bbl.anumaandreams.com/bigbluebutton/",   
    "bbl.anumaandreams.com"
    )
let http = bbb.http
let infosUrl = api.monitoring.getMeetings()

export default class LiveRoom extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            meetings:[],
            isLoading:false,
            username:"",
            bbbimage:'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_8fa946e2eef5c74155c1ae3cd0c6e02d/bigbluebutton.jpeg'
        }
    }

    handleClick = (meetingID,attendeePW) => {
        console.log(meetingID)
        const { navigate } = this.props.navigation;
        navigate('JoinMeet',{pass:attendeePW,id:meetingID} )
        // let attendeeUrl = api.administration.join('user_attendee', meetingID, attendeePW)
        // console.log(attendeeUrl)
        // Linking.canOpenURL(attendeeUrl).then(supported => {
        //   if (supported) {
        //     Linking.openURL(attendeeUrl);
        //   } else {
        //     console.log("Don't know how to open URI: " + attendeeUrl);
        //   }
        // })
    }
  
    // refresh_class = () =>{
    //     this.setState({ meetings: {} });
    //     http(infosUrl).then((result) => {
    //         this.setState({ meetings: result.meetings });
    //     })
    // }
    userclass = async () => {
      let valueParsed   =  await AsyncStorage.getItem('token');
      console.log("Tokan===",valueParsed)
      fetch('http://tcmeducation.in/api/my-live-classess/'+valueParsed,{
        method: 'GET',
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) => response.json())
      this.setState({ meetings:response.json() })
       
      .finally(() => setLoading(false));
      
    }
    
 
 






    componentDidMount() {
             this.userclass();
          console.log("meting Info ",infosUrl);
        
    

        // displayData = async ()=>{  
        //     try{  
        //       this.setState({ user: await AsyncStorage.getItem('user_id') });
        //     }  
        //     catch(error){  
        //       alert(error)  
        //     }  
        //   }  
        
        // let meetingCreateUrl = api.administration.create('My Meeting', '1', {
        //     duration: 20,
        //     attendeePW: 'secret',
        //     moderatorPW: 'supersecret',
        //   })
        // http(meetingCreateUrl).then((result) => {
        
        // let moderatorUrl = api.administration.join('moderator', '1', 'supersecret')
        // let attendeeUrl = api.administration.join('attendee', '1', 'secret')
        // this.setState({"moderatorUrl":moderatorUrl})
        // this.setState({"attendeeUrl":attendeeUrl})
        // console.log(`Moderator link: ${moderatorUrl}\nAttendee link: ${attendeeUrl}`)
        
        // let meetingEndUrl = api.administration.end('1', 'supersecret')
        // console.log(`End meeting link: ${meetingEndUrl}`)
        // })
        console.log("iiiiiiiiii")
        http(infosUrl).then((result) => {
        console.log(JSON.stringify(result.meetings))
        this.setState({ meetings: result.meetings });
        //console.log(user)
        })
    }

    
    

    //handleClick = () => {
    //    console.log("ooo")
        //let attendeeUrl = api.administration.join('attendee', '1', 'secret')
        // Linking.canOpenURL(this.state.moderatorUrl).then(supported => {
        //   if (supported) {
        //     Linking.openURL(this.state.moderatorUrl);
        //   } else {
        //     console.log("Don't know how to open URI: " + this.state.moderatorUrl);
        //   }
        // });
    //};

    render() {
        return (
            
            <SafeAreaView style={styles.container}>
                <ScrollView>
                   
                    <View style={styles.container}>
                        <Button
                            onPress={() => this.refresh_class()}
                            title="Refresh List"
                            color="blue"
                            accessibilityLabel="Refresh List"
                        />
                    </View>
                    {this.state.isLoading ? <Text>Loading...</Text> : 
                    ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
                        {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.id}</Text>
                        <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text> */}
                        <FlatList
                        data={this.state.meetings}
                        keyExtractor={({meetingID}, index) => meetingID}
                        renderItem={({ item }) => (
                            <Card title={item.meetingName}>
                                {/*react-native-elements Card*/}
                                <View >
                                
                                </View>
                                <Text style={styles.paragraph}>Subjact : {item.meetingName} </Text>
                                <Button
                                    onPress={() => this.handleClick(item.meetingID,item.attendeePW)}
                                    title="Join To Class"
                                    color="#841584"
                                    accessibilityLabel="Join To Class"
                                />
                                
                                
                            </Card>
                            )}
                        />
                    </View>
                    )}
                </ScrollView>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        width: '100%',
        height: '100%',
        backgroundColor:'#ccc'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
    },
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
        // borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
});

