import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    title:{
      fontSize: 65,
      fontWeight: '900',
      textAlign: 'center',
      color: '#DDDD',
      fontStyle: 'italic',
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    startBtnContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        width: 250,
        height: 60,
        backgroundColor: '#DDD',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        color: "black",
        borderWidth: 5,
        borderColor: 'gray',
        padding: 5
    },
    startButtonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    input:{
        width: 290,
        height: 60,
        margin: 5,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#DDD',
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#000',
        padding: 15,
    }
  });