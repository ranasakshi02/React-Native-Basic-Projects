import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Button,
  ToastAndroid,
  Alert,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import CustButton from './CustomButton';
const App  = () => {
  const [name,SetName] = useState('');
  const [submitted,SetSubmitted] = useState(false);
  const[showWarning,setShowWarning]=useState(false);


  const onButtonClick = () =>{
    if(name.length > 3)
    {
      SetSubmitted(!submitted);
    }
    else{
      // Alert.alert('Warning','The name must be more than 3 letters',[{text:'OK',onPress:()=>console.warn('Ok pressed!')},
      // {text:'Cancel',onPress:()=>console.warn('Cancel pressed!')}],{cancelable:true,onDismiss:()=>console.warn('Alert Dismissed')})
      //ToastAndroid.show('The name must be more than 3 letters',ToastAndroid.SHORT)
      setShowWarning(true)
    }
   

  }
  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        onRequestClose={()=>
          setShowWarning(false)
        }
        animationType='slide'
        transparent
        hardwareAccelerated
      >
        <View style={styles.center_view}>  
          <View style={styles.warrning_model}>
            <View style={styles.warning_title}><Text style={styles.text}>WARNING!!</Text></View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The Name must be  more than 3 character</Text>
            </View>
            <Pressable
              onPress={()=>setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color:'#00ff00'}}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
          </View>
        
      </Modal> 
      <Text style={styles.text}>
        Please Enter Your Name:
      </Text> 
      <TextInput 
        //multiline // to use multiple lines in text box
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value)=> SetName(value)}
        keyboardType='default'// to key board type chnge
       // maxLength={2}//input validation num of character enter
       // editable={false}// to  disable text boc
       //secureTextEntry  // to hide character (for pass field)
      />
      {/* <Button title={submitted ?'Clear' :'Register' }
        onPress={onButtonClick}
        color={'#00ff00'}
        //disabled // to disable button
        //disabled={submitted} // to disable button once add input
      /> */}
      {/* <TouchableOpacity 
      onPress={onButtonClick}
      style={styles.button}
      activeOpacity={0.2}>
        <Text style={styles.text}>
          {submitted ?'Clear' :'Submit' }
        </Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight 
      onPress={onButtonClick}
      style={styles.button}
      activeOpacity={0.2}
      underlayColor={'#dddddd'}>
        <Text style={styles.text}>
          {submitted ?'Clear' :'Submit' }
        </Text>
      </TouchableHighlight> */}

      {/* <TouchableWithoutFeedback 
        onPress={onButtonClick}
       >
         <View  style={styles.button}>
         <Text style={styles.text}>
            {submitted ?'Clear' :'Submit' }
          </Text>
        </View> 
          
      </TouchableWithoutFeedback> */}

      {/* <Pressable onPress={onButtonClick} 
        style={({pressed})=>[{backgroundColor:pressed?'#ff00ff':'#ffff00'},
        styles.button]}
        android_ripple={{color:'#00f'}}>
          <Text style={styles.text}>
            {submitted ?'Clear' :'Submit' }
          </Text>
      </Pressable> */}
      <CustButton
       onPressButton={onButtonClick}
        title={submitted ?'Clear' :'Submit'}/>
      {
        submitted ?
        <View style={styles.body}>
          <Text style={styles.text}>
            You Are Register As:{name}
          </Text>
          <Image 
        resizeMode='stretch'
        style={styles.image}
        source={require('./assets/done.jpg')}/>
        </View>
        :
        <Image 
        resizeMode='stretch'
        style={styles.image}
        source={require('./assets/warn2.jpg')}/>
      }
     

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor:'#ffffff',
    alignItems:'center'
  },
  text:{
    color:'#000000',
    fontSize:25,
    margin:10,
    textAlign:'center'
  },
  input:{
    width:200,
    borderWidth:1,
    borderColor:'#555',
    borderRadius:5,
    textAlign:'center',
    fontSize:20,
    margin:10
  },
  button:{
    height:60,
    width:170,
    alignItems:'center',
    justifyContent:'center',
   // backgroundColor:'#00ff00',
    //fontSize:10,
  },
  warrning_model:{
    width:300,
    height:300,
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:20
  },
  center_view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000099'
  },
  warning_title:{
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff0',
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  warning_body:{
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  warning_button:{
    backgroundColor:'#ff00ff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  image:{
    width:150,
    height:150,
    margin:10,
  },  
});

export default App;
