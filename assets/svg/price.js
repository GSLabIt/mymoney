import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Price(props) {
  return (
    <Svg
    width={28}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.619 9.679a5.747 5.747 0 0 0-1.713-4.087 5.882 5.882 0 0 0-4.135-1.693c-1.55 0-3.038.609-4.135 1.693a5.746 5.746 0 0 0-1.712 4.087c0 6.743-2.924 8.67-2.924 8.67h17.543s-2.924-1.927-2.924-8.67ZM11.457 22.202a1.937 1.937 0 0 1-.713.703 1.967 1.967 0 0 1-2.659-.703"
      stroke="#219653"
      strokeWidth={1.52}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.712 4.165c.187-.958.458-1.753.786-2.307s.702-.846 1.084-.848c.382-.002.76.287 1.093.837.334.55.614 1.343.81 2.298"
      stroke="#219653"
      strokeWidth={1.52}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
  )
}

export default Price;