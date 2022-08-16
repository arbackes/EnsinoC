import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { CommonActions } from '@react-navigation/native';
import animation from '../../../assets/json/splash-screen-5.json' // TODO: transformar o arquivo .gif ou .mp4 em json que funcione aqui
// import animation from '../../../assets/json/code-animation.json'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Home' },
          ],
        })
      );
    }, 4000);
  }, [0]);

  return (
    <View style={{ flex: 1 }}>
      <LottieView source={animation} autoPlay loop />
    </View>
  )
};

export default SplashScreen;
