import { Component } from "react";

class TitleComponent extends Component {
  name = "Title Component";
  constructor(props) {
    super(props);

    this.state = {
      name: this.name,
    };
  }
  componentDidMount() {
    console.log("on mount");
  }

  componentDidUpdate() {
    console.log("on update");
  }

  componentWillUnmount() {
    console.log("on unmount");
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            if (this.state.name === this.name) {
              this.setState({ name: "Title Component Changed" });
            } else {
              this.setState({ name: this.name });
            }
          }}
          className="btn"
        >
          On change Class Component title
        </button>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}

export default TitleComponent;
