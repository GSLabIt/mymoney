import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Bell(props) {
  return (
    <Svg
    width={15}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.761 5.2a4.15 4.15 0 0 0-1.26-2.97A4.36 4.36 0 0 0 7.457 1a4.36 4.36 0 0 0-3.044 1.23 4.15 4.15 0 0 0-1.26 2.97C3.152 10.103 1 11.503 1 11.503h12.914s-2.153-1.4-2.153-6.301ZM8.698 14.302a1.418 1.418 0 0 1-.525.511 1.463 1.463 0 0 1-1.432 0 1.418 1.418 0 0 1-.525-.51"
      stroke="#172B4D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.967 4.878C14.09 4.878 15 4.01 15 2.938 15 1.869 14.09 1 12.967 1c-1.123 0-2.033.868-2.033 1.939 0 1.07.91 1.939 2.033 1.939Z"
      fill="#FE0D0D"
    />
    <Path
      d="M12.967 4.458c.88 0 1.593-.68 1.593-1.52 0-.838-.713-1.519-1.593-1.519s-1.594.68-1.594 1.52c0 0 .714 1.519 1.594 1.519Z"
      stroke="#fff"
      strokeWidth={0.64}
    />
  </Svg>
    
  )
}

export default Bell;