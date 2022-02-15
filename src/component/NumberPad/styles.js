import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.color_lightblue},
  forgot: {
    fontFamily: font.nunitoregular,
    fontSize: 15,
    color: color.color_black,
    textAlign: 'center',
  },
  account: {
    fontFamily: font.nunitoregular,
    fontSize: 15,
    fontWeight: 'normal',
    color: color.color_black,
  },
  signup: {
    fontFamily: font.nunitoregular,
    fontSize: 15,
    fontWeight: '600',
    color: color.color_darkblue,
  },
  accountview: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 10,
    marginTop: 10,
  },
  main: {
    borderRadius: 26,

    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainview: {paddingHorizontal: '6%'},
  containerview: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  inputtext: (currentIndex, index) => ({
    borderRadius: 26,
    borderWidth: 2,
    borderColor: currentIndex > index ? color.color_green : color.color_placeholder,
    backgroundColor: currentIndex > index ? color.color_white : color.color_placeholder,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  numbertext:{fontSize: 20, fontFamily: font.nunitobold},
  buttonarrow:{alignSelf: 'center', marginTop: 20},
  numberview:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  numbersubview:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  innertext:{
    fontSize: 36,
    fontFamily: font.nunitoregular,
    color: color.color_darkblue,
  }
});
