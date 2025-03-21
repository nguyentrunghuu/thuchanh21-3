import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator(); // Khởi tạo Bottom Tab Navigator

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false, // Ẩn tên của tab
        tabBarStyle: { height: 70, backgroundColor: 'white' }, // Tùy chỉnh thanh điều hướng
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} options={{ tabBarStyle: { display: 'none' } }} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
