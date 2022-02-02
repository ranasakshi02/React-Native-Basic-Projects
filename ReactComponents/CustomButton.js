import React from "react";

import{
    Pressable,
    Text,
    StyleSheet,

} from "react-native";
const  CustButton=(props) =>
{
    return(

        <Pressable onPress={props.onPressButton} 
        style={({pressed})=>[{backgroundColor:pressed?'#ff00ff':'#ffff00'},
        styles.button]}
        android_ripple={{color:'#00f'}}>
          <Text style={styles.text}>
            {props.title }
          </Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({

button:{
    height:60,
    width:170,
    alignItems:'center',
    justifyContent:'center',
   // backgroundColor:'#00ff00',
    //fontSize:10,
},
text:{
    color:'#000000',
    fontSize:25,
    margin:10,
    textAlign:'center'
  },
})
export default CustButton;