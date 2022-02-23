import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Current from './Current';
import Holding from './Holding';
import Booked from './Booked';


const renderScene = SceneMap({
    current: Current,
    holding: Holding,
    booked: Booked,
});

const renderTabBar = props => {
  // const {colors} = useTheme();
  return (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor:  'transparent'}}
    
      pressColor='transparent'
      style={{
        backgroundColor: color.color_white,
        elevation:0
      }}
      tabStyle={{}}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            backgroundColor:focused ? "#EDF1F9" : "transparent",
            paddingVertical:5,
            paddingHorizontal:10,
            borderRadius:30,
           
            
          }}>
          <Text
            style={{
              color: focused ? '#2F80ED' : '#000000',
              fontSize: 12,
              fontFamily: font.nunitoregular,
            }}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );
};

export default function PortfolioInnerTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'current', title: 'Current'},
    {key: 'holding', title: 'Holding'},
    {key: 'booked', title: 'Booked P/L'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
     swipeEnabled={false}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}
