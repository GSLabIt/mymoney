import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Selected(props) {
  return (
    <Svg
    width={21}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 21.5C16.299 21.5 21 16.799 21 11S16.299.5 10.5.5 0 5.201 0 11s4.701 10.5 10.5 10.5Zm3.356-13.533a.587.587 0 0 0-.403.179c-1.45 1.454-2.772 2.888-4.182 4.32l-1.784-1.427a.587.587 0 1 0-.733.917l2.2 1.761a.587.587 0 0 0 .785-.046c1.577-1.58 2.995-3.139 4.548-4.695a.587.587 0 0 0-.43-1.009Z"
      fill="#4E8AD0"
    />
  </Svg>
    
  )
}

export default Selected;