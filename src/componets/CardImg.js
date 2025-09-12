import { StyleSheet, View, Text, Image } from "react-native";

export default function CardImg( ) {
    return (
        <View style={style.card}>  
            <Image style = {style.img} source={{uri:'https://i.pinimg.com/1200x/3b/1a/b6/3b1ab6c8c3f8d7b9dc2fd02773df56ec.jpg'}}/>
            <Text style={style.titulo}>Card de img</Text>
            <Text style={style.contenido}>Contenido del Card</Text>
        </View>
    );
}
const style = StyleSheet.create({
    card:{
        backgroundColor: '#ffffffff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#f9e2feff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    titulo:{
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
    },
    contenido:{
        marginTop:4,
    },
    img:{
        width: '100%',
        height: 120,
        borderRadius: 10,
    }
})