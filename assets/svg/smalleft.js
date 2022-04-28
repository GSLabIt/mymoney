import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use, ClipPath, Rect } from "react-native-svg"

function Smalleft(props) {
    return (
        <Svg
            width={8}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.286 1.707a1.017 1.017 0 0 1 0-1.414.96.96 0 0 1 1.38 0l5.857 6c.38.39.38 1.024 0 1.414l-5.857 6a.96.96 0 0 1-1.38 0 1.017 1.017 0 0 1 0-1.414L5.452 7 .286 1.707Z"
                fill="#D5D5D5"
            />
        </Svg>
    )
}

export default Smalleft;