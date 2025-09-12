import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={{ width: 100, height: 100,borderRadius: 50 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png' }} />
      <Text style={styles.holamundo}>Hola Mundo</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ab2cbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holamundo: {
    fontSize:30,
    borderRadius:40,
    backgroundColor: '#fff', 
    padding: 15, 
  }
});



