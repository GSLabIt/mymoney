import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.color_lightblue},
  subcontainer: {
    paddingBottom: 30,
    marginTop: 20,
  },
  mainview: {alignSelf: 'center', marginTop: 20, flex: 1},
  login: {
    fontSize: 26,
    fontFamily: font.nunitosemibold,
    color: color.color_black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subview: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: color.color_white,
  },
  checkboxview: {flexDirection: 'row', marginLeft: 15,alignSelf:'center'},
  forgot: {
    paddingRight: 20,
    fontSize: 13,
    fontFamily: font.montserratregular,
    color: color.color_black,
    paddingTop: 5,
  },
  scrollview: {flexGrow: 1},

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
  accountview: {flexDirection: 'row', alignSelf: 'center', paddingTop: 10},
});
