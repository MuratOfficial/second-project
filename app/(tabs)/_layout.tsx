import { View, Text, Image } from 'react-native'
import {Tabs,} from 'expo-router'
import {icons} from '@/constants'

interface TabIconProps {
  icon: any;
  color: string | undefined;
  name: string | undefined;
  focused: boolean |undefined;
}

const TabIcon = ({icon, color, name, focused}:TabIconProps) => {
  return (
  <View className='flex items-center justify-center gap-2 w-20'>
    <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6'/>
    <Text className={`${focused ? 'font-psemibold': 'font-pregular'}  text-xs`}>
      {name}
    </Text>

  </View>
  )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel:false
        
      }}>
        <Tabs.Screen
          name='home'
          options={{
            title:'Home',
            headerShown: false,
            
            tabBarIcon:({focused, color}) => (
              <TabIcon
                icon={icons.home}
                focused ={focused}
                color={color}
                name = "Home"
              
              />
            )
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title:'Bookmark',
            headerShown: false,
            tabBarIcon:({focused, color}) => (
              <TabIcon
                icon={icons.bookmark}
                focused ={focused}
                color={color}
                name = "Bookmark"
              
              />
            )
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title:'Create',
            headerShown: false,
            tabBarIcon:({focused, color}) => (
              <TabIcon
                icon={icons.plus}
                focused ={focused}
                color={color}
                name = "Create"
              
              />
            )
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title:'Profile',
            headerShown: false,
            tabBarIcon:({focused, color}) => (
              <TabIcon
                icon={icons.profile}
                focused ={focused}
                color={color}
                name = "Profile"
              
              />
            )
          }}
        />

    </Tabs>
    </>
  )
}

export default TabsLayout