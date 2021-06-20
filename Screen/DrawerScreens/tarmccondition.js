  // Import React and Component
  import React from 'react';
  import {View, Text, SafeAreaView,StyleSheet, Image,TextInput} from 'react-native';
  import { ScrollView } from 'react-native-gesture-handler';
   
  
  const tarmccondition= () => { 
   
    return (
      <SafeAreaView>
      <ScrollView>
         <Text style={styles.headingstyle}>General Terms & Conditions for Online Payments</Text>
         <Text style={styles.textStyle}>1. Once a User has accepted these Terms and Conditions, he/ she may register and avail the Services.</Text>
         <Text style={styles.textStyle}>2. In these Terms and Conditions, the term “Charge Back” shall mean, approved and settled credit card or net banking purchase transaction(s) which are at any time refused, debited or charged back to merchant account (and shall also include similar debits to Payment Service Provider's accounts, if any) by the acquiring bank or credit card company for any reason whatsoever, together with the bank fees, penalties and other charges incidental thereto.</Text>
         <Text style={styles.textStyle}>3. Server Slow Down/Session Timeout: In case the Website or Payment Service Provider’s webpage, that is linked to the Website, is experiencing any server related issues like ‘slow down’ or ‘failure’ or ‘session timeout’, the User shall, before initiating the second payment, check whether his/her Bank Account has been debited or not and accordingly resort to one of the following options:</Text>
         <Text style={styles.textStyle}>   .In case the Bank Account appears to be debited, ensure that he/ she does not make the payment twice and immediately thereafter contact The Chamber of Mathematics via e-mail or any other mode of contact as provided by The Chamber of Mathematics to confirm payment.</Text>
         <Text style={styles.textStyle}>   .In case the Bank Account is not debited, the User may initiate a fresh transaction to make payment.</Text>
         <Text style={styles.textStyle}>   .However, the User agrees that under no circumstances the Payment Gateway Service Provider shall be held responsible for such fraudulent/duplicate transactions and hence no claims should be raised to Payment Gateway Service Provider No communication received by the Payment Service Provider(s) in this regard shall be entertained by the Payment Service Provider(s).</Text>
         <Text style={styles.textStyle}>4. The Chamber of Mathematics and the Payment Service Provider(s) assume no liability whatsoever for any monetary or other damage suffered by the User on account of:</Text>
         <Text style={styles.textStyle} >   .The delay, failure, interruption, or corruption of any data or other information transmitted in connection with use of the Payment Gateway or Services in connection thereto; and/ or</Text>
         <Text style={styles.textStyle}>    .Any interruption or errors in the operation of the Payment Gateway</Text>
         <Text style={styles.textStyle}>5. The User agrees, understands and confirms that his/ her personal data including without limitation details relating to debit card/ credit card transmitted over the Internet may be susceptible to misuse, hacking, theft and/ or fraud and that The Chamber of Mathematics or the Payment Service Provider(s) have no control over such matters. </Text>
         <Text style={styles.textStyle}>6. Although all reasonable care has been taken towards guarding against unauthorized use of any information transmitted by the User, The Chamber of Mathematics does not represent or guarantee that the use of the Services provided by/ through it will not result in theft and/or unauthorized use of data over the Internet.</Text>
         <Text style={styles.textStyle}>7. The Chamber of Mathematics, the Payment Service Provider(s) and its affiliates and associates shall not be liable, at any time, for any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communications line failure, theft or destruction or unauthorized access to, alteration of, or use of information contained on the Website.</Text>
         <Text style={styles.textStyle}>8. The User will be required to login his/ her own User ID and Password, given by The Chamber of Mathematics in order to register and/ or use the Services provided by Chamber of Mathematics on the Website. By accepting these Terms and Conditions the User aggress that his/ her User ID and Password are very important pieces of information and it shall be the User’s own responsibility to keep them secure and confidential. In furtherance hereof, the User agrees to;</Text>
         <Text style={styles.textStyle}>   .Choose a new password, whenever required for security reasons.</Text>
         <Text style={styles.textStyle}>   .Keep his/ her User ID & Password strictly confidential.</Text>
         <Text style={styles.textStyle}>   .Be responsible for any transactions made by User under such User ID and Password.</Text>
         <Text style={styles.headingstyle}>Debit/Credit Card, Bank Account Details</Text>
         <Text style={styles.textStyle}>1. The User agrees that the debit/credit card details provided by him/ her for use of the aforesaid Service(s) must be correct and accurate and that the User shall not use a debit/ credit card, that is not lawfully owned by him/ her or the use of which is not authorized by the lawful owner thereof. The User further agrees and undertakes to provide correct and valid debit/credit card details.</Text>
         <Text style={styles.textStyle}>2. The User may pay his/ her fees to The Chamber of Mathematics by using a debit/credit card or through online banking account. The User warrants, agrees and confirms that when he/ she initiates a payment transaction and/or issues an online payment instruction and provides his/ her card / bank details:</Text>
         <Text style={styles.textStyle}>  .The User is fully and lawfully entitled to use such credit / debit card, bank account for such transactions;</Text>
         <Text style={styles.textStyle}>  .The User is responsible to ensure that the card/ bank account details provided by him/ her are accurate</Text>
         <Text style={styles.textStyle}>  .The User is authorizing debit of the nominated card/ bank account for the payment of fees selected by such User along with the applicable Fees.</Text>
         <Text style={styles.textStyle}>  .The User is responsible to ensure sufficient credit is available on the nominated card/ bank account at the time of making the payment to permit the payment of the dues payable or the bill(s) selected by the User inclusive of the applicable Fee.</Text>
         <Text style={styles.headingstyle}>Payment Gateway Disclaimer</Text>
         <Text style={styles.textStyle}> The Service is provided in order to facilitate access to view and pay Fees online. The Chamber of Mathematics or the Payment Service Provider(s) do not make any representation of any kind, express or implied, as to the operation of the Payment Gateway other than what is specified in the Website for this purpose. By accepting/ agreeing to these Terms and Conditions, the User expressly agrees that his/ her use of the aforesaid online payment Service is entirely at own risk and responsibility of the User.</Text>
         <Text style={styles.headingstyle}>Cancellation Policy</Text>
         <Text style={styles.textStyle}>Once the User will be registered and paid the Fee through online Payment Gateway. He/She will not be able to cancel the transaction in any circumstances. No Payment will be refunded to the User.Payment Refund Policy for Online Payments</Text>
         <Text style={styles.textStyle}>Refund for Charge Back Transaction: In the event there is any claim for/ of charge back by the User for any reason whatsoever, such User shall immediately approach The Chamber of Mathematics with his/ her claim details and claim refund from The Chamber of Mathematics alone. Such refund (if any) shall be affected only by The Chamber of Mathematics via payment gateway or any other means as The Chamber of Mathematics deems appropriate. No claims for refund/ charge back shall be made by any User to the Payment Service Provider(s) and in the event such claim is made it shall not be entertained.</Text>
         <Text style={styles.textStyle}>Refund for fraudulent/duplicate transaction(s):  The User shall directly contact The Chamber Of Mathematics for any fraudulent transaction(s) on account of misuse of Card/ Bank details by a fraudulent individual/party and such issues shall be suitably addressed by The Chamber Of Mathematics alone in line with their policies and rules.</Text>
         <Text style={styles.headingstyle}>Suspension of Service and Acceleration. </Text>
         <Text style={styles.textStyle}>If any amount owing by You under this or any other agreement for Our services is 30 or more days overdue (or 10 or more days overdue in the case of amounts You have authorized Us to charge to Your credit card), We may, without limiting Our other rights and remedies, accelerate Your unpaid fee obligations under such agreements so that all such obligations become immediately due and payable, and suspend Our services to You until such amounts are paid in full. Other than for customers paying by credit card or direct debit whose payment has been declined, we will give You at least 10 days' prior notice that Your account is overdue, in accordance with Section 13.2 (Manner of Giving Notice) for billing notices, before suspending services to You.</Text>
      <Text></Text>
      </ScrollView>
      </SafeAreaView>
  
  
      
  );
  };
  
  export default tarmccondition;
  
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