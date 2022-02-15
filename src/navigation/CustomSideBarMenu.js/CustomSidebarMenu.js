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

const CustomSidebarMenu = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
          onPress={()=>setIsModalVisible(true)}
          >
          <Signout />
          <Text style={styles.dashbord}>Sign out</Text>
        </TouchableOpacity>

        <Modal
          isVisible={isModalVisible}
          animationIn={'fadeInDown'}
          animationOut={'fadeInDown'}
          backdropColor={color.color_black}
          backdropOpacity={0.5}
          >
          <View
            style={{
              backgroundColor: color.color_white,
              width: '100%',
            
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingBottom: 50,
            }}></View>
        </Modal>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomSidebarMenu;
