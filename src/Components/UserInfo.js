import React from "react";

export default function UserInfo(props) {
  return (
    <div>
      {props.id}
      <span>
        {props.title} {props.fName} {props.lName}
      </span>
    </div>
  );
}
