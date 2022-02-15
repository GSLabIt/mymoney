import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Alphabetic(props) {
  return (
    <Svg
    width={18}
    height={18}
    viewBox="0 0 28 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.916 8.012H2.842L2.142 10H.476L3.962.256H5.81L9.296 10h-1.68l-.7-1.988ZM6.468 6.71 4.886 2.188 3.29 6.71h3.178Zm10.266-2.45v1.344H10.98V4.26h5.754Zm3.807 4.354h4.522V10h-6.412V8.754l4.508-7.098h-4.508V.27h6.412v1.246l-4.522 7.098Z"
      fill="#000"
    />
  </Svg>
    
  )
}

export default Alphabetic;