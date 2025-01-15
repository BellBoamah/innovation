import { useState } from "react";
import "./registerhome.css";
import FormType from "./FormType";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import axios from 'axios';  /*Used to communicate with thedpring boot data*/



const Idea = () => {

    const [information, setinformation] = useState({Ideaname: "",

    });
  
    const [Ideaname, setIdeaname] = useState("");
  
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8085/api/v1/Idea/save",  /**Data from the Database of Spring Boot and SQL workbench */
        {
        
          name: Ideaname,
        
        });
          setIdeaname("");
        
        
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
        inputname: "department",
        label: "Department"
        },
   
        {
            inputname: "description",
            label:"Description of Idea"
        }
  ];

  const submitIdea = (e) => {
    e.default();
  };

  const onChange = (e) => {
    setinformation({ information, [e.target.data]: e.target.dataIdea });
  };

  return (
    <Layout>
    <div className="Content">

      <form 
      onSubmit={submitIdea}>
        <h1>Idea Submission Form</h1>
        {inputfield.map((add) => (
          <FormType
            key={add.id}{...add}
            dataIdea={information[add.data]}
            onChange={onChange}
          />
        ))}
        
        <Link to="/">
            <button>Submit Idea</button>

          </Link>
      </form>
    </div>
    </Layout>
  );
};
export default Idea;