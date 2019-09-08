import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      valueError: "",
      token: "",
      redirect: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // signOut = () =>{
  //   localStorage.removeItem('token')
  // }
  logOut = () => {
    if (localStorage.removeItem("token")) {
      return <Redirect to="/login" />;
    }
  };
  signIn = i => {
    i.preventDefault();

    const dataInput = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      isLoading: true
    });

    axios
      .post(
        "https://penjualanapp-api.herokuapp.com/api/v1/auth/login",
        dataInput
      )
      .then(response => {
        localStorage.setItem("token", response.data.data.token);
        this.setState({
          token: response.data.data.token,
          isLoading: false,
          redirect: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  signOut = () => {
    // localStorage.removeItem("token");
    if (localStorage.removeItem("token")) {
      return <Redirect to="/login" />;
    }
  };
  render() {
    const { isLoading } = this.state;

    // const { username, password} = this.state
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" logOut={this.signOut} />;
    } else if (isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="div">
        <form className="form" onSubmit={this.signIn}>
          <div className="form-sign">
            {/* <label>Username</label> */}
            <input
              placeholder="Username"
              className="input"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-sign">
            {/* <label className="label">Password</label> */}
            <input
              placeholder="Password"
              className="input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="button" type="submit">
            Signin
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
