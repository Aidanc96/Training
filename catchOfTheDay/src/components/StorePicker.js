import React, { Component } from "react";
import { getFunName } from "../helpers";

export default class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = event => {
    //stop the form from submitting
    event.preventDefault();

    //get the text from the inout
    const storeName = this.myInput.value.value;

    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
