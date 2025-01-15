import { useState } from "react";
import "./registerhome.css";
import FormType from "./FormType";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import axios from 'axios';  /*Used to communicate with thedpring boot data*/




const Registration = () => {
  const [information, setinformation] = useState({ registrationname: "",registrationpassword: ""

  });

  const [registrationname, setregistrationname] = useState("");
  const [registrationpassword, setregistrationpassword] = useState("");

  async function save(event)
  {
      event.preventDefault();
  try
      {
       await axios.post("http://localhost:8085/api/v1/register/save",  /**Data from the Database of Spring Boot and SQL workbench */
      {
      
        name: registrationname,
        password : registrationpassword,
      
      });
        setregistrationname("");
        setregistrationpassword("");
      
      
      }
  catch(err)
      {
      }
 }

  const inputfield = [
    {
      inputname: "username",
      inputtype: "text", 
      label: "Username",
      wrongmessage: "The Username should be at 4-12 characters long", 
      pattern:"^[A-Za-z0-9]{4,12}$",    
    },
      
    {
      
        inputname: "password",
        inputtype: "password",
        wrongmessage: "Password should be 5-10 characters",
      label: "Password",
      
    }
  ];

  const submitregister = (e) => {
    e.default();
  };

  const onChange = (e) => {
    setinformation({ information, [e.target.data]: e.target.dataregister });
  };

  return (
    <Layout>
    <div className="Content">

      <form 
      onSubmit={submitregister}>
        <h1>User Registration</h1>
        {inputfield.map((add) => (
          <FormType
            key={add.id}{...add}
            dataregister={information[add.data]}
            onChange={onChange}
          />
        ))}
        
        <Link to="/idea">
            <button>Register</button>

          </Link>
      </form>
    </div>
    </Layout>
  );
};

export default Registration;