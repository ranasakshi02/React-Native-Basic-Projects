

import React,{useState} from 'react';
//import type {Node} from 'react';
import {
  Button,
  ScrollView,
  Linking,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
} from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';
const App = () =>  {
//   set name dynamicaly
//   const[name,setName]= useState('Style Test')
//  onclicck handler 
//   const onClickHandler= () =>{
//     setName('Style test is Done!')
// setSession({number:7,title:'Style'})
// setCurrent(false)
//   }
 // //use nultiple field 
 //   const [session,setSession] =useState({number:6,title:'state'})
 // //boolean value
 //   const [current,setCurrent]= useState(true)
  
  const[Items,setItems]=useState([
    {name:'item1'},
    {name:'item2'},
    {name:'item3'},
    {name:'item4'},
    {name:'item5'},
    {name:'item6'},
    {name:'item7'},
    {name:'item8'},
    {name:'item9'},
    {name:'item10'}
    
  ])

  const DATA=[
    {
      title:'Title1',
      data:['item1-1','item1-2','item1-3']
    },
    {
      title:'Title2',
      data:['item2-1','item2-2','item2-3']
    },
    {
      title:'Title3',
      data:['item3-1','item3-2','item3-3']
    },
    {
      title:'Title4',
      data:['item4-1','item4-2','item4-3']
    },
    {
      title:'Title5',
      data:['item5-1','item5-2','item5-3']
    }

  ]
//flatlist use string as a key
  const[Refreshing,setRefreshing]=useState(false)

  const onRefresh = () =>
  {
    setRefreshing(true);
    setItems([...Items,{name:'item11'}]);
    setRefreshing(false);
  }
  return (

    <SectionList
      keyExtractor={(item,index)=>index.toString()}
      sections={DATA}
      renderItem={({item}) =>(
             <Text style={styles.text}>{item}</Text>
           
         )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
             <Text style={styles.text}>{section.title}</Text>
           </View>
      )}
    />
    // <FlatList
    // keyExtractor={(item,index)=>index.toString()}
    // data={Items}
    // renderItem={({item}) =>(
    //   <View style={styles.item}>
    //     <Text style={styles.text}>{item.name}</Text>
    //   </View>
    // )}
    // refreshControl={
    //      <RefreshControl 
    //        colors={['#ff00ff']}
    //        refreshing={Refreshing}
    //        onRefresh={onRefresh}/>
    //      }
    // />

    // <ScrollView horizontal={false} style={styles.body}
    //   refreshControl={
    //   <RefreshControl 
    //     colors={['#ff00ff']}
    //     refreshing={Refreshing}
    //     onRefresh={onRefresh}/>
    //   }
    // >
      
    //     {
    //       Items.map((object) =>{
    //         return(
    //           <View style={styles.item} key={object.key}>
    //             <Text style={styles.text}>{object.item}</Text>
    //         </View>
    //         )
    //       }) 
    //     }
    // </ScrollView> 
   
    
  );
};

const styles = StyleSheet.create({
 body:{ 
   flex:1,
   //height:400,
   //width:400,
   flexDirection:'column',
   backgroundColor: '#ffffff',
  // justifyContent:'center',
   //alignItems:'stretch',
   //borderColor:'#0ccbbc',
  // borderWidth:5,
   //borderRadius:10,
   //margin:10,
  },
  item:
  {
    backgroundColor:'#4ae1fa',
    justifyContent:'center',
    alignItems:'center',
    margin:5

  },
  text:{
    color:"#000000",
    fontSize:35,
    fontStyle:'italic',
    margin: 10,
    //textTransform:'uppercase',
  },
 
});

export default App;
