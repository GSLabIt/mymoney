import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Equity from './Equity';
import Commodity from './Commodity';

const renderScene = SceneMap({
  equity: Equity,
  commodity: Commodity,
});

const renderTabBar = props => {
  // const {colors} = useTheme();
  return (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: color.color_darkblue}}
      pressColor="transparent"
      style={{
        backgroundColor: color.color_lightblue,
        elevation: 0,
      }}
      tabStyle={{}}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            backgroundColor: 'transparent',
          }}>
          <Text
            style={{
              color: focused ? '#2F80ED' : '#000000',
              fontSize: 15,
              fontFamily: font.nunitoregular,
            }}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );
};

export default function portfoliotop() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'equity', title: 'EQUITY'},
    {key: 'commodity', title: 'COMMODITY'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}
