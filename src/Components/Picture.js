import React from "react";

export default function Picture(props) {
  return (
    <div>
      <img src={props.picUrl} />
    </div>
  );
}
