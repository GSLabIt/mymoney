import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Delete(props) {
  return (
    <Svg
    width={"60%"}
    height={"60%"}
    viewBox={`0 -14 50 50`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.589 1.48c.3-.307.71-.48 1.14-.48H43.74c.163 0 .296.133.296.296v23.328a.296.296 0 0 1-.296.296H13.729c-.43 0-.84-.173-1.14-.48L1.599 13.166a.296.296 0 0 1 0-.414l10.99-11.272Z"
      stroke="#292929"
      strokeWidth={2}
      // scaleX={0.8}
      // scaleY={0.8}
    />
    <Path d="M35 5 19 21" stroke="#000" strokeWidth={1.863} />
    <Path d="m19 5 16 16" stroke="#292929" strokeWidth={1.863} />
  </Svg>
    
  )
}

export default Delete;