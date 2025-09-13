import { SafeAreaView } from "react-native-safe-area-context";
import {Platform, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"; 
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Formulario() {
 return (
    <SafeAreaView style={style.mainS}>
        <Text style={style.title}> Registro de Alumno </Text>
        <Text style={style.label}> Nombre : </Text>
        <TextInput style={style.input} placeholder="Escribe tu nombre"/>

        <Text style={style.label}> Carrera : </Text>
        <TextInput editable={true} style={style.input} placeholder="Escribe tu carrera"/>

        <Text style={style.label}> Descripcion : </Text>
        <TextInput multiline={true} numberOfLines={4} style={[style.input, style.textArea]} placeholder="Describe tu personalidad "/>

        <Text style={style.label}> Correo Eectronico : </Text>
        <TextInput style={style.input} placeholder="Ingrese el correo" keyboardType="email-address"/>
    
        <Text style={style.label}> Contraseña : </Text>
        <TextInput style={style.input} placeholder="*********" secureTextEntry/>
    
        <Text style={style.label}> Telefono : </Text>
        <TextInput style={style.input} placeholder="123456" keyboardType="numeric"/>
    
        <TouchableOpacity style={style.botonConIcono}>
        <Ionicons name="send" size={20} color={'#000000ff'} style = {style.iconoIzquierda}/>
        <Text style={style.textoBoton}>Boton Grande</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
    mainS:{
            flex:1,
            backgroundColor: '#ffffffff',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 44,
            padding: 30
        },
    label:{
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: '#161515ff',
        borderRadius: 15,
    },
    textArea:{
        height: 100,
        textAlignVertical: 'top'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign:'center'
    },
    botonConIcono:{
        backgroundColor: '#949494ff',
        marginTop:15,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderRadius:10
    },
    textoBoton:{
        color: '#000000ff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
})