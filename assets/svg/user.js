import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function User(props) {
  return (
    <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.938 18.813v-1.909a3.852 3.852 0 0 0-1.099-2.699 3.717 3.717 0 0 0-2.652-1.118h-7.5c-.994 0-1.948.402-2.651 1.118a3.852 3.852 0 0 0-1.099 2.699v1.909M9.438 8.634c2.07 0 3.75-1.709 3.75-3.817S11.508 1 9.438 1c-2.072 0-3.75 1.709-3.75 3.817s1.678 3.817 3.75 3.817Z"
      stroke="#9B9797"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
    
  )
}

export default User;