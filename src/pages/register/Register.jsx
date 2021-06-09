import React from "react";
import toast, { Toaster } from "react-hot-toast";
import "./styles.scss";
import { Link } from "react-router-dom";
export default class Register extends React.Component {
  state = {
    name: "",
    surname: "",
    password: "",
    email: "",
    role: "",
  };
  notify = () => toast("Here is your toast.");
  logUser = async () => {
    try {
      let response = await fetch("http://localhost:5000/medium/register", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const res = await response.json();
        console.log(res)
        toast.success("Welcome " + this.state.name + "to MEDIUM ;)");

        this.setState({
          password: "",
          name: "",
        });
        setTimeout(() => {
        }, 4000);
      } else {
        toast.error("Something went wrong 🤯 👾.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="login">
        <div className="registerForm">
          <div className="titleLogin">
            <div className="textWrap">
              <h2>Register </h2>
              <p>Welcome to MEDIUM, where your stories count</p>
            </div>
          </div>
          <label className="inputLabel">name</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                name: e.target.value,
              })
            }
            value={this.state.name}
            type="text"
          ></input>
          <label className="inputLabel">surname</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                surname: e.target.value,
              })
            }
            value={this.state.surname}
            type="text"
          ></input>
          <label className="inputLabel">Email</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                email: e.target.value,
              })
            }
            value={this.state.email}
            type="text"
          ></input>
          <label className="inputLabel">Password</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                password: e.target.value,
              })
            }
            value={this.state.password}
            type="password"
          ></input>
          <label className="inputLabel">role</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                role: e.target.value,
              })
            }
            value={this.state.role}
            type="text"
          ></input>

          <button className="loginButton" onClick={this.logUser}>
            Register
          </button>
          <div className="linkWrap">
            <Link className="link" to="/login">
              Already have an account?
            </Link>
          </div>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            // Define default options
            className: "",
            style: {
              margin: "40px",
              background: "#363636",
              color: "#fff",
              zIndex: 1,
            },
            duration: 5000,
            // Default options for specific types
          }}
        />

        <img
          draggable="false"
          className="logoIn"
          src="https://user-images.githubusercontent.com/36799589/96227773-3acc6080-0fb2-11eb-837f-f5026d472969.jpg"
          alt=""
        />
      </div>
    );
  }
}