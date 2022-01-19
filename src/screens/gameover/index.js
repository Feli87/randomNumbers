import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import LottieView from 'lottie-react-native';

function GameOverScreen({route, navigation}) {
  const { player, points } = route.params;

  const handleHome = () => {
    navigation.navigate('Home' ,{
      reset: true,
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor:'#000' ,alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'#fff', fontSize:40}}>Game Over</Text>
      <Text style={{color:'#fff', fontSize:20}}>Player: {player}</Text>
      <Text style={{color:'#DD0', fontSize:40, marginBottom:30}}>Points: {points}</Text>
      <View style={{width:'100%', height:450, backgroundColor:'#000'}}>
        <LottieView source={require('../../assets/animations/gameOver.json')} autoPlay loop resizeMode='cover' />
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={()=>handleHome()}
        >
            <Text style={styles.restartGameText}>¡RESTART GAME!</Text>
        </TouchableOpacity>
    </View>
  );
}

export default GameOverScreen;