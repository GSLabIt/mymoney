import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import SearchHeader from './Components/SearchHeader';
import Appheader from '../../component/AppHeader/appheader';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import PopularFundList from './Components/PopularFundList';
import Right from '../../../assets/svg/right';
import SearchHistory from './Components/SearchHistory';

const TEMP_SEARCH_HISTORY = [
  "AXIS Nifty Smallcap 50 Index Fund - Dir (G)",
  "Quant Small Cap Fund - Direct (G)"
];

const Data = [
  "AXIS Nifty Smallcap 50 Index Fund - Dir (G)",
  "AXIS Equity ETFs FoF - Direct (G)",
  "AXIS FTP - Series 100 - 1172Days - Direct (G)",
  "AXIS Nifty Smallcap 50 Index Fund - Dir (G)",
  "AXIS Equity ETFs FoF - Direct (G)",
  "AXIS FTP - Series 100 - 1172Days - Direct (G)",
  "AXIS Nifty Smallcap 50 Index Fund - Dir (G)",
  "AXIS Equity ETFs FoF - Direct (G)",
  "AXIS FTP - Series 100 - 1172Days - Direct (G)",
  "AXIS Nifty Smallcap 50 Index Fund - Dir (G)",
  "AXIS Equity ETFs FoF - Direct (G)",
  "AXIS FTP - Series 100 - 1172Days - Direct (G)",
];



const MatualFundsScreen = ({ navigation }) => {

  const componentDidMount = useRef(null);
  const searchTextRef = useRef(null);
  const [textSearch, settextSearch] = useState("");
  const [searchShow, setsearchShow] = useState(false);

  // useEffect(() => {
  //   searchTextRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   componentDidMount.current = true;
  // }, [textSearch]);

  const __onSearchHistoryPress = (text) => {
    settextSearch(text);
    setsearchShow(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appheader
        onPress={() => navigation.goBack()}
        header="Mutual Funds"
      />

      <View style={styles.Searchview}>
        <SearchHeader
          textSearch={textSearch}
          settextSearch={settextSearch}
          ref={searchTextRef}
          onSearchFocus={() => setsearchShow(true)}
          onSubmitEditing={() => setsearchShow(false)}
        />

      </View>

      {searchShow ?
        <SearchHistory
          data={textSearch ? Data : TEMP_SEARCH_HISTORY}
          onItemPress={__onSearchHistoryPress}
          textSearch={textSearch}
        />
        :
        <View style={styles.whiteview}>

          <View
            style={styles.seeview}>
            <Text
              style={styles.popularfundtext}>
              Popular Funds
            </Text>
            <Text
              style={styles.seealltext}
              onPress={() => navigation.navigate('AllMatualFundScreen')}>
              See All
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <PopularFundList horizontal backgroundColor={color.color_lightblue} />
          </View>
          <Text
            style={[styles.popularfundtext, { paddingBottom: 10 }]}>
            All Mutual Funds
          </Text>

          <PopularFundList />

          <TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate('AllMatualFundScreen')}>
            <Text style={styles.buttontext}>View All</Text>
            <Right />
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  )
}

export default MatualFundsScreen
