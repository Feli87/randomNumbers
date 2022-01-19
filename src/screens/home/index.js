import React,{useState} from 'react';
import { View, Text, Button, TextInput, ImageBackground,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
const HomeScreen = ({navigation}) => {

  const [start, setStart] = useState(false);
  const [player, setPlayer] = useState('');
  const [selectNumber, setSelectNumber] = useState(false);
  const [number, setNumber] = useState(false);

  const handleReset = () => {
    setStart(false);
    setPlayer('');
    setSelectNumber(false);
    setNumber(false);
  };

  const handleNumber = () =>{
    navigation.navigate('Game', {
      player: player,
      number: number,
    });
    return handleReset();
  };


  return (
    <View style={styles.container}>

          <Text  style={styles.title} >Random</Text>

          {!start &&(
            <View style={styles.startBtnContainer}>
              <View style={{width:250, height:450, backgroundColor:'#000'}}>
                <LottieView source={require('../../assets/animations/dados.json')} autoPlay loop resizeMode='cover' />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={()=> setStart(true)}
              >
                  <Text style={styles.startButtonText}>START GAME</Text>
              </TouchableOpacity>
            </View>
             )}
          
          {start && !selectNumber &&(
            <View style={styles.startBtnContainer}>
              <Text style={styles.label}>Input Your Name</Text>
              <TextInput style={styles.input} autoFocus maxLength={10} onChangeText={setPlayer} underlineColorAndroid="yellow"  />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>  setSelectNumber(true)}
              >
                  <Text style={styles.startButtonText}>Save Name</Text>
              </TouchableOpacity>
            </View>
          )}

          {selectNumber &&(
            <View style={styles.startBtnContainer}>
              <Text style={styles.label}>Input Your Number</Text>
              <TextInput style={styles.input} autoFocus maxLength={3} onChangeText={setNumber} keyboardType="numeric" underlineColorAndroid="yellow"  />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>handleNumber()}
              >
                  <Text style={styles.startButtonText}>Choise Number</Text>
              </TouchableOpacity>
            </View>
          )}

    </View>
  );
};

export default HomeScreen;