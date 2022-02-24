import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Mattie from '../../../assets/svg/mattie';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Dashbord from '../../../assets/svg/dashbord';
import Matual from '../../../assets/svg/matual';
import Research from '../../../assets/svg/research';
import Price from '../../../assets/svg/price';
import Ipo from '../../../assets/svg/ipo';
import Calculator from '../../../assets/svg/calculator';
import Gold from '../../../assets/svg/gold';
import Signout from '../../../assets/svg/signout';
import Modal from 'react-native-modal';
import CustomButton from '../../component/buttons/CustomButton';
import Modallog from '../../../assets/svg/modallog';
import useStore from '../../../store';

const CustomSidebarMenu = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [focus, setFocus] = useState(true);
  const {press} = useStore();
  const toggleModal = () => {
    setFocus(true);
    setIsModalVisible(!isModalVisible);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.sideMenuContainer}>
        <Mattie />

        <Text style={styles.profileHeaderText}>Mattie{'\n'}Hardwick</Text>
        <View style={styles.dashbordview}>
          <Dashbord />
          <Text style={styles.dashbord}>Dashboard</Text>
        </View>

        <View style={styles.dashbordview}>
          <Matual />

          <Text style={styles.dashbord}>Matual Funds</Text>
        </View>

        <View style={styles.dashbordview}>
          <Research />

          <Text style={styles.dashbord}>Research</Text>
        </View>

        <View style={styles.dashbordview}>
          <Price />
          <Text style={styles.dashbord}>Price alert</Text>
        </View>

        <View style={styles.dashbordview}>
          <Ipo />

          <Text style={styles.dashbord}>IPO</Text>
        </View>

        <View style={styles.dashbordview}>
          <Calculator />
          <Text style={styles.dashbord}>Margin Calculator</Text>
        </View>

        <View style={styles.dashbordview}>
          <Gold />
          <Text style={styles.dashbord}>Gold</Text>
        </View>

        <TouchableOpacity
          style={[styles.dashbordview, {paddingBottom: 20}]}
          onPress={() => toggleModal()}>
          <Signout />
          <Text style={styles.dashbord}>Sign out</Text>
        </TouchableOpacity>

        <Modal
          isVisible={isModalVisible}
          animationIn={'fadeInDown'}
          animationOut={'fadeInDown'}
          backdropColor={color.color_black}
          backdropOpacity={0.5}>
          <View style={styles.mainview}>
            <View style={{alignSelf: 'center'}}>
              <Modallog />
            </View>
            <Text style={styles.suretext}>
              Are you sure you want to Logout.?
            </Text>
            <View style={styles.rowview}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 1,
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  borderRadius: 12,
                  backgroundColor: focus
                    ? color.color_white
                    : color.color_darkblue,
                  borderColor: focus ? color.color_black : color.color_darkblue,
                }}
                onPress={() => {
                  setFocus(false);
                  // press
                }}>
                <Text
                  style={[
                    styles.yestext,
                    {color: focus ? color.color_black : color.color_white},
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderWidth: 1,
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  marginLeft: 20,
                  borderRadius: 12,
                  backgroundColor: focus
                    ? color.color_darkblue
                    : color.color_white,
                  borderColor: focus ? color.color_darkblue : color.color_black,
                }}
                onPress={toggleModal}>
                <Text
                  style={[
                    styles.yestext,
                    {color: focus ? color.color_white : color.color_black},
                  ]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomSidebarMenu;
