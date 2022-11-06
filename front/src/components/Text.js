import React from "react";

const Text = (props) => {
  return (
    <div
      width={props.w}
      height={props.l}
      style={{
        position: "absolute",
        left: props.left,
        top: props.top,
      }}
      src={props.src}>{props.text}</div>
  );
};

export default Text;
