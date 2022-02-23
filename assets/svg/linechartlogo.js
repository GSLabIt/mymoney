import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Linechartlogo(props) {
  return (
    <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.1 1.1v19.8M1.1 20.9h19.8"
      stroke="#2F80ED"
      strokeWidth={1.65}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Path
      d="M4.444 16.55 8.8 8.895l3.288 5.314L16.5 3.295l3.375 7.688"
      stroke="#2F80ED"
      strokeWidth={1.65}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
  )
}

export default Linechartlogo;