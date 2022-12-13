import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
// import Navigation from './navigation';
import { NavigationContainer, useNavigationContainerRef, createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './components/SignInScreen';
import * as RootNavigation from './navigation/RootNavigation'
import SignUp from './components/SignUpScreen';



function App() {
  return (
      <SafeAreaView style={styles.container}>
        <SignUp/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
export default App;