import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, StatusBar, Platform, ScrollView, Image, TouchableOpacity, navbar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListaAlumnos() {
  return (
    <SafeAreaView style = {style.mainS}>
      {/* Inicio de AppBar*/}
        <View style= {style.appBar}>
            <Ionicons name="arrow-back" size={20} color={'#000000ff'} />
            <Text style= {style.appBarTitle}> Lista de Usuarios </Text>
            <View style= {{ width: 20}}></View>
        </View>
        {/* Cierre de AppBar*/}
        {/* Inicio de Contenido (Lista de Alumnos)*/}
        <ScrollView style={{padding: 16}}>
            <Text style = {style.sectionTitle}> Alumnos de Aplicaciones Moviles </Text>
            
            {[1,2,3,4,5,6,7,8].map((item ,index) => (
                <View style={style.card}>
                <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/512/3736/3736502.png'}} style={style.avatar}/>
                <View style = {style.cardInfo}>
                    <Text style = {style.userName}> Ameli Reyes </Text>
                    <Text style = {style.userDetails}> Ingenieria en Sistemas Computacionales </Text>
                    <TouchableOpacity style={style.saveButton}>
                        <Text style={style.saveButtonText}> Ver Mas </Text>
                    </TouchableOpacity>
                </View>
                </View>
            ))}

        </ScrollView>
        {/* Cierre de Contenido (Lista de Alumnos)*/}
        {/* navbar*/}
        <View style= {style.navbar}>
            <View style= {style.navItem}>
                <Ionicons name="home" size={20} color={'#000000ff'}/>
                <Text style={style.navText}> Inicio </Text>
            </View>
            <View style= {style.navItem}>
                <Ionicons name="person" size={20} color={'#000000ff'}/>
                <Text style={style.navText}> Usuario </Text>
            </View>
            <View style= {style.navItem}>
                <Ionicons name="settings" size={20} color={'#000000ff'}/>
                <Text style={style.navText}> Configuracion </Text>
            </View>
        </View>
        {/* Cierre de navbar*/}
        
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    mainS:{
            flex:1,
            backgroundColor: '#c5c7d1ff',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 44,
        },
    appBar:{
        height: 50,
        width: '100%',
        backgroundColor: '#958899ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    appBarTitle:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    sectionTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 19
    },
    card:{
        padding: 12,
        flexDirection: 'row',
        borderRadius: 14,
        backgroundColor: '#ffffffff',
        elevation: 2,
        marginBottom: 5,
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight:12
    },
    cardInfo:{
        flex: 1,
        justifyContent: 'center',
    },
    userName:{
        fontWeight: "bold",
        fontSize:16,
        marginBottom: 5,
        
    },
    userDetails:{
        fontWeight: "bold",
        fontSize:14,
        marginBottom: 5,
    },
    saveButton:{
        backgroundColor: '#9d97c5ff',
        marginTop:10,
        padding: 10,
        paddingVertical:8,
        borderRadius:15,
        alignSelf: 'flex-start',
        
    },
    saveButtonText:{
        color: '#ffffffff',
        fontWeight: 'bold',
    },
    navbar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems : 'center',
        height: 50,
        backgroundColor: '#958899ff',
        borderTopWidth: 1,
    },
    navItem:{
        alignItems: 'center',
    },
    navText:{
        fontSize: 12,
        color:'#000000ff',
        marginTop: 5
    }
})
