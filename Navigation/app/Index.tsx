import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../assets/loremipsum.png')} style={styles.lorempic}/>
        <Text style={styles.appname}>LoremApp</Text>
      </View>
      <View style={styles.divtwo}>
        <Text style={styles.loremtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Link style={styles.loremtext} href="/Sobre">Clique aqui para ler mais sobre nós</Link>
        <Link style={styles.loremtext} href="/Cadastro">Clique aqui para fazer seu cadastro</Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divtwo: {

  },
  lorempic: {

  },
  appname: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  loremtext: {
    marginTop: 40,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    textAlign: 'center',
    alignSelf: 'center',
  },
});