import React from "react";

class App extends React.Component {
  state = {
    selectData: "",
  };

  handleDateClick = (newSelectDate) => {
    const newdata = this.state.selectData;
    this.setState({ selectData: newdata + newSelectDate });
  };

  render() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <div className="flex max-w-3xl mx-auto w-full gap-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Apple Products</h2>
            <ul className="mt-4 flex flex-col gap-y-3">
              <Block onDataUpdate={this.handleDateClick} title="iPhone" />
              <Block onDataUpdate={this.handleDateClick} title="ipad" />
              <Block onDataUpdate={this.handleDateClick} title="Mac" />
              <li className="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer bg-slate-800 transition">
                Mac
              </li>
              <li className="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer hover:bg-slate-100 transition">
                Apple TV
              </li>
              <li className="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer hover:bg-slate-100 transition">
                HomePod
              </li>
            </ul>
            <p className="mt-3 text-slate-400 text-sm">2 item(s) selected</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-slate-400">
              Selected Products
            </h2>
            <p className="mt-4 text-slate-800 text-lg">
              {this.state.selectData}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class Block extends React.Component {
  handleClick = () => {
    const newData = this.props.title;
    this.props.onDataUpdate(newData);
  };
  render() {
    return (
      <li
        onClick={this.handleDateClick}
        className="bg-white px-6 py-4 rounded-lg shadow hover:cursor-pointer bg-slate-800 transition"
      >
        {this.props.title}
      </li>
    );
  }
}

export default App;
