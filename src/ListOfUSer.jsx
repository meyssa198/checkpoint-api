import React from 'react'
import { Spinner } from 'react-bootstrap'
import User from './User'


const listOfUSer = ({users,loadUSers}) => {
    return (
        <div style={{display:"flex", flexWrap:"wrap",marginLeft:"160px" }}>
          {
              loadUSers? (<Spinner animation="border" />):
                  users.map((el)=><User  user={el} key={el.id} />)
              
          }  
        </div>
    )
}

export default listOfUSer
