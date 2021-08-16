// import axios from "axios";
import {useEffect, useState} from "react"
import React from 'react'
import ListOfUSer from './ListOfUSer'
import axios from "axios"
const UserList = () => {
    const [users,setUsers]=useState([])
    const [loadUSers, setLoadUsers]=useState(true)



    const getUsers =()=>{
                axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res)=>{
                    setUsers(res.data);
                    setLoadUsers(false);
                    console.log(`users :${res}`);
                })
                .catch((err)=>console.log(err));
            
        }

    useEffect(getUsers
    ,[]) 


    return (
        <div >
          <ListOfUSer  users={users} loadUSers={loadUSers} />
        </div>
    )
}

export default UserList
