import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const [showModal, setShowModal] = React.useState(false);
  const [singleuser, setSingleuser] = useState('')


  const userobj = localStorage.getItem('user1');
  const user = JSON.parse(userobj);
  console.log("user" + userobj)

const ViewUser = (userId) => {
    //  const UserID = props.userID
    console.log(userId)
    axios({
      method: "get",
      url: "http://localhost:8080/users/1" ,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Authorization": `Bearer ` + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjY21zLmNvbSIsImV4cCI6MTY2NjgwNjkzNCwiaWF0IjoxNjY2NzcwOTM0fQ.SmSa1XeSFKnZeNcXDmJ4spCD973juoCcqHNTItxM-HY"
      }, data: null,
   
      mode: "cors",
    }).then((res) => {
      console.log("response", res)
      var users = res.data.body;
      console.log("lkhsfjhskf", users)
      setSingleuser(users)
      localStorage.setItem("Singleuser", JSON.stringify(users))
    })}
    useEffect(()=>{
        ViewUser()
      },[ ])



  return (


    <div>
      <div className="p-2">
        <div className="p-14 bg-gray-600 shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

              <div>
              </div>
            </div>
            <div className="relative">

   

              <img alt="..." src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" />

            </div>
          </div>
        </div>

        <div className="mt-16 text-center border-b pb-12 ">
          <h1 className="text-4xl font-medium text-gray-700">{singleuser.firstName}<span className="text-4xl ml-2 font-medium text-gray-700">{singleuser.lastName}</span></h1>
          
          <p className='font-bold text-gray-600 mt-3'>User Email :  <span class=" text-blue-700"> {singleuser.email}</span></p>
          {/* <p className="font-bold text-gray-600 mt-1">Gender  :  <span class=" text-blue-700">{user.gender}</span>  </p> */}

          <p className="font-bold text-gray-600 mt-1">User Status    :  <span className=" text-blue-700">{singleuser.userStatus}</span>  </p>
          

        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center">
  
      </div>
      

     
    </div>


  )
}
