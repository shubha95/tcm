import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
const bbb = require('bigbluebutton-js')
let api = bbb.api(
    "https://bbl.anumaandreams.com/bigbluebutton/", 
    "bbl.anumaandreams.com"
    )
export default class JoinMeet extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            meetingID:this.props.route.params.id,
            attendeePW:this.props.route.params.pass,
            attendeeUrl:""

        }
    }
    componentDidMount() {
        let attendeeUrl = api.administration.join('shubham', this.state.meetingID, this.state.attendeePW)
        console.log('meting  id ',attendeeUrl)
        this.setState({ attendeeUrl: attendeeUrl });
    }
  render() {
    return (
      <WebView 
                useWebKit
                 
              
         userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
        mediaPlaybackRequiresUserAction={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
         source={{ uri: this.state.attendeeUrl }} 
          allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        originWhitelist={['*']}
        allowsInlineMediaPlayback
        bounces={true}
      />
    );
  }
}