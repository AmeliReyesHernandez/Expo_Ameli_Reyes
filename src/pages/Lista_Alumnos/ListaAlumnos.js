import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";

export default function ListaAlumnos() {
  return (
    <View style = {style.mainS}>
      <Text>Hola</Text>
    </View>
  );
}

const style = StyleSheet.create({
    mainS:{
            flex:1,
            backgroundColor: '#7a83b4ff',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 44,
            padding: 16
        },
    })
