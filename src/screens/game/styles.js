import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    text:{
      color:'#fff',
      fontSize: 30,
    },
    textNumber:{
      color:'#fff',
      fontSize: 60,
    },
    textPoints:{
      color:'#DD0',
      fontSize: 25,
    },
    button:{
      width: 100,
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
    topContainer:{
      flexGrow: 0.25,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: 10,
    }
  });