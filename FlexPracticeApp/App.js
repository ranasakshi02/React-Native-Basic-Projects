import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const App = () => {
   return (
    <View style={styles.body}>

      <View style={styles.row}>
      <View style={styles.view1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
          </View>
      </View>  
      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
        </View>
      </View>  
      <View style={styles.big_row}>
      <View style={styles.view6}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.view7}>
            <Text style={styles.text}>7</Text>
        </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 body:{
    flex:1,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'column',
 },
row:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ffffff',
},
big_row:{
  flex:1,
  flexDirection:'row',
  alignItems:'stretch',
  justifyContent:'center',
  backgroundColor:'#ffffff',
},
view1:
{
  flex: 1,
  backgroundColor: '#00ffff',
  alignItems: 'center',
  justifyContent: 'center',
},
view2:
{
 flex:2,
 backgroundColor:'#ff00ff',
 alignItems: 'center',
 justifyContent: 'center',
},
view3:
{
 flex:3,
 backgroundColor:'#ffff00',
 alignItems: 'center',
 justifyContent: 'center',
},
view4:
{
 flex:1,
 backgroundColor:'#ff0000',
 alignItems:'center',
 justifyContent:'center'
},
view5:{
  flex:1,
  backgroundColor:'#0fff0f',
  alignItems:'center',
  justifyContent:'center'
},
view6:
 {
    flex:1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 view7:
 {
    flex:1,
    backgroundColor:'#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
 },

 text:{
  color:"#000000",
  fontSize:30,
  fontStyle:'italic',
  margin: 10,
  textTransform:'uppercase',
},

 
});

export default App;
