import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect,Circle } from "react-native-svg"

function Greenarrow(props) {
  return (
    <Svg
    width={49}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={24.5} cy={24.5} r={24.5} fill="#119536" />
    <Path
      d="M13 24.5h23M26 15l10 9.5L26 34"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
  )
}

export default Greenarrow;