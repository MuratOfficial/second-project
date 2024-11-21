import { Image, StyleSheet, Platform, Text, Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
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


