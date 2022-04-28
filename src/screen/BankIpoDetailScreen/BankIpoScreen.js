import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native'
import { styles } from './styles';
import Appheader from '../../component/AppHeader/appheader';
import Axis from '../../../assets/svg/axis';
import DownArrow from '../../../assets/svg/downarrow';
import Pdf from '../../../assets/svg/pdf';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import CustomButton from '../../component/buttons/CustomButton';



const BankIpoScreen = ({ navigation }) => {

    const [isCollapsed, setisCollapsed] = useState(true);
    const [isStrengths, setisStrengths] = useState(true);
    const [isFinancials, setisFinancials] = useState(true);
    const [isSimply, setisSimply] = useState(true);
    const [isDummy, setisDummy] = useState(true);
    const [isIpsum, setisIpsum] = useState(true);
    const [isPrinting, setisPrinting] = useState(true);


    const __onTouchPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisCollapsed(!isCollapsed);
    }
    const __onTouchRisksPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisStrengths(!isStrengths);
    }

    const __onTouchFinancialsPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisFinancials(!isFinancials);
    }

    const __onTouchSimplyPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisSimply(!isSimply);
    }

    const __onTouchDummyPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisDummy(!isDummy);
    }

    const __onTouchIpsumPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisIpsum(!isIpsum);
    }

    const __onTouchPrintingPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisPrinting(!isPrinting);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Appheader onPress={() => navigation.goBack()} header="AXISBANK" />

            <ScrollView style={styles.mainscroll}>

                <View style={styles.rowview}>
                    <View style={styles.iconstyle}>
                        <Axis />
                    </View>

                    <View style={styles.nscview}>
                        <Text style={styles.axisipo}>AXISBANK IPO</Text>
                        <Text style={styles.nsctext}>NSC</Text>
                    </View>

                </View>

                <Text style={styles.numbertext}>₹ 2126.20</Text>
                <Text style={styles.nsctext}>Minimum Investment</Text>

                <View style={styles.horizontalline} />
                <Text style={styles.ipodetailstext}>IPO Details</Text>

                <View style={styles.subview}>

                    <View style={styles.columnview}>
                        <Text style={styles.datetext}>28 Mar - 30 Mar ‘22</Text>
                        <Text style={{ fontSize: 12, fontFamily: font.nunitoregular, color: color.color_limit }}>Bidding Dates</Text>
                    </View>

                    <View style={styles.columnview}>
                        <Text style={styles.datetext}>₹615 - ₹650</Text>
                        <Text style={{ fontSize: 12, fontFamily: font.nunitoregular, color: color.color_limit }}>Price Range</Text>
                    </View>

                    <View style={styles.columnview}>
                        <Text style={styles.datetext}>4,300 Cr</Text>
                        <Text style={styles.subtext}>Issue Size</Text>
                    </View>

                </View>


                <View style={styles.subview}>

                    <View style={styles.columnview}>
                        <Text style={styles.datetext}>₹12,915</Text>
                        <Text style={{ fontSize: 12, fontFamily: font.nunitoregular, color: color.color_limit }}>Min. Investment</Text>
                    </View>

                    <View style={styles.columnview}>
                        <Text style={styles.datetext}>21</Text>
                        <Text style={{ fontSize: 12, fontFamily: font.nunitoregular, color: color.color_limit }}>Lost Size</Text>
                    </View>

                    <View style={styles.columnview}>

                        <View style={styles.rowview}>
                            <View style={styles.iconstyle}>
                                <Pdf />
                            </View>
                            <Text style={styles.pdftext}>RHP PDF</Text>
                        </View>
                        <Text style={styles.subtext}>IPO Doc</Text>
                    </View>

                </View>

                <View style={styles.horizontalline} />



                <View>


                    <TouchableOpacity
                        onPress={__onTouchPress}
                        style={styles.titleContainer}
                    >

                        <Text style={styles.companytext}>
                            About the Company
                        </Text>



                        <DownArrow />

                    </TouchableOpacity>


                    {/* collaped view */}
                    {
                        !isCollapsed &&
                        <View>
                            <Text style={{ fontFamily: font.nunitoregular, fontSize: 13, color: color.color_black, textAlign: "justify", marginTop: 15 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </View>
                    }
                </View>

                <View style={styles.horizontalline} />

                <View>
                    <TouchableOpacity
                        onPress={__onTouchRisksPress}
                        style={styles.titleContainer}
                    >
                        <Text style={styles.companytext}>Strengths & Risks</Text>

                        <DownArrow />
                    </TouchableOpacity>


                    {/* collaped view */}
                    {
                        !isStrengths &&
                        <View>
                            <Text style={styles.animationtext}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </View>}
                </View>

                <View style={styles.horizontalline} />

                <View>
                    <TouchableOpacity
                        onPress={__onTouchFinancialsPress}
                        style={styles.titleContainer}
                    >
                        <Text style={styles.companytext}>Financials</Text>

                        <DownArrow />
                    </TouchableOpacity>


                    {/* collaped view */}
                    {
                        !isFinancials &&
                        <View>
                            <Text style={styles.animationtext}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </View>}
                </View>

                <View style={styles.horizontalline} />

                <View style={styles.titleContainer}>
                    <Text style={styles.companytext}>Top IPO FAQs</Text>
                    <Text style={styles.needtext}>Need Help?</Text>
                </View>


                <View>

                    <TouchableOpacity
                        onPress={__onTouchSimplyPress}
                        style={styles.titleContainer}
                    >

                        <Text style={styles.simplytext}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>

                        <DownArrow />

                    </TouchableOpacity>

                    {/* collaped view */}
                    {
                        !isSimply &&
                        <View>
                            <Text style={styles.animationtext}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </View>
                    }
                </View>


                <View>

                    <TouchableOpacity
                        onPress={__onTouchDummyPress}
                        style={styles.titleContainer}
                    >

                        <Text style={styles.simplytext}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>

                        <DownArrow />

                    </TouchableOpacity>

                    {/* collaped view */}
                    {
                        !isDummy &&
                        <View>
                            <Text style={styles.animationtext}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </View>
                    }
                </View>



                <View>

                    <TouchableOpacity
                        onPress={__onTouchIpsumPress}
                        style={styles.titleContainer}
                    >

                        <Text style={styles.simplytext}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>

                        <DownArrow />

                    </TouchableOpacity>

                    {/* collaped view */}
                    {
                        !isIpsum &&
                        <View>
                            <Text style={styles.animationtext}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </View>
                    }
                </View>



                <View>

                    <TouchableOpacity
                        onPress={__onTouchPrintingPress}
                        style={styles.titleContainer}
                    >

                        <Text style={styles.simplytext}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>

                        <DownArrow />

                    </TouchableOpacity>

                    {/* collaped view */}
                    {
                        !isPrinting &&
                        <View>
                            <Text style={styles.animationtext}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Text>
                        </View>
                    }
                </View>

                <View style={{ marginVertical: 20, marginBottom: 40 }}>
                    <CustomButton
                        textname="Apply For IPO"
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default BankIpoScreen
