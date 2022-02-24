import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingLeft: 15, paddingVertical:10},
  headerText: {
    fontSize: 26,
    fontFamily: font.nunitobold,
    fontWeight: 'bold',
    color: color.color_black,
    textAlign: 'center',
    flex: 1,
    right:35
   
  },
});
