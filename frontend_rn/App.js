
import { ScrollView, StatusBar,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
const App= ()=> {
  return (
    <View style={styles.container}>
    <StatusBar
    backgroundColor='#FFFFFF'
    barStyle='dark-content'   
    />
    <Home /> 
    </View>
  );
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
}); 
