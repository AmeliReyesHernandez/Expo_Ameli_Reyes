import  Ionicons  from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";

export default function Botones () {
 return (
    <View style={style.mainS}>
        <Text style={style.h1}> Botones </Text>
        {/* Botones 1 */}
        <TouchableOpacity style={style.botonBasico}>
            <Text style={style.text}> Botón 1 </Text>
        </TouchableOpacity>
        {/* Botones 2 */}
         <TouchableOpacity style={style.botonIcono}>
            <Ionicons name = "user" size={20} style={style.iconB}/>
            <Text style={style.text}> Botón Icono </Text>
        </TouchableOpacity>
        {/* Botones con icono a la drecha */}
        <TouchableOpacity style={style.botonIcono}>
            <Text style={style.text}> Siguiente </Text>
            <Ionicons name = "ban" size={20} color="#151414ff"style={style.iconRight}/>
        </TouchableOpacity>

    </View>
  );
}

const style = StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#6ab1a8ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeigth:44,
        padding: 50
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    botonBasico: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius:10,
        marginTop:10,
        marginBottom:10
    },
    text:{
        color:'#000000ff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    botonIcono: {
        backgroundColor: '#fff',
        fontSize: 30,
        padding: 12,
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
        flexDirection  : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconB: {
        color:'#a82c2cff'
    }
});
