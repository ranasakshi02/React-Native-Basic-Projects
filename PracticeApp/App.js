import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
//add
const [count,setCount]=useState(0);

const onClickAdd=()=>{
  setCount(count + 1)
}

  return (
   <View style={styles.body}>
      <Text style={styles.text}>{count*5}</Text>
      <Button title='Add' onPress={onClickAdd}></Button>
      <Text style={styles.text}>you Clicked {count} times</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#0ccccc',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#ffffff',
    fontSize:20,
    fontStyle:'italic',
    margin:20,
  },
});

export default App;
