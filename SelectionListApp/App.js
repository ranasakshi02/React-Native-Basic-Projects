import React,{useState} from 'react';
import {
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  RefreshControl,
  View,
} from 'react-native';

const App = () => {

  const [Sections, setSections]=useState([
    {
    title:'Title 1',
    data:['Item 1-1','Item 1-2'],
    },
  ])
  const onRefresh=()=>{
    setRefreshing(true)
    const adding_index =Sections.length+1
    setSections([...Sections,{
      title:'Title'+adding_index,
      data:
      [
        'Item'+adding_index+'-1',
        'Item'+adding_index+'-2',
      ]
    }])
    setRefreshing(false)
  }
  const [Refreshing,setRefreshing]=useState(false);
  return (
    <SectionList
      keyExtractor={(item,index)=>index.toString()}
      sections={Sections}
      renderItem={({item}) =>
      (
        <View style={styles.item}>
          <Text style={styles.text_iitem}> {item}</Text>
        </View>
      )
      }
      renderSectionHeader={({section}) =>(
        <View style={styles.header}>
            <Text style={styles.text_header}> {section.title}</Text>
          </View>
      )}
      refreshControl={
        <RefreshControl 
          colors={['#ff00ff']}
          refreshing={Refreshing}
          onRefresh={onRefresh}/>
        }
    />


  );
};

const styles = StyleSheet.create({
 header:{
    backgroundColor:'#4ae1fa',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2
 },
 item:{
   borderWidth:1,
   justifyContent:'center',
   alignItems:'center',
 },
 text_header:{
   color:'#000000',
   fontSize:40,
   fontStyle:'italic',
   margin:10,
 },
 text_iitem:{
   color:'#000000',
   fontSize:35,
   margin:5
 },
});

export default App;