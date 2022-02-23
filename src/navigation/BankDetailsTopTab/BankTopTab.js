import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import DayBank from './DayBank';
import WeekBank from './WeekBank';
import MonthBank from './MonthBank';
import YearBank from './YearBank';



const renderScene = SceneMap({
  day: DayBank,
  week: WeekBank,
  month: MonthBank,
  year: YearBank,

});

const renderTabBar = props => {
  // const {colors} = useTheme();
  return (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor:  'transparent'}}
      pressColor="transparent"
      style={{
        backgroundColor: color.color_white,
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
              fontSize: 14,
              fontFamily: font.nunitoregular,
              
            }}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );
};

export default function BankTopTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'day', title: 'Day'},
    {key: 'week', title: 'Week'},
    {key: 'month', title: 'Month'},
    {key: 'year', title: 'Year'},
   
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
