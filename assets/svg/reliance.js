import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Reliance(props) {
  return (
    <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.778 4.222a10.968 10.968 0 0 0-15.556 0 10.968 10.968 0 0 0 0 15.556 10.968 10.968 0 0 0 15.556 0 10.968 10.968 0 0 0 0-15.556ZM5.636 18.364a8.963 8.963 0 0 1 0-12.728 8.963 8.963 0 0 1 12.728 0 8.963 8.963 0 0 1 0 12.728 8.963 8.963 0 0 1-12.728 0Zm8.897-10.61a.359.359 0 0 1-.13-.043c-.083-.056-.222-.029-.36-.002L8.49 8.796a.967.967 0 0 0-.782 1.162.967.967 0 0 0 1.162.781l3.192-.625-3.125 4.647c-.335.498-.226 1.053.271 1.388.498.335 1.053.226 1.388-.272l3.126-4.647.625 3.192a.967.967 0 0 0 1.161.782c.278-.055.472-.165.64-.414.167-.248.196-.47.142-.748l-1.087-5.551c-.027-.14-.054-.278-.137-.334-.028-.138-.194-.25-.277-.306-.097-.065-.185-.083-.257-.098Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#219653" d="M0-1h24v24H0z" />
    </G>
  </Svg>
    
  )
}

export default Reliance;