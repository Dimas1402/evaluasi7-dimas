import React from "react";
import { Link } from "react-router-dom";
import Api from "../Component/Api";
import "./Button.css";
import "./Home.css";
const Home = ({ signOut }) => {
  signOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <div className="home">
        <Link to="/">
          <button className="buttons" type="button" onClick={signOut}>
            {" "}
            <a>kembali</a>
          </button>
        </Link>
      </div>
      <Api />
    </div>
  );
};

export default Home;
