import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Usertab(props) {
  return (
    <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      opacity={0.6}
      stroke={props.active}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M17 19v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </G>
  </Svg>
    
  )
}

export default Usertab;