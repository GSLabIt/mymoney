import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use, ClipPath, Rect} from 'react-native-svg';

function Signout(props) {
  return (
    <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5 24.5H5.833A2.333 2.333 0 0 1 3.5 22.167V5.833A2.333 2.333 0 0 1 5.833 3.5H10.5M18.667 19.833 24.5 14l-5.833-5.833M24.5 14h-14"
      stroke="#219653"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  );
}

export default Signout;
