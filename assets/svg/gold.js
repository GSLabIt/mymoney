import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Gold(props) {
  return (
    <Svg
    width={28}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#219653">
      <Path d="M23.453 16.82h-3.841l-2.292-6.112h-8.7L6.33 16.82H2.483L0 24.46h26l-2.547-7.64ZM9.68 12.236h6.581l1.719 4.584H7.96l1.72-4.584ZM2.103 22.932l1.49-4.584h6.556l1.719 4.584H2.103ZM12.97 21.52l-1.19-3.172h2.38l-1.19 3.172Zm2.822-3.172h6.56l1.528 4.584h-9.807l1.719-4.584ZM12.206 1.54h1.528v4.584h-1.528V1.54ZM4.337 4.901l1.403-.606 1.82 4.208-1.403.607L4.337 4.9ZM18.372 8.573l1.687-4.263 1.42.562-1.686 4.263-1.421-.562Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}

export default Gold;