import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.color_lightblue},
  scrollview: {flexGrow: 1},
  forgot: {
    fontFamily: font.nunitoregular,
    fontSize: 15,
    color: color.color_black,
    textAlign: 'center',
  },
  mainview: {alignSelf: 'center',  flex: 1, alignItems: 'center'},
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
});
