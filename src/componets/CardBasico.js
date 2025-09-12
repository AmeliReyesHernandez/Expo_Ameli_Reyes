import { StyleSheet, View, Text } from "react-native";

export default function CardBasico( ) {
    return (
        <View style={style.card}>  
            <Text style={style.titulo}>Titulo de card</Text>
            <Text style={style.contenido}>Contenido del Card</Text>
        </View>
    );
}
const style = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#f9e2feff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    titulo:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    contenido:{
        marginTop:4,
    },
});
