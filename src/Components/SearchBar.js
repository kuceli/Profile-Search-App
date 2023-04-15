import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Search by name..."
        value={props.text}
        onChange={props.eventTitle}
      />
    </div>
  );
}
