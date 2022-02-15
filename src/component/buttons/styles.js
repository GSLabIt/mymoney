import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.color_darkblue,
    borderColor: color.color_darkblue,
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    shadowColor: color.color_showblue,
    shadowOpacity: 1,
    shadowRadius: 8,

    elevation: 10,
  },
  buttonText: {
    fontFamily: font.nunitobold,
    fontSize: 19,
    color: color.color_white,
    textAlign: 'center',
  },
});
