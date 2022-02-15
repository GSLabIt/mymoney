import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ColorPropType,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Drawer from '../../../assets/svg/drawer';
import CustomSearch from '../../component/CustomSearchview/CustomSearch';

import OrderTopTab from '../orderTopTab/OrderTopTab';
import CustomButton from '../../component/buttons/CustomButton';
import Modal from 'react-native-modal';
import Rupee from '../../../assets/svg/rupee';
import Alphabetic from '../../../assets/svg/alphabetic';
import PlusCircle from '../../../assets/svg/pluscircle';
import Selected from '../../../assets/svg/selected';
import {any} from 'react-native/Libraries/Text/TextNativeComponent';

const names = [
  {icon: <Rupee />, name: 'NSE', isselected: false},
  {icon: <Rupee />, name: 'BSE', isselected: false},
  {icon: <Alphabetic />, name: 'Alphabetically', isselected: false},
  {icon: <PlusCircle />, name: 'Last Traded Prise', isselected: false},
];
const OrderScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [focus, setFocus] = useState(true);
  const [isselected, setIsSelected] = useState(names);

  const value_selected = (index, value) => {
    setIsSelected(prev => {
      const tempData = [...prev];
      tempData[index].isselected = !tempData[index].isselected;
      return tempData;
    });
  };

  const _handleCategorySelect = () => {
    setIsSelected(prev => {
      setFocus(true);
      const selectedArray = [...prev];

      for (let i = 0; i < selectedArray.length; i++) {
        selectedArray[i].isselected = true;
      }

      console.log(selectedArray);
      return selectedArray;
    });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          style={{paddingLeft: 5, paddingRight: 15, paddingTop: 15}}>
          <Drawer />
        </TouchableOpacity>
        <View style={{flex: 1, marginRight: 10}}>
          <CustomSearch onFilterpress={toggleModal} />
        </View>
      </View>
      <View style={{marginBottom: 7, flex: 1}}>
        <OrderTopTab />
      </View>

      <Modal
        isVisible={isModalVisible}
        animationIn={'fadeInDown'}
        animationOut={'fadeInDown'}
        backdropColor={color.color_black}
        backdropOpacity={0.5}
        style={{margin: 0}}>
        <View
          style={{
            backgroundColor: color.color_white,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            paddingBottom: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              marginTop: 25,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: font.poppinsmedium,
                fontWeight: '600',
                color: color.color_filter,
              }}>
              Filter
            </Text>
            <Text
              style={{
                fontSize: 19,
                fontFamily: font.poppinsmedium,
                fontWeight: '500',
                color: color.color_darkblue,
              }}
              onPress={toggleModal}>
              Done
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: focus
                  ? color.color_lightblue
                  : color.color_white,
                alignSelf: 'center',
                paddingVertical: 2,
                paddingHorizontal: 15,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: focus
                  ? color.color_lightblue
                  : color.color_filterborder,
                marginRight: 20,
              }}
              // onPress={() => {
              //   setFocus(true);

              // }}
              onPress={
                () => _handleCategorySelect()
                // setFocus(true);
              }>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: font.poppinsmedium,
                  fontWeight: '500',
                  alignSelf: 'center',

                  color: color.color_darkblue,
                }}>
                Select All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: focus
                  ? color.color_white
                  : color.color_lightblue,
                paddingVertical: 2,
                alignSelf: 'center',
                paddingHorizontal: 15,
                borderRadius: 15,
                borderWidth: 1,

                borderColor: focus
                  ? color.color_filterborder
                  : color.color_lightblue,
              }}
              onPress={() => {
                setFocus(false);
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: font.poppinsmedium,
                  fontWeight: '500',
                  alignSelf: 'center',

                  color: color.color_darkblue,
                }}>
                Clear All
              </Text>
            </TouchableOpacity>
          </View>

          {isselected.map((item, index) => (
            <View
              key={index.toString() + '_'}
              style={{flexDirection: 'column', paddingHorizontal: 30}}>
              <TouchableOpacity
                style={{flexDirection: 'row', paddingTop: 30}}
                onPress={() => value_selected(index)}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: color.color_lightblue,
                    padding: 8,
                    borderRadius: 12,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: color.color_lightblue,
                  }}>
                  {item.icon}
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: font.poppinsmedium,
                    fontWeight: '500',
                    paddingLeft: 10,
                    alignSelf: 'center',
                    color: color.color_filter,
                    flex: 1,
                  }}>
                  {item.name}
                </Text>
                {item.isselected && (
                  <View style={{alignSelf: 'center'}}>
                    <Selected />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderScreen;
