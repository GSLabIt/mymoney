import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Appheader from '../../component/AppHeader/appheader';
import Axis from '../../../assets/svg/axis';
import Smalleft from '../../../assets/svg/smalleft';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import CustomButton from '../../component/buttons/CustomButton';
import Remove from '../../../assets/svg/remove';



const PriceAlertScreen = ({ navigation }) => {
    const [firstname, setFirstName] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Appheader onPress={() => navigation.goBack()} header="Create Price Alert" />

            <ScrollView style={styles.mainscroll}>

                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }} onPress={() => navigation.navigate('SearchPriceAlertScreen')}>
                    <Axis />
                    <Text style={{ flex: 1, paddingLeft: 10 }}>AXISBANK</Text>
                    <Smalleft />

                </TouchableOpacity>
                <View style={styles.seperatorLine} />


                <View style={styles.withouttextinput}>
                    <TextInput
                        placeholder={"Enter Price"}
                        onChangeText={newText => setFirstName(newText)}
                        defaultValue={firstname}
                        underlineColorAndroid={color.color_gray}
                        placeholderTextColor={color.color_placeholder}
                    />
                    <Text style={{ fontSize: 15, color: color.color_black, fontFamily: font.nunitosemibold }}>Current Price: ₹34,59,494</Text>
                </View>

                <View style={{ marginVertical: 10, marginTop: 25 }}>
                    <CustomButton
                        textname="Creatr Price Alert"
                    />
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 12, color: color.color_limit, fontFamily: font.nunitoregular }}>Stocks</Text>
                    <Text style={{ fontSize: 12, color: color.color_limit, fontFamily: font.nunitoregular, paddingRight: 25 }}>ALERT PRICE</Text>
                </View>
                <View style={styles.seperatorLine} />

                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10 }} >
                    <Axis />
                    <Text style={{ flex: 1, paddingLeft: 10 }}>AXISBANK</Text>
                    <Text style={{ fontSize: 16, fontFamily: font.nunitosemibold, color: color.color_black, paddingRight: 10 }}>₹1,100.00</Text>
                    <Remove />

                </TouchableOpacity>


                <View style={styles.seperatorLine} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default PriceAlertScreen
