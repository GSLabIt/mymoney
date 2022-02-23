import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Dropdown(props) {
  return (
    <Svg
    width={11}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.659.22a.812.812 0 0 1 1.11 0 .726.726 0 0 1 0 1.06l-4.713 4.5a.812.812 0 0 1-1.112 0L.23 1.28a.726.726 0 0 1 0-1.06.812.812 0 0 1 1.111 0L5.5 4.19 9.659.22Z"
      fill="#fff"
    />
  </Svg>
    
  )
}

export default Dropdown;