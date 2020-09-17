import React from 'react';



export default function UserZ (props){

    const ourUser = props.ourUser
   console.log("OUR USER",ourUser)
   return(
    <div className="hi">
    <h1>{ourUser.name}</h1>
    <h2> {ourUser.email} </h2>
    </div>
   
    )
}