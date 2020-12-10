import React, { useState } from 'react';
import { StyleSheet, View,Text,Dimensions,FlatList,Image,SafeAreaView,TouchableOpacity } from 'react-native';

const listTab = [
  {
    status: 'All'
  },
  {
    status: 'Purple'

  },
  {
    status: 'Green'

  }
]

const data = [

  {
    name:'111',
    status:'Green',
    
  },
  {
    name:'111',
    status:'Purple',
  },
  {
    name:'111',
    status:'Green'
  },
  {
    name:'111',
    status:'Purple'
  },
  {
    name:'111',
    status:'Green'
  },

]

// const fetchData = () =>{
//   const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'
//   fetch(REQUEST_URL)
//       .then((response)=>response.json())
//       .then((responseData)=>{
//           setDataSource(responseData)
//       })
//       .catch((err)=>{
//           console.log('err true', err)
//       })
// }




const App =() =>{
  const [status, setStatus] = useState('All')
  const [datalist, setDatalist] = useState(data)
  const setStatusFilter = status =>{
    if(status !=='All'){ //purple and green
      setDatalist([...data.filter(e =>e.status === status)])
    }else{
      setDatalist(data)
    }
    setStatus(status)
  }


  const renderItem = ({item , index}) =>{
    return(
      <View key={index} style={styles.itemContainer}>
        <View style ={styles.itemLogo}>
          <Image 
            style={styles.itemImage}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScH5160nUSb9vM619BJfd17x70JTwEkeRPQTDjpxzo9Bik_ktofFrEDnjYkPuroUD9zo3G7GKc&usqp=CAc'}}
          />
        </View>
        <View  style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={[
          styles.itemStatus,
          {backgroundColor:item.status ==='Purple'? '#e5848e': '#69c080'}]}
        >
          <Text>{item.status}</Text>
        </View>
      </View>
    )
  }
  return(
    <SafeAreaView style ={styles.container}>
      <View  style = {styles.listTab}>
        {
          listTab.map(e=>(
            <TouchableOpacity
              style={[styles.btnTab, status === e.status && styles.btnTabActive]}
              onPress={()=>setStatusFilter(e.status)}
              >
            <Text style= {[styles.textTab, status === e.status && styles.textTabActive]}>
              {e.status}
            </Text>
          </TouchableOpacity>
            ))
        }
        
      </View>

      <FlatList 
        data= {datalist}
        keyExtractor={(e, i) =>i.toString()}
        renderItem={renderItem}
      />
      
    </SafeAreaView>
  )
}
export default App


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  listTab:{
    flexDirection: 'row',
    alignSelf:'center',
    marginBottom: 40
  },
  btnTab:{
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    marginTop:50,
    justifyContent: 'center'
  },
  textTab:{
    color:'#000000',
    fontSize: 16
  },
  btnTabActive:{
    backgroundColor:'#E6838D'
  },
  textTabActive:{
    color: '#fff'
  },
  itemContainer:{
    flexDirection: 'row',
    paddingVertical: 15

  },
  itemLogo:{
    padding:  15
  },
  itemImage:{
    width: 50,
    height:50
  },
  itemBody:{
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  itemName:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemStatus:{
    backgroundColor: 'green',
    paddingHorizontal: 6,
    justifyContent: 'center',
    right: 12
  }
})