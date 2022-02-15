import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textinput:{flex: 1, paddingLeft: 60},
  subview:{alignSelf: 'center', position: 'absolute', left: 15},
  eyeview:{alignSelf: 'center', position: 'absolute', right: 15}
});
