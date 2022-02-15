import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Fund(props) {
  return (
    <Svg
    width={23}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.683 0H3.317A3.32 3.32 0 0 0 0 3.314v12.372A3.32 3.32 0 0 0 3.317 19h16.366A3.32 3.32 0 0 0 23 15.686V3.314A3.32 3.32 0 0 0 19.683 0Zm1.99 11.488h-4.865a1.992 1.992 0 0 1-1.99-1.988c0-1.096.892-1.988 1.99-1.988h4.865v3.976Zm0-5.302h-4.865A3.32 3.32 0 0 0 13.49 9.5a3.32 3.32 0 0 0 3.318 3.314h4.865v2.872a1.992 1.992 0 0 1-1.99 1.988H3.317a1.992 1.992 0 0 1-1.99-1.988V3.314c0-1.096.893-1.988 1.99-1.988h16.366c1.097 0 1.99.892 1.99 1.988v2.872Z"
      fill={props.active}
    />
    <Path
      d="M17.852 8.55h-.891a.666.666 0 0 0-.669.663c0 .366.3.663.669.663h.891c.37 0 .669-.297.669-.663 0-.366-.3-.663-.669-.663Z"
      fill={props.active}
    />
  </Svg>
    
    
  )
}

export default Fund;