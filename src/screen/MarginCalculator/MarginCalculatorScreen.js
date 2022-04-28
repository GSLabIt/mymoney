import React, { useState, useRef, useEffect, useMemo } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles';
import Appheader from '../../component/AppHeader/appheader';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import { TextInput } from 'react-native-paper';



const MarginCalculatorScreen = ({ navigation }) => {
    const [text, setText] = useState("");
    const [venue, setVenue] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Appheader onPress={() => navigation.goBack()} header="Create Price Alert" />

            <ScrollView style={styles.mainscroll}>

                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <TextInput
                        label="Cost"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode={"outlined"}
                        placeholder="₹ :125.00"
                        selectionColor={color.color_black}
                        outlineColor={color.color_limit}
                        activeOutlineColor={color.color_limit}
                        style={{ marginBottom: 20 }}
                        theme={{
                            colors: {
                                background: color.color_white
                            }
                        }}
                    />
                    <TextInput
                        label="Revenue"
                        value={venue}
                        onChangeText={venue => setVenue(venue)}
                        mode={"outlined"}
                        placeholder="₹ :250.00"
                        selectionColor={color.color_black}
                        outlineColor={color.color_limit}
                        activeOutlineColor={color.color_limit}
                        theme={{
                            colors: {
                                background: color.color_white
                            }
                        }}
                    />
                </View>
                <View style={styles.buttonmain}>

                    <TouchableOpacity style={styles.buytext}>
                        <Text style={styles.onetext}>Clear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selltext}>
                        <Text style={styles.sametext}>Calculate</Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 20, fontFamily: font.nunitobold, color: color.color_black, paddingHorizontal: 20 }}>Answer</Text>


                <TouchableOpacity style={styles.backgroundview}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 18, fontFamily: font.nunitobold, color: color.color_black }}>Gross Margin:</Text>
                        <Text style={{ fontSize: 18, fontFamily: font.nunitoregular, color: color.color_black }}>50.00%</Text>
                    </View>

                    <View style={styles.seperatorLine} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 18, fontFamily: font.nunitobold, color: color.color_black }}>Markup:</Text>
                        <Text style={{ fontSize: 18, fontFamily: font.nunitoregular, color: color.color_black }}>100.00%</Text>
                    </View>

                    <View style={styles.seperatorLine} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 18, fontFamily: font.nunitobold, color: color.color_black }}>Markup:</Text>
                        <Text style={{ fontSize: 18, fontFamily: font.nunitoregular, color: color.color_black }}>100.00%</Text>
                    </View>

                </TouchableOpacity>


            </ScrollView>
        </SafeAreaView>
    )
}

export default MarginCalculatorScreen
