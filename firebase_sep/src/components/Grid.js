import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./styles.scss";

import React, { Component } from "react";
import { Button } from "primereact/button";

export const Grid = () => {
  return (
    <div class="card">
      <div class="container_main">
        <div class="block flex-order-0 navbar">1</div>
        <div class="block flex-order-1 content">
          <div class="block left-side">4</div>
          <div class="block center-side">2</div>
          <div class="block right-side">5</div>
        </div>
        <div class="block flex-order-2 footer">3</div>
      </div>
    </div>
  );
};

export class ButtonDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loading: false,
    };
    this.onLoadingClick = this.onLodingClick.bind(this);
  }

  onLodingClick() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    return (
      <div className="p-col-12 p-md-3">
        <Button
          label="Submit"
          loading={this.state.loading}
          onClick={this.onLoadingClick}
        />
      </div>
    );
  }
}
