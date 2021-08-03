  import * as React from 'react';
  import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
  import Constants from 'expo-constants';

  // You can import from local files
  import AssetExample from './components/AssetExample';

  // or any pure javascript modules available in npm
  import { Card } from 'react-native-paper';
  import { Ionicons } from '@expo/vector-icons';

  export default function Layout3({route,navigation}) {
    const dataList=route.params
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate('Layout4')}>
      <Ionicons name="chevron-back-outline" size={20} color="#F7F1FD"/>
    </TouchableOpacity >

      <View style={{flexDirection:"row"}}>
      <Ionicons name="bookmark-sharp" size={20} color="#F7F1FD" style={{marginRight:10}}/>
      <Ionicons name="ellipsis-vertical-outline" size={20} color="#F7F1FD"/>
      </View>
      </View>
      <View
      style={{
        height:205
      }}
      >
      </View>

      <View
      style={{
        justifyContent:"center",
        marginTop:-170,
        alignItems:"center"
      }}
      >

      <Image style={styles.image} source={{uri:'https://aqueous-tor-75407.herokuapp.com/gambar/'+dataList.buku.foto}}/>
      
      </View>
      
      <View
      style={{
        justifyContent:"center",
        alignItems:"flex-end"
      }}
      >
      <View
        style={{
          width:50,
          height:50,
          borderTopLeftRadius:31,
          borderTopEndRadius:15,
          borderBottomStartRadius:17,
          borderBottomEndRadius:17,
          backgroundColor:'#5E4386',
          position:"absolute",
          top:30,
          left:220,
          zIndex:-1
        }}
        >
        </View>
        <Ionicons name="lock-closed" size={27} color="#F7F1FD"
        style={{

          position:"absolute",
          top:39,
          left:234,
          zIndex:1
        }}
        />
        
      </View>
      <View style={{
        backgroundColor: '#FCF0F2',
        height:375,
        marginTop:50,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,

          zIndex:-2
          
      }}>
    <Text
          style={{
            marginTop:40,
            marginLeft:20,
            fontWeight:"bold",
            fontSize:17,
            color:'#9D6876'
          }}
        >
          {dataList.anggota.nama_anggota}
        </Text>
        <Text
          style={{
            marginTop:10,
            marginLeft:20,
            fontWeight:"",
            fontSize:11,
            color:'#CAABB3'
          }}
        >
          
        </Text>
        <View style={{
          flexDirection:'row',
            marginTop:10,
            marginLeft:20,
        }}>
        <Ionicons name="star" size={22} color="#94455B"
        style={{
          
          top:39,
          left:23,
          zIndex:1
        }}
        />
        <Ionicons name="star" size={22} color="#94455B"
        style={{

          top:39,
          left:53,
          zIndex:1
        }}
        />
        <Ionicons name="star" size={22} color="#94455B"
        style={{

          top:39,
          left:83,
          zIndex:1
        }}
        />
        <Ionicons name="star" size={22} color="#94455B"
        style={{

          top:39,
          left:113,
          zIndex:1
        }}
        />
        <Ionicons name="star-outline" size={22} color="#94455B"
        style={{

          top:39,
          left:143,
          zIndex:1
        }}
        />
      </View>
      <View
      style={{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
            marginLeft:20,
      }}
      >
        <View
        style={{flexDirection:"row"}}
        >

          
          <Text
          style={{
            
            marginTop:10,
            marginLeft:1,
            fontWeight:"Bold",
            fontSize:15,
            color:'#8A4B5E'
          }}
          >Kelas</Text>
        </View>

        <View
        style={{
          width:130,
          height:46,
          backgroundColor:'#FCE8E9',
          borderRadius:20,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          borderTopLeftRadius:14,
          borderTopEndRadius:14,
          borderBottomStartRadius:14,
          borderBottomEndRadius:14,
          padding:4
        }}
        >
        <View
        style={{
          backgroundColor:'#FFFFFF',
          padding:11,
          borderRadius:20
        }}
        >+</View>
        <View
        style={{
            
            marginTop:5,
            marginLeft:5,
            fontWeight:"Bold",
            fontSize:16,
            color:'#8A4B5E'
          }}
        >{dataList.anggota.kelas_anggota}</View>
        <View
        style={{
          backgroundColor:'#FFFFFF',
          padding:11,
          borderRadius:20
        }}
        >-</View>
        </View>
      </View>
       
         <Text
          style={{
            
            marginTop:10,
            marginLeft:20,
            fontWeight:"Bold",
            fontSize:15,
            color:'#8A4B5E'
          }}
        >
          Detail Peminjam
        </Text>
      <View
        style={{
          
            marginTop:10,
            marginLeft:20,
        }}
        >
          <Text
          style={{
            
            fontWeight:"",
            fontSize:14,
            color:'#CAABB3'
          }}
        >
          Pinjam Judul Buku : {dataList.buku.judul}
        </Text>
        <Text
          style={{
            
            fontWeight:"",
            fontSize:14,
            color:'#CAABB3'
          }}
        >
          Tanggal Pinjam : {dataList.tanggal_pinjam}
        </Text>
        <Text
          style={{
            
            fontWeight:"",
            fontSize:14,
            color:'#CAABB3'
          }}
        >
          Tanggal Kembali : {dataList.tanggal_kembali}
        </Text>
        <Text
          style={{
            
            fontWeight:"",
            fontSize:14,
            color:'#CAABB3'
          }}
        >
          Jabatan : {dataList.anggota.jabatan}
        </Text>
      
      </View>  
      </View>
      
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ffc4c3',
    },
    image:{
    height:100,
    width:100
  },
    header:{
      padding:20,
      flexDirection:"row",
      justifyContent:"space-between",
    }
    });
