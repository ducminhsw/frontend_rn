
import { ScrollView, StatusBar,SafeAreaView, StyleSheet, Text, View } from 'react-native';
const Setting= ()=> {
  return (
    <ScrollView style={styles.container}>
    <Text>This is setting view</Text>
    </ScrollView>
  );
}
export default Setting
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
  }); 
