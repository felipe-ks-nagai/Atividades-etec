import {Text, Image, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';


import Listar from './Listagem';
import Adicionar from './Adicionar';
import Inicio from './Inicio';

const Tabs = createBottomTabNavigator();

export default function Home() {
  return(
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName=""
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#D6D5BF',
            width: 300,
          },
        }}>
        <Tabs.Screen name="Inicio" component={Inicio}
        
         />
        <Tabs.Screen name="Adicionar produto + listamento" component={Adicionar}
        options={{
          tabBarLabel: 'Adicionar produto + listamento',
          tabBarIcon: () => (
            <AntDesign name="book" size={24} color="black" />
        ),
        }}/>
 

      </Tabs.Navigator>
    </NavigationContainer>
  )
}