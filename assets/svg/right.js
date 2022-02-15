import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Right(props) {
  return (
    <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.293 4.293a1 1 0 0 0 0 1.414L16.586 11H5a1 1 0 1 0 0 2h11.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7 .007-.007a.997.997 0 0 0 .286-.697v-.006a.996.996 0 0 0-.286-.697l-.008-.008m0 0-6.999-7a1 1 0 0 0-1.414 0"
      fill="#000"
    />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={4}
      width={16}
      height={16}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.293 4.293a1 1 0 0 0 0 1.414L16.586 11H5a1 1 0 1 0 0 2h11.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7 .007-.007a.997.997 0 0 0 .286-.697v-.006a.996.996 0 0 0-.286-.697l-.008-.008m0 0-6.999-7a1 1 0 0 0-1.414 0"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#858093" d="M0 0h24v24H0z" />
    </G>
  </Svg>
    
  )
}

export default Right;