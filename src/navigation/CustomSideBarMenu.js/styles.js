import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

 export const styles = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      paddingTop: 30,
      backgroundColor: color.color_white,
      paddingHorizontal: 20,
      flex: 1,
    },
  
    profileHeaderText: {
      color: color.color_lightblack,
      fontWeight: '600',
      fontFamily: font.nunitoregular,
      fontSize: 19,
      
    },
    dashbord:{
        color: color.color_lightblack,
        fontWeight: '600',
        fontFamily: font.nunitoregular,
        fontSize: 18,
        alignSelf: 'center',
        paddingLeft: 20,
      },
      dashbordview:{flexDirection: 'row', paddingTop: 30},
      mainview:{
        backgroundColor: color.color_white,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
      },
      suretext:{
        textAlign: 'center',
        color: color.color_black,
        fontSize: 14,
        fontFamily: font.nunitoregular,
        paddingTop: 20,
      },
      rowview:{flexDirection: 'row', marginTop: 25},
      yestext: { textAlign: 'center',
      fontSize: 18,
      fontFamily: font.nunitobold,}
  });
