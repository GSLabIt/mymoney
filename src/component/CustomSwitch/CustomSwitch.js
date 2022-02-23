import {Switch} from 'react-native-switch';
import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import {font} from '../../common/Font';
import {color} from '../../common/color';

const CustomSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
    value={isEnabled}
    onValueChange={toggleSwitch}
    circleSize={30}
    barHeight={35}
    circleBorderWidth={1}
    activeText={'    '}
    inActiveText={'    '}
    circleBorderActiveColor={color.color_white}
    circleBorderInactiveColor={color.color_white}
    backgroundActive={props.MainColor}
    backgroundInactive={color.color_gray}
    circleActiveColor={color.color_white}
    circleInActiveColor={color.color_white}
    switchLeftPx={10}
    switchRightPx={10}
  />
  )
}

export default CustomSwitch;

