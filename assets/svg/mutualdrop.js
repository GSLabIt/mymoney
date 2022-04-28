import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use, ClipPath, Rect } from "react-native-svg"

function Mutualdrop(props) {
    return (
        <Svg
            width={14}
            height={14}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M0 3.117v.793h14V2.324H0v.793ZM2.324 7v.793h9.352V6.207H2.324V7ZM5.441 10.883v.793H8.56V10.09H5.44v.793Z"
                fill="#4E8AD0"
            />
        </Svg>
    )
}

export default Mutualdrop;