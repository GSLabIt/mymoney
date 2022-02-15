import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.color_lightblue},
  scrollview: {flexGrow: 1},

  mainview: {alignSelf: 'center', marginTop: 10, flex: 1, alignItems: 'center'},
  subview: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: color.color_white,
  },
  subcontainer: {
    paddingBottom: 30,
    marginTop: 50,
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
  accountview: {flexDirection: 'row', alignSelf: 'center', paddingTop: 10},
});
