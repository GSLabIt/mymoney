import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Back(props) {
  return (
    <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.707 12.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L2.414 7l5.293 5.293Z"
      fill="#0D1F3C"
    />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={8}
      height={14}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.707 12.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L2.414 7l5.293 5.293Z"
        fill="#fff"
      />
    </Mask>
  </Svg>
    
    
  )
}

export default Back;