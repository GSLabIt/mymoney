import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {font} from '../../common/Font';
import {color} from '../../common/color';

import Day from './Day';
import Week from './Week';
import Month from './Month';
import Year from './Year';
import All from './All';

const renderScene = SceneMap({
  day: Day,
  week: Week,
  month: Month,
  year: Year,
  all: All,
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
        marginBottom: 10,
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

export default function WatchListTopTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'day', title: 'Day'},
    {key: 'week', title: 'Week'},
    {key: 'month', title: 'Month'},
    {key: 'year', title: 'Year'},
    {key: 'all', title: 'All'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabBarPosition={'bottom'}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}
