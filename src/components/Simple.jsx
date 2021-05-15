import React from "react";
import Button from "./Button";

class Simple extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ["#F77ca0", "Red", "Yellow", "Salmon", "Green"],
      currColor: "#F77CA0"
    };
  }
  handleClick = () => {
    const random = Math.floor(Math.random() * this.state.colors.length);
    this.setState({ currColor: this.state.colors[random] });
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
export default Simple;
