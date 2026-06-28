import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View><Text style={styles.text}>Anh la Dat</Text></View>
      <View><Text style={styles.text}>Quang <Text style={styles.anh}>Anh</Text></Text></View>

    </View>
  );
}


const styles = StyleSheet.create({
  anh: {
    color: 'pink',
  },
  text: {
    fontSize: 30,
    color: 'blue'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
