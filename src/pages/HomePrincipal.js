import  Ionicons  from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";
import CardBasico from "../componets/CardBasico";
import CardImg from "../componets/CardImg";
import CardV2 from "../componets/CardV2";

export default function HomePrincipal () {
 return (
    <View style={style.mainS}>
        <Text style ={style.title}> Pagina Principal </Text>
        <CardBasico/>
        <CardImg/>
        <CardV2/>
    </View>
  );
}

const style = StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#aacac6ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeigth:44,
        padding: 50
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign:'center'
    },
})