// import axios from "axios";
import {useEffect, useState} from "react"
import React from 'react'
import ListOfUSer from './ListOfUSer'
import axios from "axios"
const UserList = () => {
    const [users,setUsers]=useState([])
    const [loadUSers, setLoadUsers]=useState(true)



    //error .map not a function
    // const getUsers =()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //         setUsers(res);
    //         setLoadUsers(false);
    //         console.log(`users :${res}`);
    //     })
    //     .catch((err)=>console.log(err))
    // }



    //fetch api
    useEffect(()=> {
        // getUsers()
        function fetchData() {// the function to fetch data from the api
            fetch("https://jsonplaceholder.typicode.com/users")
              .then(res => res.json())
              .then(res => setUsers(res))
              .catch(err => console.log(err));
              setLoadUsers(false);
          }
       
          fetchData();
        
    },[]) 
 



    //without error .map not a function
    //  useEffect(()=>{
      
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(setUsers(users))
    //     .catch(err => console.log(err));
    //     setLoadUsers(false);
    // },[])
    return (
        <div >
          <ListOfUSer  users={users} loadUSers={loadUSers} />
        </div>
    )
}

export default UserList
