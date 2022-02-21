import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    
  },
  ScrollView: {
    margin: 8,
  },
  heading1: {
    fontSize: 26,
    color: '#73CED6',
    marginBottom: 15,
    marginTop: 2,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  Input: {
    marginBottom: 3,
    fontSize: 15,
  },
  TextInput: {
    marginLeft: 5,
    marginVertical: 5
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
  },
  green: {
    color: '#00ff00'
  },
  red: {
    color: '#ff0000'
  },
  yellow: {
    color: '#fff000'
  },
  btn: {
    marginVertical: 23,
    marginHorizontal: 50,
    paddingVertical: 13,
    backgroundColor: "#73CED6",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btntxt: {
    color:"white",
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 15
  },
  circle: {
      height: 28,
      width: 28,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
  },
  checkedCircle: {
      width: 15,
      height: 15,
      borderRadius: 7,
      backgroundColor: '#000',
  }
});