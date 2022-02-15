import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Number(props) {
  return (
    <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.709 2.083H7.292c-1.15 0-2.083.933-2.083 2.084v16.666c0 1.15.932 2.084 2.083 2.084h10.416c1.151 0 2.084-.933 2.084-2.084V4.167c0-1.151-.933-2.084-2.084-2.084ZM12.5 18.75h.01"
      stroke="#97ADB6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
  )
}

export default Number;