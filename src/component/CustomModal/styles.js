import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.color_lightblue},
  mainscroll: {backgroundColor: color.color_white, marginTop: -25},
  toptextview: {
    flexDirection: 'row',
  
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  numbertext: {
    fontFamily: font.nunitobold,
    fontSize: 18,
    color: color.color_green,
  },
  subview: {flexDirection: 'column'},
  rupeetext: {
    fontSize: 18,
    fontFamily: font.nunitobold,
    color: color.color_black,
  },
  nseview: {
    flexDirection: 'row',
    borderRadius: 57,
    backgroundColor: '#C6C6C6',
    marginTop: 10,
  },
  nseText: {
    fontSize: 10,
    fontFamily: font.nunitoregular,
    fontWeight: '600',
    paddingVertical: 3,
    flex: 1,
    textAlign: 'center',
    borderRadius: 56,
  },
  precentageview: {flexDirection: 'row'},
  baracket: {
    fontSize: 18,
    fontFamily: font.nunitoregular,
    color: color.color_black,
  },
  percentagetext: {
    fontFamily: font.nunitoregular,
    fontSize: 18,
    color: color.color_green,
  },
  horizontalline: {
    borderBottomColor: color.color_bankhorizontal,
    borderBottomWidth: 3,
    marginTop: 20,
  },
  charttext: {
    fontSize: 18,
    fontFamily: font.nunitobold,
    color: color.color_black,
    paddingHorizontal: 15,
  },
  marketview: {flexDirection: 'row', height: 325, paddingHorizontal: 10},
  bidtext: {
    fontSize: 13,
    fontFamily: font.nunitoregular,
    color: color.color_black,
  },
  bidblue: {
    color: color.color_darkblue,
    fontSize: 10,
    fontFamily: font.nunitoregular,
  },
  bidred: {
    color: color.color_red,
    fontSize: 10,
    fontFamily: font.nunitoregular,
  },
  buttonmain: {
    flexDirection: 'row',
    paddingTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buytext: {
    borderRadius: 100,
    backgroundColor: color.color_darkblue,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    marginRight: 20,
  },
  selltext: {
    borderRadius: 100,
    backgroundColor: color.color_red,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  sametext: {
    color: color.color_white,
    fontFamily: font.nunitobold,
    fontSize: 19,
    textAlign: 'center',
  },
  modaltext: {
    fontFamily: font.nunitobold,
    fontSize: 18,
    color: color.color_black,
  },
  rupeemodal: {
    fontSize: 18,
    fontFamily: font.nunitobold,
    alignSelf:"flex-end"
  },
  baracketmodal: {
    fontSize: 13,
    fontFamily: font.nunitoregular,
    color: color.color_black,
  },
  percentagemodal: {fontFamily: font.nunitoregular, fontSize: 13},

  Quantityview: {flexDirection: 'row', justifyContent: 'space-between'},
  QuantityText: {
    fontSize: 13,
    fontFamily: font.nunitosemibold,
    color: color.color_limit,
    paddingLeft: 2,
  },
  QuantitInput: {
    borderWidth: 1,
    color: color.color_gray,
    borderRadius: 50,
    height: 35,
    fontSize: 12,

    width: 91,
    borderColor: color.color_gray,
  },
  QuantityNumber: {
    borderWidth: 1,
    color: color.color_black,
    borderRadius: 50,
    height: 35,
    fontSize: 13,
    width: 91,

    textAlign: 'center',
    paddingTop: 8,
    borderColor: color.color_gray,
    fontFamily: font.nunitobold,
  },
  dropdownview: {
    borderWidth: 1,
    color: color.color_black,
    borderRadius: 50,
    height: 35,
    fontSize: 13,
    width: 91,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
    borderColor: color.color_gray,
  },
  modeview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  Intradaytext: {
    color: color.color_darkblue,
    borderRadius: 50,
    height: 35,
    fontSize: 13,
    width: 91,
    backgroundColor: color.color_lightblue,
    textAlign: 'center',
    paddingTop: 8,
    marginTop: 10,

    fontFamily: font.nunitoregular,
  },
  Deliverytext: {
    borderWidth: 1,
    color: color.color_limit,
    borderRadius: 50,
    height: 35,
    fontSize: 13,
    width: 91,
    marginTop: 30,
    textAlign: 'center',
    paddingTop: 8,

    borderColor: color.color_gray,
    fontFamily: font.nunitoregular,
  },
  Stoploss: {
    fontSize: 17,
    fontFamily: font.nunitosemibold,
    color: color.color_black,
    paddingRight: 20,
    alignSelf: 'center',
  },
  leadtext: {
    fontSize: 19,
    fontFamily: font.nunitobold,
    color: color.color_white,
  },
  leadview: {
    borderRadius: 100,
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 30,
    paddingVertical: 10,
  },
});
