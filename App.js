import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import Navigation from './navigation';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './components/SignInScreen';



function App() {
  return (
    <SafeAreaView>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: '25%'
  }
});
export default App;