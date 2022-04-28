import React, { memo, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Appheader from '../../component/AppHeader/appheader';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import PopularFundList from '../MatualFunds/Components/PopularFundList';
import HorizontalSeperator from '../MatualFunds/Components/HorizontalSeperator';
import Mutualdrop from '../../../assets/svg/mutualdrop';



const AllMatualFundScreen = ({ navigation }) => {
    const [year, setYear] = useState(3);

    return (
        <SafeAreaView style={styles.container}>
            <Appheader
                onPress={() => navigation.goBack()}
                header="All Mutual Funds"
            />

            <View style={styles.mainview}>

                <TouchableOpacity style={styles.filterview} onPress={() => navigation.navigate("FilterShortScreen")}>
                    <Text style={styles.shorttext}>Filter / Sort</Text>
                    <View style={styles.imageview}>
                        <Mutualdrop />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.yearview} onPress={() => setYear(year + 2)}>
                    <Text style={styles.symbol}>{`< >`}</Text>
                    <Text style={styles.returntext}>{year + "Y Returns"}</Text>
                </TouchableOpacity>

            </View>

            <HorizontalSeperator />
            <View style={styles.whiteview}>
                <PopularFundList />
            </View>

        </SafeAreaView>
    )
}

export default AllMatualFundScreen
