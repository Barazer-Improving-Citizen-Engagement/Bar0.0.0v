// app/_layout.tsx
import { Tabs, Redirect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

const Label = ({name, focused}) => {
  return (
    <View style={styles.labelView}>
      <Ionicons 
      // name={name}
      />
      <Text style={styles.label} >{name}</Text>
    </View>
  )
}

export default function Layout() {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFA001',
      tabBarInactiveTintColor: '#CDCDE0',
      tabBarStyle:{
        backgroundColor: '#161622',
        borderTopWidth: 2,
        borderTopColor:'#232533',
        height: 84,
      }
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused, name }) => (
            <>
          <Ionicons 
          name="home"
          color={color}
          focused={focused}
          size={24}
          />
          <Label 
            name='Home'
            focused={focused}
            />
            </>
           ),
           
          tabBarLabel: "Home",
          
          
        }}
      />
      <Tabs.Screen
        name="kamukunji"
        options={{
          tabBarIcon: ({ color, focused, name}) => ( <>
            <Ionicons 
            name="chatbubbles"
            color={color}
            focused={focused}
            size={24}
            />
            <Label 
              name='Kamukunji'
              focused={focused}
              />
              </>),
          tabBarLabel: "Kamukunji",
        }}
      />
      <Tabs.Screen
        name="visualizer"
        options={{
          tabBarIcon: ({ color, focused }) => (<>
          <Ionicons name="stats-chart" color={color} size={24} />
          <Label 
              name='Visualizer'
              focused={focused}
              />
          </>),
          tabBarLabel: "Visualizer",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (<><Ionicons name="person" color={color} size={24} /> 
           <Label 
            name='Profile'
            focused={focused}
            /></>),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins',
    fontWeight: '300',
    color: 'gray',
    paddingTop: 20

  },
  labelView:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 16,
    height:10
  }

});