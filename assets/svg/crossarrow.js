import * as React from 'react';
import Svg, { Defs, Path, G, Mask, Use, ClipPath, Rect } from 'react-native-svg';

function CrossArrow(props) {
    return (
        <Svg
            width={13}
            height={13}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.75 1A.75.75 0 0 0 12 .25H5.25a.75.75 0 0 0 0 1.5h6v6a.75.75 0 0 0 1.5 0V1ZM1.53 12.53l11-11L11.47.47l-11 11 1.06 1.06Z"
                fill="#7C828A"
            />
        </Svg>
    );
}

export default CrossArrow;
