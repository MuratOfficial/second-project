import {  Text, View } from 'react-native';


import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-pblack'>
        Aora!
      </Text>
      <StatusBar style='auto'/>
    <Link style={{color:"blue"}} href="/(tabs)/profile">Go To Home
    </Link>
    </View>
  );
}


