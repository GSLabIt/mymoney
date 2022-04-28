import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { font } from '../../common/Font';
import { color } from '../../common/color';
import Modal from 'react-native-modal';
import Cross from '../../../assets/svg/cross';

import Dropdown from '../../../assets/svg/dropdown';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
import CustomDropDown from '../CustomDropDown/CustomDropDown';
import { useNavigation } from '@react-navigation/native';

const CustomSellModal = props => {
  const [focus, setFocus] = useState(true);
  const [quantity, setQuantity] = useState('');
  const navigation = useNavigation();


  return (
    <Modal
      isVisible={props.modalshow}
      animationIn={'fadeInDown'}
      animationOut={'fadeInDown'}
      backdropColor={color.color_black}
      backdropOpacity={0.5}
      style={{ margin: 0 }}>
      <View
        style={{
          backgroundColor: color.color_white,
          width: '90%',
          alignSelf: 'center',
          paddingVertical: 20,
          paddingHorizontal: 15,
          borderRadius: 15,
        }}>
        <TouchableOpacity
          style={{ alignSelf: 'flex-end' }}
          onPress={props.onPressClose}>
          <Cross />
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.toptextview}>
            <View style={styles.subview}>
              <Text style={styles.modaltext}>AXISBANK</Text>
              <View style={styles.nseview}>
                <Text
                  style={[
                    styles.nseText,
                    {
                      color: !focus ? color.color_black : color.color_white,
                      backgroundColor: focus ? `${props.maincolor}` : '#C6C6C6',
                    },
                  ]}
                  onPress={() => setFocus(!false)}>
                  NSE
                </Text>
                <Text
                  style={[
                    styles.nseText,
                    {
                      color: focus ? color.color_black : color.color_white,
                      backgroundColor: focus ? '#C6C6C6' : `${props.maincolor}`,
                    },
                  ]}
                  onPress={() => setFocus(!true)}>
                  BSE
                </Text>
              </View>
            </View>

            <View style={styles.subview}>
              <Text style={[styles.rupeemodal, { color: `${props.maincolor}` }]}>
                ₹ 2126.20
              </Text>
              <View style={styles.precentageview}>
                <Text style={styles.baracketmodal}>+30.00 (</Text>
                <Text
                  style={[
                    styles.percentagemodal,
                    { color: `${props.maincolor}` },
                  ]}>
                  +0.72%
                </Text>
                <Text style={styles.baracketmodal}>)</Text>
              </View>
            </View>
          </View>

          <View style={styles.horizontalline} />

          <View style={styles.Quantityview}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.QuantityText}>Quantity</Text>
              <TextInput
                onChangeText={setQuantity}
                value={quantity}
                placeholderTextColor={color.color_black}
                style={styles.QuantitInput}
              />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.QuantityText}>Prise</Text>

              <Text style={styles.QuantityNumber}>₹ 2126.20</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.QuantityText}>Order</Text>

              <View
                style={[
                  styles.dropdownview,
                  { backgroundColor: `${props.maincolor}` },
                ]}>
                <CustomDropDown
                  ModalValue={['LIMIT', 'SL', 'SLM']}
                  DefaultValue={'LIMIT'}
                />
                <Dropdown />
              </View>
            </View>
          </View>

          <View style={styles.modeview}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.QuantityText}>Mode</Text>

              <Text style={styles.Intradaytext}>Intraday</Text>
            </View>

            <Text style={styles.Deliverytext}>Delivery</Text>

            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.QuantityText}>Validity</Text>

              <View
                style={[
                  styles.dropdownview,
                  { backgroundColor: `${props.maincolor}`, marginTop: 10 },
                ]}>
                <CustomDropDown
                  ModalValue={['DAY', 'SL', 'SLM']}
                  DefaultValue={'DAY'}
                />
                <Dropdown />
              </View>
            </View>
          </View>

          <View style={styles.horizontalline} />
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={styles.Stoploss}>Set Stoploss</Text>

            <CustomSwitch MainColor={props.maincolor} />
          </View>

          <View style={styles.horizontalline} />

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={[styles.Stoploss, { paddingRight: 40 }]}>
              Set target
            </Text>

            <CustomSwitch MainColor={props.maincolor} />
          </View>

          <View style={styles.horizontalline} />

          <TouchableOpacity
            style={[styles.leadview, { backgroundColor: `${props.maincolor}` }]} onPress={() => navigation.navigate('Tabstack')}>
            <Text style={styles.leadtext}>{props.leadtext}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CustomSellModal;
