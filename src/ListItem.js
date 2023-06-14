import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <li
        onClick={() => {
          this.props.onChange(this.props.children);
        }}
        className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
          this.props.active
            ? "bg-slate-800 text-white"
            : "bg-white hover:bg-slate-100"
        }`}
      >
        {this.props.children}
      </li>
    );
  }
}

export default ListItem;
