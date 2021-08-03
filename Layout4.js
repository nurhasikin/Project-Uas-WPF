          import React, {useState, useEffect} from 'react';
          import { Text, View, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
          import Constants from 'expo-constants';
          import axios from 'axios';

          // You can import from local files
          import AssetExample from './components/AssetExample';

          // or any pure javascript modules available in npm
          import { Card } from 'react-native-paper';
          import { Ionicons } from '@expo/vector-icons';

          export default function Layout4({navigation}) {
            const [peminjaman, setPeminjaman]=useState([])
        const getPeminjaman = async () => {
          try {
            const dataIsi = await axios.get(
              'https://aqueous-tor-75407.herokuapp.com/api/peminjaman'
            );
            setPeminjaman(dataIsi.data);
            console.log(dataIsi.data);
          }   catch (err) {
            console.error(err.message);
          }
        };
        useEffect(()=>{
        getPeminjaman()
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
                flex:2,
                height:280,
                marginLeft:-30,
                marginRight:15,
                justifyContent:"space-around"
              }}>
              <Text
        style={{transform: [{ rotate: '-90deg'}],
          width:100,
          fontWeight:"bold",
          fontSize:12,
          color:'#925069'
        }}
        > PEMINJAMAN</Text>
              </View>

              <View style={{
                flex:11,
                height:300,
              }}>
              <FlatList

              showsHorizontalScrollIndicator={false}
              horizontal={true}
      data={peminjaman}
      renderItem={
        ({item})=>(
          <>
          <TouchableOpacity onPress={()=>navigation.navigate('Layout3',item)}>
             <View
                style={{
                  width:165,
                  height:270,
                  borderTopLeftRadius:20,
                  borderTopEndRadius:20,
                  borderBottomStartRadius:20,
                  borderBottomEndRadius:20,
                  backgroundColor:'#FFC5C4',
                  marginLeft:10,
                  zIndex:100
                }}
                >
                <Text
                style={{
                  marginTop:40,
                  marginLeft:12,
                  fontWeight:"bold",
                  fontSize:17,
                  color:'#925069'
                }}
              >
                {item.anggota.nama_anggota}
              </Text>
              
              <View style={{
                flexDirection:'row',
                  marginTop:10,
                  marginLeft:20,
              }}>
              <Ionicons name="star" size={22} color="#FDF3F2"
              style={{
                
                top:39,
                left:23,
                zIndex:1
              }}
              />
              <Ionicons name="star" size={22} color="#FDF3F2"
              style={{

                top:39,
                left:53,
                zIndex:1
              }}
              />
              <Ionicons name="star" size={22} color="#FDF3F2"
              style={{

                top:39,
                left:83,
                zIndex:1
              }}
              />
              <Ionicons name="star" size={22} color="#FDF3F2"
              style={{

                top:39,
                left:113,
                zIndex:1
              }}
              />
              <Ionicons name="star-outline" size={22} color="#FDF3F2"
              style={{

                top:39,
                left:143,
                zIndex:1
              }}
              />

              
            </View>
            <Text
                style={{
                  marginTop:10,
                  marginLeft:20,
                  fontWeight:"",
                  fontSize:11,
                  color:'#DBA0A5'
                }}
              >
                from
              </Text>
              <View
              style={{flexDirection:"row",
              justifyContent:"space-between"}}
              >

                <Text
                style={{
                  
                  marginTop:15,
                  marginLeft:20,
                  fontWeight:"Bold",
                  fontSize:10,
                  color:'#8A4B5E'
                }}
                >$</Text>
                <Text
                style={{
                  
                  marginTop:10,
                  marginLeft:1,
                  fontWeight:"Bold",
                  fontSize:15,
                  color:'#8A4B5E'
                }}
                >100</Text>
                <Ionicons name="bookmark-sharp" size={20} color="#F7F1FD" style={{marginRight:10}}/>
              </View>
              
              
                </View>
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
                  marginTop:10,
                  marginLeft:20,
                  marginBottom:15,
                  fontWeight:"bold",
                  fontSize:17,
                  color:'#5D4897'
                }}
              >
                Jabatan
              </Text>
              <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
      data={peminjaman}
      renderItem={
        ({item})=>(
          <>
             <View
                style={{
                  width:165,
                  height:40,
                  borderTopLeftRadius:20,
                  borderTopEndRadius:20,
                  borderBottomStartRadius:20,
                  borderBottomEndRadius:20,
                  backgroundColor:'#FFC5C4',
                  marginLeft:10,
                  zIndex:100
                }}
                >
               
              <Text
                style={{
                  marginTop:10,
                  marginLeft:20,
                  fontWeight:"bold",
                  fontSize:17,
                  color:'#925069'
                }}
              >
                {item.anggota.jabatan}
              </Text>
              
              
                </View>
          </>
        )
      }
      /> 
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
            header:{
                padding:20,

                flexDirection:"row-reverse",
              }
          });
