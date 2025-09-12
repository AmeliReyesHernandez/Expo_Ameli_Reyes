import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native"; 

export default function BotonesV2 () {
 return (
    <View style={style.mainS}>
        <Text style ={style.title}> Botones Personalizados </Text>
        {/* Boton grande */}
        <TouchableOpacity style={style.botonGrande}>
        <Text style={style.textoBoton}>Boton Grande</Text>
        </TouchableOpacity>
        {/* Boton grande con Icono*/}
        <TouchableOpacity style={style.botonConIcono}>
        <Ionicons name="send" size={20} color={'#000000ff'} style = {style.iconoIzquierda}/>
        <Text style={style.textoBoton}>Boton Grande</Text>
        </TouchableOpacity>
        {/* Boton sombreado*/}
        <TouchableOpacity style={style.botonSombreado}>
        <Text style={style.textoBoton}> Sombra </Text>
        </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#b8d5ffff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:44,
        padding: 50
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign:'center'
    },
    textoBoton:{
        color: '#000000ff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    botonGrande:{
        backgroundColor: '#ffffffff',
        padding: 15,
        borderRadius:20,
        marginTop:20,
        alignSelf:'center'
    },
    botonConIcono:{
        backgroundColor: '#ffffffff',
        marginTop:10,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingVertical:12,
        borderRadius:15
    },
    iconoIzquierda:{
        marginRight:10
    },
    botonSombreado:{
        marginTop:10,
        backgroundColor: '#ffffffff',
        paddingVertical: 15,
        borderRadius:15,
        marginBottom: 15,
    },
    sombra: {
        ...Platform.select({
        android: {
            elevation: 6,
        },
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            },
        }),
     },
});