
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, MaterialIcons  } from '@expo/vector-icons'; 
import Feed from './Feed';
import Notification from './Notification';
import Setting from './Setting';
import Friend from './Friend';
import { appColor } from '../constants/theme';
const HomeTab = createMaterialTopTabNavigator();
const HomeNavigator = ()=>{
    return(
        <HomeTab.Navigator screenOptions={
            ({ route }) => ({
            tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Feed') return <Entypo name="home" size={26} color= {focused?appColor.LIGHT_BLUE:'black'}/>;
              else if(route.name==='Friend') return  <MaterialIcons name="group" size={26} color= {focused?appColor.LIGHT_BLUE:'black'} />;
              else if(route.name==='Notification') return <Entypo name="bell" size={26} color= {focused?appColor.LIGHT_BLUE:'black'}/>; 
              else return <Entypo name="menu" size={26} color= {focused?appColor.LIGHT_BLUE:'black'}/>;
            }
          })
      }>
               <HomeTab.Screen name='Feed' component={Feed}/>
               <HomeTab.Screen name='Friend' component={Friend}/>
               <HomeTab.Screen name='Notification' component={Notification}/>
               <HomeTab.Screen name='Setting' component={Setting}/>
        </HomeTab.Navigator>
    )
}
export default HomeNavigator
