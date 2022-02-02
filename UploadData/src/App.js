import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import TextForm from './screens/TextForm';
import PdfForm from './screens/PdfForm';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import WebData from './screens/WebData';
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'TextForm') {
              iconName = 'file-alt';
              size = focused ? 25 : 20;
            } else if (route.name === 'PdfForm') {
              iconName = 'file-pdf';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#0080ff',
          tabBarInactiveTintColor: '#777777',
          tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }

        })
      }

    >
      <Tab.Screen name={'TextForm'} component={TextForm} />
      <Tab.Screen name={'PdfForm'} component={PdfForm} />
    </Tab.Navigator>
  );
}

function App() {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="TextForm"
        >
          <RootStack.Screen
            name="Forms"
            component={HomeTabs}
            options={{ headerShown: false }}

          />

          <RootStack.Screen
            name="WebData"
            component={WebData}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#0080ff'
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold'
              }

            }}

          />
          {/* <RootStack.Screen
            name="PDF-To-TEXT"
            component={PdfForm}

          />  */}
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};


export default App;
