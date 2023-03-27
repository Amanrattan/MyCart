import React, { Component } from "react";
class Additem extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}
      >
        {/* add closingtag/
                class to className
                for to htmlFor */}
        <div className="mb-3 col-6 ">
          <label htmlFor="inputName" className="form-label">
            Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="Name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice:e.currentTarget.value});
            }}
            value={this.state.productPrice}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    );
  }
}

export default Additem;
