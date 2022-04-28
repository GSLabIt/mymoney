import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use, ClipPath, Rect } from "react-native-svg"

function DownArrow(props) {
    return (
        <Svg
            width={17}
            height={9}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.925.989c-.103-.21-.76-.825-.972-.915a.994.994 0 0 0-.719 0c-.13.054-.65.538-3.197 2.972L8 5.95 4.944 3.034C1.563-.201 1.8.003 1.375.003 1.062.006.922.083.512.475.088.88 0 1.028 0 1.348c0 .158.019.245.075.358.06.12.781.825 3.772 3.68 3.04 2.903 3.722 3.54 3.825 3.573.2.065.537.05.719-.027.13-.057.771-.658 3.803-3.558C16.244 1.5 16 1.76 16 1.348a.707.707 0 0 0-.075-.359Z"
                fill="#4E8AD0"
            />
        </Svg>
    )
}

export default DownArrow;