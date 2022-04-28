import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use, ClipPath, Rect } from "react-native-svg"

function Equal(props) {
    return (
        <Svg
            width={18}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#B5BBC9" d="M0 0h18v3H0zM0 7h18v3H0z" />
        </Svg>
    )
}

export default Equal;