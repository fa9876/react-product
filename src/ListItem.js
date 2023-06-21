import React from "react";

function ListItem(props) {
  return (
    <li
      onClick={() => {
        props.onChange(props.children);
      }}
      className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
        props.active ? "bg-slate-800 text-white" : "bg-white hover:bg-slate-100"
      }`}
    >
      {props.children}
    </li>
  );
}

export default ListItem;
