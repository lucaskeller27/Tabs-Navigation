import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imagediv}>
        <Image source={require('../assets/loremipsum.png')} style={styles.lorempic}/>
        <Text style={styles.appname}>LoremApp</Text>
      </View>
      <View style={styles.divtwo}>
      <View style={styles.imageContainer}>
            <Image source={require('../assets/spfc.png')} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/santos.png')} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/palmeiras.png')} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/corinthians.png')} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/flamengo.png')} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/vasco.png')} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/inter.png')} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/gremio.png')} style={styles.image}/>
        </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '50%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imagediv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  divtwo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowOne: {
    alignItems: 'center',
  },
  rowTwo: {

  },
  rowThree: {

  },
  rowFour: {

  },
  lorempic: {

  },
  escudo: {
    resizeMode: 'contain',
    width: '5%',
    height: '5%',
  },
  appname: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});