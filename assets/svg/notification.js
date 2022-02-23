import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Notification(props) {
  return (
    <Svg
    width={43}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.276 0c11.7 0 21.187 8.965 21.187 20.024 0 11.059-9.486 20.023-21.187 20.023C9.574 40.047.088 31.083.088 20.024S9.574 0 21.276 0Z"
      fill="#4E8AD0"
    />
    <Path
      d="m32 14-9.5 9.5-5-5L10 26"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M26 14h6v6"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
  )
}

export default Notification;