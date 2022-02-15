import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Password(props) {
  return (
    <Svg
    width={17}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.333 8.65H2.667c-.92 0-1.667.761-1.667 1.7v5.95c0 .939.746 1.7 1.667 1.7h11.666c.92 0 1.667-.761 1.667-1.7v-5.95c0-.939-.746-1.7-1.667-1.7ZM4.333 8.65v-3.4c0-1.127.44-2.208 1.22-3.005A4.126 4.126 0 0 1 8.5 1c1.105 0 2.165.448 2.946 1.245a4.294 4.294 0 0 1 1.22 3.005v3.4"
      stroke="#9B9797"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
    
  )
}

export default Password;