          import React, {useState, useEffect} from 'react';
          import { Text, View, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
          import Constants from 'expo-constants';
          import axios from 'axios';

          // You can import from local files
          import AssetExample from './components/AssetExample';

          // or any pure javascript modules available in npm
          import { Card } from 'react-native-paper';
          import { Ionicons } from '@expo/vector-icons';

          export default function LayoutUtama({navigation}) {
            const [buku, setBuku]=useState([])
        const getBuku = async () => {
          try {
            const dataIsi = await axios.get(
              'https://aqueous-tor-75407.herokuapp.com/api/buku'
            );
            setBuku(dataIsi.data);
            console.log(dataIsi.data);
          }   catch (err) {
            console.error(err.message);
          }
        };
        useEffect(()=>{
        getBuku()
      },[])
            return (
              <View style={styles.container}>
              
              <View style={styles.header}>
                <View style={{flexDirection:"row",
                height:35}}>
            
            
                <Ionicons name="search-outline" size={20} color="black"/>
                
                <Ionicons name="reorder-two-outline" size={20} color="black"/>
                </View>
                
                </View>
                <View
              style={{
                flexDirection:'row'
              }}
              >
              

              <View style={{
                flex:11,
                height:300,
              }}>
              <FlatList

              showsHorizontalScrollIndicator={false}
              horizontal={true}
      data={buku}
      renderItem={
        ({item})=>(
          <>
          <TouchableOpacity onPress={()=>navigation.navigate('Layout1',item)}>
             
                </TouchableOpacity>
          </>
        )
      }
      /> 
             
              </View>
              </View>
                
                
              
              
              <View>
              <Text
                style={{
                  marginTop:-300,
                  marginLeft:35,
                  marginBottom:15,
                  fontWeight:"bold",
                  fontSize:17,
                  color:'#5D4897'
                }}
              >
                MENU PERPUSTAKAAN PCR
              </Text>
              
             <View style={styles.textbox}>
      <View
       style={{
       width:100,
       height:30,
       borderColor:'#5D4897',
       borderWidth:15,
       borderRadius:5,
       marginRight:10,
       flexDirection:'row',
       alignItems:"center"
       }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Layout2')}>
      <Text
    style={{
      fontWeight:"bold",
      marginLeft:20,
      fontSize:12,
      color:'#FFC5C4'
    }}
    >
    Buku
    </Text>
    </TouchableOpacity >
    </View>
<View
       style={{
       width:100,
       height:30,
       borderColor:'#FFC5C4',
       borderWidth:15,
       borderRadius:5,
       marginRight:10,
       flexDirection:'row',
       alignItems:"center"
       }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Layout4')}>
      <Text
    style={{
      fontWeight:"bold",
      fontSize:12,
      color:'#5D4897'
    }}
    >
    Peminjaman
    </Text>
    </TouchableOpacity >
    </View>
    
      </View>


              </View>
                
                <View style={styles.buttomMenu}>
              <View>
              <TouchableOpacity onPress={()=>navigation.navigate('LayoutUtama')}>
              <Ionicons name="home-sharp" size={25} color="#5D4897"/>
              </TouchableOpacity >
              
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('Layout2')}>
              <Ionicons name="lock-closed-outline" size={25} color="#5D4897"/>
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>navigation.navigate('Layout4')}>
              <Ionicons name="bookmark-outline" size={25} color="#5D4897"/>
              </TouchableOpacity >
              </View>
              </View>
              
            );
          }

          const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: 'center',
              paddingTop: Constants.statusBarHeight,
              backgroundColor: '#FCF0F2',
              padding: 8,
            },
            paragraph: {
              margin: 24,
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            },
            buttomMenu:{
          height:40,
          backgroundColor:'#FCF0F2',
          borderRadius:0,
          position:"relative",
          flexDirection:'row',
          marginTop:50,
          justifyContent:"space-around",
          alignItems:'center',
          zIndex:9999
        },
        textbox: {
    flexDirection: 'row',
    margin: 35,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:"space-between"    
  },
            header:{
                padding:20,

                flexDirection:"row-reverse",
              }
          });
