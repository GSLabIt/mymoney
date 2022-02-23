import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Chandlechart(props) {
  return (
    <Svg
    width={22}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.6}>
      <Path
        d="M1.1 2.1v19.8M1.1 21.9h19.8"
        stroke="#2F80ED"
        strokeWidth={1.65}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M6.05 16.45v-11"
        stroke="#EB5757"
        strokeWidth={1.1}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.6 7.6H5.5a1.1 1.1 0 0 0-1.1 1.1v4.4a1.1 1.1 0 0 0 1.1 1.1h1.1a1.1 1.1 0 0 0 1.1-1.1V8.7a1.1 1.1 0 0 0-1.1-1.1Z"
        fill="#EB5757"
      />
      <Path
        d="M12.1 9.8H11a1.1 1.1 0 0 0-1.1 1.1v4.4a1.1 1.1 0 0 0 1.1 1.1h1.1a1.1 1.1 0 0 0 1.1-1.1v-4.4a1.1 1.1 0 0 0-1.1-1.1Z"
        fill="#2F80ED"
      />
      <Path
        d="M17.6 3.2h-1.1a1.1 1.1 0 0 0-1.1 1.1v4.4a1.1 1.1 0 0 0 1.1 1.1h1.1a1.1 1.1 0 0 0 1.1-1.1V4.3a1.1 1.1 0 0 0-1.1-1.1Z"
        fill="#219653"
      />
      <Path
        d="M11.55 18.65v-11"
        stroke="#2F80ED"
        strokeWidth={1.1}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.05 12.05v-11"
        stroke="#219653"
        strokeWidth={1.1}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
  )
}

export default Chandlechart;