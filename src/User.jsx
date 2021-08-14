import React from 'react'
import { Card } from 'react-bootstrap'



const User = ({user}) => {
    return (
        <div style={{ marginLeft:"30px", marginTop:"50px", color:'white'}} >
            <Card style={{ width: '18rem', backgroundColor:"#6492e8", borderColor:"#5a73a3" }}>
                <Card.Img variant="top" 
                src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                    <p>Email : {user.email}</p>
                    <p>City : {user.address.city} </p>
                    <p>Phone : {user.phone} </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default User
