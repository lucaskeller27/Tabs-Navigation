import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../assets/loremipsum.png')} style={styles.lorempic}/>
        <Text style={styles.appname}>LoremApp</Text>
      </View>
      <View style={styles.divtwo}>
        <View style={styles.inputsdiv}>
          <TextInput style={styles.input} placeholder="Nome"/>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <TextInput style={styles.input} placeholder="Data de Nascimento"/>
          <TextInput style={styles.input} placeholder="CPF"/>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        {/* <Link href="/TelaA">Ir para a Tela A</Link> */}
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
    width: '100%',
    marginTop: '10%',
  },
  lorempic: {

  },
  appname: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputsdiv: {
    width: '100%',
    marginBottom: '5%',
  },
  input: {
    backgroundColor: '#F7F7F8',
    margin: 8,
    padding: 15,
    borderRadius: 7,
    alignSelf: 'center',
    width: '66%',
    color: '#ACA8AD',
  },
  button: {
    backgroundColor: '#1A181B',
    textAlign: 'center',
    borderRadius: 7,
    margin: 8,
    padding: 12,
    width: '66%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#F7F7F8',
  },
});