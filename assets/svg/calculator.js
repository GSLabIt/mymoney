import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Calculator(props) {
  return (
    <Svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.832 0H3.168A2.581 2.581 0 0 0 .59 2.578v16.844A2.581 2.581 0 0 0 3.168 22h13.664a2.581 2.581 0 0 0 2.578-2.578V2.578A2.581 2.581 0 0 0 16.832 0Zm.86 19.422a.86.86 0 0 1-.86.86H3.168a.86.86 0 0 1-.86-.86V7.39h15.383v12.03Zm0-13.75H2.308V2.578a.86.86 0 0 1 .859-.86h13.664a.86.86 0 0 1 .86.86v3.094Z"
      fill="#219653"
    />
  </Svg>
  )
}

export default Calculator;