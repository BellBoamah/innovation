import { useState } from "react";
import "./registerhome.css";
import FormType from "./FormType";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import axios from 'axios';  /*Used to communicate with thedpring boot data*/




const Sign = () => {
  const [information, setinformation] = useState({ loginname: "",loginpassword: ""

  });

  const [loginname, setloginname] = useState("");
  const [loginpassword, setloginpassword] = useState("");

  async function save(event)
  {
      event.preventDefault();
  try
      {
       await axios.post("http://localhost:8085/api/v1/login/save",  /**Data from the Database of Spring Boot and SQL workbench */
      {
      
        name: loginname,
        password : loginpassword,
      
      });
        setloginname("");
        setloginpassword("");
      
      
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

  const submitlogin = (e) => {
    e.default();
  };

  const onChange = (e) => {
    setinformation({ information, [e.target.data]: e.target.datalogin });
  };

  return (
    <Layout>
    <div className="Content">

      <form 
      onSubmit={submitlogin}>
        <h1>Sign In</h1>
        {inputfield.map((add) => (
          <FormType
            key={add.id}{...add}
            datalogin={information[add.data]}
            onChange={onChange}
          />
        ))}
        
        <Link to="/">
            <button>Login</button>
          </Link>
      </form>
    </div>
    </Layout>
  );
};

export default Sign;
