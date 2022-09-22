import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./styles.scss";

import React, { Component } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";

export const Grid = () => {
  return (
    <div class="card">
      <div class="container_main">
        <div class="block flex-order-0 navbar">1</div>
        <div class="block flex-order-1 content-container">
          <div class="block left-side">4</div>
          <div class="block center-side">
            <div class="item center-side">
              <InputGroup />
            </div>
          </div>
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

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
    };
  }

  render() {
    const header = <h6>Pick a password</h6>;
    const footer = (
      <React.Fragment>
        <Divider />
        <p className="mt-2">Suggestions</p>
        <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
          <li>At least one lowercase</li>
          <li>At least one uppercase</li>
          <li>At least one numeric</li>
          <li>Minimum 8 characters</li>
        </ul>
      </React.Fragment>
    );
    return (
      <div className="card">
        <h5>Login</h5>
        <div className="grid p-fluid">
          <div className="col-12">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Username" />
            </div>
          </div>

          <div className="col-12 ">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <Password
                value={this.state.value4}
                onChange={(e) => this.setState({ value4: e.target.value })}
                header={header}
                footer={footer}
              />
            </div>
          </div>

          {/* <div className="col-12 ">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">www</span>
              <InputText placeholder="Website" />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
