import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Dashbord(props) {
  return (
    <Svg
    width={29}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.625 9.875 14.5 1.417l10.875 8.458v13.292a2.417 2.417 0 0 1-2.417 2.416H6.042a2.417 2.417 0 0 1-2.417-2.416V9.875Z"
      stroke="#219653"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.875 25.583V13.5h7.25v12.083"
      stroke="#219653"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
  )
}

export default Dashbord;