import React from "react";
import Button from "./Button";

class Hex extends React.Component {
  constructor() {
    super();
    this.state = {
      currColor: "#F77CA0"
    };
  }
  handleClick = () => {
    const item = Math.random().toString(16).slice(2, 8).toUpperCase();
    const random = "#" + item;
    this.setState({ currColor: random });
  };
  render() {
    return (
      <div
        className="bcColor"
        style={{ backgroundColor: this.state.currColor }}
      >
        <Button func={this.handleClick} textCh={this.state.currColor} />
      </div>
    );
  }
}
export default Hex;
