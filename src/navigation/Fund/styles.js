import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.color_lightblue},
  scrollview: {flexGrow: 1},
  mainview: {alignSelf: 'center', marginTop: 10,},
  fund:{fontSize:26,fontFamily:font.nunitobold,color:color.color_lightblack,textAlign:'center'},
  cash:{fontSize:15,fontFamily:font.nunitoregular,color:color.color_gettext,textAlign:'center'},
  subview: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: color.color_white,
    marginTop:30,
    paddingHorizontal:10
  },
  available:{fontSize:17,fontFamily:font.poppinsmedium,color:color.color_placeholder,textAlign:'center'},
  numberText:{fontSize:22,fontFamily:font.poppinsmedium,color:color.color_darkblue,textAlign:'center'},
  horizontalline:{
    borderBottomColor:color.color_horizontal,
    borderBottomWidth: 1,
    marginTop:10
  },
  balancetext:{fontSize:16,fontFamily:font.nunitoregular,color:color.color_secureentry,fontWeight:"600"},
  balancenumber:{fontSize:18,fontFamily:font.nunitoregular,color:color.color_lightblack,fontWeight:"600",paddingTop:5},
  addfundview:{
    flexDirection: 'row',
    backgroundColor: color.color_green,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 100,
    paddingVertical: 8,
    shadowColor: color.color_showgreen,
    elevation: 10,
    flex: 1,
  },
  withdrawview:{
    flexDirection: 'row',
    backgroundColor: color.color_darkblue,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    borderRadius: 100,
    elevation: 10,
    shadowColor: color.color_showblue,
    flex: 1,
  },
  bothText:{
    fontSize: 19,
    fontFamily: font.nunitobold,
    color: color.color_white,
  },
  buttonview:{flexDirection: 'row', marginBottom: 20, marginTop: 20}
});
