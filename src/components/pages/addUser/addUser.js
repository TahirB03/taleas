import axios from "axios";
import React,{useState} from "react";
import { useHistory } from "react-router";
import "./addUser.css";

export const AddUser = () => {
  const history = useHistory();

    const [user,setUser]=useState({
        email:"",
        name:"",
        username:""
    })

    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    async function submitUser(e){
      e.preventDefault()
      const post = await axios.post("http://localhost:5000/user/addUser",user)
      if (post) {history.push("/")}
    }

  return (
    <div className="add-user">
      <form class="form-inline" onSubmit={submitUser}>
        <label class="sr-only" for="inlineFormInputName2">
          Name
        </label>
        <input
          value={user.name}
          name="name"
          type="text"
          class="form-control input"
          id="inlineFormInputName2"
          placeholder="Name"
          onChange={handleChange}
        />
        <div class="valid-feedback">
      Looks good!
    </div>
        <label class="sr-only" for="inlineFormInputName2">
          Email
        </label>
        <input
          value={user.email}
          name="email"
          type="email"
          class="form-control input"
          id="inlineFormInputName2"
          placeholder="Email"
          onChange={handleChange}
        />
        <label class="sr-only" for="inlineFormInputGroupUsername2">
          Username
        </label>
          <input
            value={user.username}
            name="username"
            type="text"
            class="form-control input"
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
            onChange={handleChange}
          />
        <button type="submit" class="btn btn-primary input" >
          Submit
        </button>
      </form>
    </div>
  );
};
