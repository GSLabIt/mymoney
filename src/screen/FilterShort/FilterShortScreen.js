import React, { memo, useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles';
import Appheader from '../../component/AppHeader/appheader';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import AmcListItem from './Components/AmcListItem';
import RatingListItem from './Components/RatingListItem';
import KeyValueFilterShort from '../../common/KeyValueFilterShort';
import KeyValueCategoryShort from '../../common/KeyValueCategoryShort';
import KeyValueInvest from '../../common/KeyValueInvest';
import KeyValueSortBy from '../../common/KeyValueSortBy';
import KeyValueRisk from '../../common/KeyValueRisk';



const DATA = [
    {
        id: 0,
        title: "AMC"
    },
    {
        id: 1,
        title: "Category"
    },
    {
        id: 2,
        title: "Rating"
    },
    {
        id: 3,
        title: "Risk"
    },
    {
        id: 4,
        title: "Available to invest"
    },
    {
        id: 5,
        title: "Sort By"
    },
];

const FilterShortScreen = ({ navigation }) => {


    const [selectedData, setselectedData] = useState(0);

    const renderItems = () => {
        switch (selectedData) {
            case 0:
                return <AmcListItem listingdata={KeyValueFilterShort} />
            case 1:
                return <AmcListItem listingdata={KeyValueCategoryShort} />
            case 2:
                return <RatingListItem />
            case 3:
                return <AmcListItem listingdata={KeyValueRisk} />
            case 4:
                return <AmcListItem listingdata={KeyValueInvest} />
            case 5:
                return <AmcListItem listingdata={KeyValueSortBy} />
            default:
                return null;
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <Appheader
                onPress={() => navigation.goBack()}
                header="Filter - Sort"
            />

            <View style={styles.mainview}>
                <View style={{ marginTop: 10, width: "40%" }}>
                    {
                        DATA.map((item, index) => {
                            return (
                                <TouchableOpacity style={styles.touchableview} onPress={() => {
                                    setselectedData(index);
                                }} >
                                    <Text style={{ fontFamily: font.nunitosemibold, fontSize: 14, color: index === selectedData ? color.color_darkblue : color.color_black, }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

                <View style={styles.sideview}>
                    {
                        renderItems()
                    }
                </View>

            </View>
            <View style={styles.buttonmain}>

                <TouchableOpacity style={styles.buytext}>
                    <Text style={styles.onetext}>Clear All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.selltext}>
                    <Text style={styles.sametext}>Apply</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    )
}

export default FilterShortScreen
