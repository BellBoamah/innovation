import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import idea from "../images/creative.jpg";
import "../styles/HomeEdit.css";
import Fot from "../components/Layout/Fot";
import Sign from "../components/Register/Sign";



const Home = () => {
  return (
    <Layout>
      <div className="homepage" style={{ backgroundImage: `url(${idea})` }}>
        <div className="Header">
          <h1>GreenFuture</h1>
          <p>Innovation Management System</p>
          <Link to="register">
            <button>Register</button>
            <br></br>
          </Link>

          

          <Link to ="sign">
          <button>Login</button>
          </Link>
          
        </div>
      </div>
      <Fot/>
    </Layout>
    
  );
};

export default Home;