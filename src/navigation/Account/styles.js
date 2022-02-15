import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.color_lightblue},
  scrollview: {flexGrow: 1},
  subview: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: color.color_white,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 70,
  },
  imageview:{alignSelf: 'center', marginTop: -40},
  firsttext:{
    fontSize: 19,
    fontFamily: font.nunitoregular,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: -50,
    color: color.color_lightblack,
  },
  touchview:{
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
    backgroundColor: color.color_lightblue,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  touchText:{
    fontSize: 19,
    fontWeight: '600',
    color: color.color_lightblack,
    fontFamily: font.nunitoregular,
  },
  settingtext:{
    fontSize: 18,
    fontWeight: 'bold',
    color: color.color_lightblack,
    fontFamily: font.nunitobold,
    paddingTop: 20,
  }
});
