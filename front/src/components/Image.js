import React from 'react';

const Image = (props) => {
  return (
    <img
        src={props.src}
        width={props.w}
        height = {props.l}
        style = {{
        position: "absolute",
        left: props.left,
        down: props.top }}/>
  )
}

export default Image