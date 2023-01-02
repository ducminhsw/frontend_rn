
import { ScrollView, StatusBar,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PersonalNewsFeed from '../Components/PersonalNewsFeed';
import Post from '../Components/Post';
const Feed= ()=> {
  return (
    <ScrollView style={styles.container}>
        <PersonalNewsFeed/>
        <Post/>
    </ScrollView>
  );
}
export default Feed
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
  }); 