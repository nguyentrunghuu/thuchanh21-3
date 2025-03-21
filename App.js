import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import các màn hình
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import HistoryScreen from './screens/HistoryScreen';
import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen'; // Import màn hình thanh toán
import SuccessScreen from './screens/SuccessScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// Tạo Stack Navigator cho giỏ hàng và thanh toán
function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = 'scan-outline';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-outline';
            } else if (route.name === 'History') {
              iconName = 'time-outline';
            } else if (route.name === 'CartStack') {
              iconName = 'cart-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 50,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            paddingBottom: 5,
          },
          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="CartStack" component={CartStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
