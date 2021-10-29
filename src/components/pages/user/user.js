import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './user.css'

export const User = (props)=>{
    const [user,setuser]=useState({})
    useEffect(async ()=>{
        const user = await axios.get('http://localhost:5000/user/getUser/'+props.match.params.id)
        setuser(user.data)
    },[])
    return (
        <div >
            <h1>Name : {user.name}</h1>
            <h1>Username : {user.username}</h1>
            <h1>E-mail : {user.email}</h1>
        </div>
    )
}