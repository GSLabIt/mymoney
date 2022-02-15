import {View, Text, TextInput, Image,Modal,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Search from '../../../assets/svg/search';
import Filter from '../../../assets/svg/filter';


const CustomSearch = props => {

  const [search, setSearch] = useState('');
  

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
      <TouchableOpacity onPress={props.onFilterpress}>
        <Filter />
      </TouchableOpacity>




      
    </View>




  );
};

export default CustomSearch;
