import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Watchlist(props) {
  return (
    <Svg
    width={13}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.671 0H2.33C1.045 0 0 1.087 0 2.423v13.89a.69.69 0 0 0 .358.61c.22.119.484.099.686-.05L6.5 12.815l5.457 4.056a.642.642 0 0 0 .685.052.69.69 0 0 0 .358-.61V2.422C13 1.087 11.955 0 10.671 0Zm1.01 14.979-4.797-3.565a.642.642 0 0 0-.768 0L1.32 14.979V2.423c0-.579.452-1.05 1.009-1.05h8.342c.557 0 1.01.471 1.01 1.05v12.556Z"
      fill={props.active}
    />
  </Svg>
    
  )
}

export default Watchlist;