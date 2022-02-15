import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Email(props) {
  return (
    <Svg
    width={21}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.9 1h15.2c.503.001.986.186 1.342.514.356.328.556.772.558 1.236v10.5a1.688 1.688 0 0 1-.558 1.236A1.991 1.991 0 0 1 18.1 15H2.9a1.991 1.991 0 0 1-1.342-.514A1.688 1.688 0 0 1 1 13.25V2.75c.002-.464.202-.908.558-1.236A1.991 1.991 0 0 1 2.9 1v0Z"
      stroke="#9B9797"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m20 2.75-9.5 6.125L1 2.75"
      stroke="#9B9797"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
    
  )
}

export default Email;