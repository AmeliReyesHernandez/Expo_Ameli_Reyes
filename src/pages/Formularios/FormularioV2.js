import { SafeAreaView } from "react-native-safe-area-context";
import {Platform, StatusBar, StyleSheet, View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native"; 
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';


const {width} = Dimensions.get('window');
export default function FormularioV2() {
 return (
    <SafeAreaView style={style.mainS}>
        <ScrollView>
            <Text style= {style.title}> Formulario  V2</Text>

        <View style={style.container}>
            <TouchableOpacity style={style.cerrarBoton}>
            <Ionicons name="close" size={24} color={'#ffffffff'}/>
            </TouchableOpacity>
            <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/512/3736/3736502.png'}} style={style.avatar}/>
            <Text style={style.name}> Ameli Reyes </Text>
            <View style={style.infoContainer}>
                <Text style={style.label}> Carrera : </Text>
                <Text style={style.info}> Ingenieria en Sistemas Computacionales </Text>
                <Text style={style.label}> Especialidad : </Text>
                <Text style={style.info}> Desarrollo de Software </Text>
                <Text style={style.label}> Correo : </Text>
                <Text style={style.info}> amelireyes@gmail.com </Text>
                <Text style={style.label}> Telefono : </Text>
                <Text style={style.info}> 9531236666 </Text>
                <Text style={style.label}> Numero de Control : </Text>
                <Text style={style.info}> 22620050 </Text>

            </View>
            <TouchableOpacity style={style.botonConIcono}>
            <Ionicons name="save" size={20} color={'#000000ff'} style = {style.iconoIzquierda}/>
            <Text style={style.textoBoton}> Guardar </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
    mainS:{
            flex:1,
            backgroundColor: '#c9c9c9ff',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 44,
            padding: 16
        },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 1,
        textAlign:'center',
        marginBottom: 10
    },
    container:{
        width: "100%",
        backgroundColor: '#ffffffff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity:0.05,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 10,
        elevation: 5
    },
    avatar:{
        width: width *0.35,
        height: width *0.35,
        borderRadius: (width *0.35) / 2,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ffffffff'
    },
    name:{
        color: '#ffffffff',
        fontWeight: "bold",
        fontSize:16,
        marginBottom: 10,
        borderRadius:20,
        backgroundColor: '#49006bff',
        padding: 5
    },
    infoContainer:{
        width: '100%',
        marginBottom:15
    },
    label:{
        fontWeight: "bold",
        fontSize:16,
        marginBottom: 10,
    },
    info:{
        fontSize: 14,
        marginBottom: 10,
        borderRadius:15,
        backgroundColor: '#cdcdcdff',
        padding:10
    },
    botonConIcono:{
        backgroundColor: '#9d97c5ff',
        marginTop:20,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:10,
        width: '80%'
    },
    iconoIzquierda:{
        marginRight: 12
    },
    textoBoton:{
        color: '#000000ff',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    cerrarBoton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        borderRadius: 30,
        backgroundColor: '#62466bff',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    }
})