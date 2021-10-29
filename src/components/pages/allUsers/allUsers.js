import React, { useEffect, useState } from "react";
import axios from "axios";
import './allUsers.css'
import { Redirect } from "react-router";
import { useHistory } from 'react-router-dom'

export const AllUsers = ()=>{
    const history=useHistory();
    const [isUpdated,settIsUpdated]=useState(1)
    const [allUsers,setAllUsers]=useState([])

    // eslint-disable-next-line
    useEffect(async ()=>{
        const allUsers =  await axios.get("http://localhost:5000/user/")
        setAllUsers(allUsers.data.body)
    },[isUpdated])
    async function handleDelete(id){
        const deletedItem = await axios.delete("http://localhost:5000/user/deleteUser/"+id)
        if (deletedItem) settIsUpdated(isUpdated+1)
    }
    function onView(id){
        return(
            <Redirect to={"/user/getUser/"+id} />
        )
    }
    return(
        <div className="users-container">
            <h1 className="text-header">Home Page</h1>
                <div className="all-users border ">
            <div className="description-wrapper border-bottom bg-secondary text-light">
            <h1 style={{flex: "0 0 5%"}} className="description">#</h1>
            <h1 className="description">Name</h1>
            <h1 className="description">Username</h1>
            <h1 className="description">Email</h1>  
            <h1 className="description">Actions</h1>
            </div>
            {allUsers.map((user,index)=>{
                return(
                    <div className="user">
                        <h1 style={{flex: "0 0 5%"}} className="user-description">{index+1}</h1>
                        <h1 className="user-description">{user.name}</h1>
                        <h1 className="user-description">{user.username}</h1>
                        <h1 className="user-description">{user.email}</h1>
                        <div className="buttons">
                        <button type="button" class="btn btn-primary" onClick={()=>{history.push("/user/getUser/"+user._id)}} >View</button>
                        <button type="button" class="btn btn-outline-primary ">Edit</button>
                        <button type="button" class="btn btn-danger" onClick={()=>{handleDelete(user._id)}}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}