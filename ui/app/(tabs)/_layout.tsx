import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FB5C07',
        tabBarInactiveTintColor: '#999',
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 90,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: 'Recipes',
          headerShown:false,
          tabBarIcon: ({ color }) => <MaterialIcons name="restaurant-menu" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerShown:false,
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown:false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="imagedet"
        options={{ href: null, headerShown:false }} // Removes from tab bar but allows navigation
      />
      <Tabs.Screen
        name="manualinp"
        options={{ href: null, headerShown:false }} // Removes from tab bar but allows navigation
      />
    </Tabs>
  );
}
