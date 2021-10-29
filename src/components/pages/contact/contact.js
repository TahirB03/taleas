import {React, useState} from 'react'
import './contact.css'
export const Contact = ()=>{
    const [user,setUser]=useState({
        email:"",
        name:"",
        username:""
    })
    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
    return(
        <div className="contact">
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" value={user.email} type="email" class="form-control email-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                <label style={{display:"block",marginTop:"30px"}} for="exampleInputEmail1">Name</label>
                <input name="name" value={user.name} type="text" class="form-control email-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={handleChange} />
            </div>
            <button style={{marginTop:"30px"}} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}