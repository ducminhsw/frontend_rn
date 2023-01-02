
import { ScrollView, StatusBar,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TopBar from '../Components/TopBar';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
const Home= ()=> {
  return (
    <>
      <TopBar/>  
      <NavigationContainer>
         <HomeNavigator/>
      </NavigationContainer>
    </>
  );
}
export default Home
