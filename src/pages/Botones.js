import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";

export default function Botones () {
 return (
    <View style={style.mainS}>
        <Text style={style.h1}> Botones </Text>
        
        <TouchableOpacity style={style.botonBasico}>
            <Text style={style.text}> Botón 1 </Text>
        </TouchableOpacity>

         <TouchableOpacity style={style.botonBasico}>
            <Text style={style.text}> Botón Icono </Text>
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
    }
});
