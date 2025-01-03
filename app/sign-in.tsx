import { 
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { Redirect } from "expo-router";
import { useGlobalContext } from '@/lib/global-provider';

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => { 
    const result = await login();
    if(result) {
      refetch();
    } else {
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {/* Use nativewind className for Image */}
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">Welcome to ReState</Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReState with Google
          </Text>

          <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
          <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Rubik-Medium',
                  color: '#333333', // Match your desired text color
                  marginLeft: 8,
                  lineHeight: 20, // Matches the icon's height
                }}
              >
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;