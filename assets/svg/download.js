import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Download(props) {
  return (
    <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.583 18.333V16.5h12.833v1.833H4.583Zm0-10.083H8.25v-5.5h5.5v5.5h3.667L11 14.667 4.583 8.25Z"
      fill="#2F80ED"
    />
  </Svg>
    
  )
}

export default Download;