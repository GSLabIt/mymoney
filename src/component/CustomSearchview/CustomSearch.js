import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Search from '../../../assets/svg/search';
import Filter from '../../../assets/svg/filter';
import Modal from 'react-native-modal';
import Rupee from '../../../assets/svg/rupee';
import Alphabetic from '../../../assets/svg/alphabetic';
import PlusCircle from '../../../assets/svg/pluscircle';
import Selected from '../../../assets/svg/selected';


const names = [
  {icon: <Rupee />, name: 'NSE', isselected: false},
  {icon: <Rupee />, name: 'BSE', isselected: false},
  {icon: <Alphabetic />, name: 'Alphabetically', isselected: false},
  {icon: <PlusCircle />, name: 'Last Traded Prise', isselected: false},
];

const CustomSearch = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [focus, setFocus] = useState(true);
  const [isselected, setIsSelected] = useState(names);
  const [search, setSearch] = useState('');

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

  const _handleCategoryClear = () => {
    setIsSelected(prev => {
      setFocus(true);
      const selectedArray = [...prev];

      for (let i = 0; i < selectedArray.length; i++) {
        selectedArray[i].isselected = false;
      }

      console.log(selectedArray);
      return selectedArray;
    });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 74,
        backgroundColor: color.color_white,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Search />
     
      <TextInput
        placeholder="Search anything"
        onChangeText={setSearch}
        value={search}
        placeholderTextColor={color.color_placeholder}
        style={{flex: 1, marginLeft: 10, fontSize: 14}}
      />
      <View
        style={{
          height: 20,
          width: 1,
          backgroundColor: '#909090',
          marginRight: 20,
        }}
      />
      {/* onPress={props.onFilterpress} */}
      <TouchableOpacity onPress={toggleModal}>
        <Filter />
      </TouchableOpacity>

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
              onPress={() => {
                _handleCategorySelect(), setFocus(true);
              }}>
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
                _handleCategoryClear(), setFocus(false);
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
    </View>
  );
};

export default CustomSearch;
