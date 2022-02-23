import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Cross(props) {
  return (
    <Svg
    width={13}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.721 12.3c.372.4.372 1 0 1.4-.185.2-.371.3-.65.3-.278 0-.464-.1-.65-.3L6.5 8.4l-4.921 5.3c-.186.2-.372.3-.65.3-.279 0-.465-.1-.65-.3-.372-.4-.372-1 0-1.4L5.2 7 .279 1.7c-.372-.4-.372-1 0-1.4.371-.4.928-.4 1.3 0L6.5 5.6 11.421.3c.372-.4.929-.4 1.3 0 .372.4.372 1 0 1.4L7.8 7l4.921 5.3Z"
      fill="#000"
    />
  </Svg>
    
  )
}

export default Cross;