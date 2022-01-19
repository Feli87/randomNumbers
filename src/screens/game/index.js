import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles';



function GameScreen({route, navigation}) {
  const { player, number } = route.params;
  const [randomNumber, setRandomNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);

  const hanldeRandomNumber = (less, higest) => {
    let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    setRandomNumber(random);

    if(random === less || random === higest){
      return hanldeRandomNumber(less, higest); //recursion
    };

    if(less){
      if(random < number){
        setPoints(points + 10);
        setLevel(level + 1);
      }else{
        return gameOver();
      };
    };
    if(higest){
      if(random > number){
        setPoints(points + 10);
      }else{
        return gameOver();
      };
    };
  };

  const gameOver = () => {
    navigation.navigate('GameOver', {
      points: points,
      player: player,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text  style={styles.text}>P: {player}</Text>
        <Text style={styles.textPoints}>Pts: {points}</Text>
        <Text style={styles.text}>Lvl: {level}</Text>
        
      </View>
      <Text  style={styles.textNumber}>Number: {number}</Text>
     
      <Text style={{color:'#DD0', fontSize:25, marginBottom:40}}>Random Number: {randomNumber}</Text>
      <View style={{ height:50,width:'100%', flexDirection:'row', justifyContent:'space-around', alignContent:'center', alignItems:'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>hanldeRandomNumber(true, false)}
        >
            <Text style={styles.startButtonText}>LESS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>hanldeRandomNumber(false, true)}
        >
            <Text style={styles.startButtonText}>HiGEST</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default GameScreen;