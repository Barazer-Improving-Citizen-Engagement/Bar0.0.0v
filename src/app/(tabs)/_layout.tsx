// app/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={24} />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="kamukunji"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" color={color} size={24} />,
          tabBarLabel: "Kamukunji",
        }}
      />
      <Tabs.Screen
        name="visualizer"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" color={color} size={24} />,
          tabBarLabel: "Visualizer",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" color={color} size={24} />,
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
