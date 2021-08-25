import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{ overflow: "scroll", border: "solid 1px black", height: "450px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
