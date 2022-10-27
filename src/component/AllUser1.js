import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



export default function Alluser1() {
  var jwt = localStorage.getItem("jwt")
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [updateuser, setUpdateuser] = useState('')
  const userobj = localStorage.getItem('user');
  const user = JSON.parse(userobj);
  console.log("user" + user.userId)
  const [singleuser, setSingleuser] = useState('')

  const[EditUser,setEditUser]=useState('');

  const { register, handleSubmit, formState: { errors }, } = useForm({});

  const navigate = useNavigate();


    

    const GetAlluser = (e) => {
        console.log("jwt", jwt)

        axios({
          method: "get",
          url: "http://localhost:8080/users/",
          headers: {
            "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
             "Authorization": `Bearer ` + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjY21zLmNvbSIsImV4cCI6MTY2NjgwNjkzNCwiaWF0IjoxNjY2NzcwOTM0fQ.SmSa1XeSFKnZeNcXDmJ4spCD973juoCcqHNTItxM-HY"
          }, data: null,
          
          mode: "cors",


        })
        // axios 
        // .get("localhost:8080/users/")
        .then((res) => {
          console.log("response 101", res.data.body)

          var users = res.data.body;
          localStorage.setItem("AllusersList", JSON.stringify(users))
      
        }).catch((err => { console.log("error ; " + err) }))
         }


        const usersObj = localStorage.getItem('AllusersList')
        const AllusersList = JSON.parse(usersObj);
        console.log(AllusersList)
      
        useEffect(()=>{
          GetAlluser()
        },[GetAlluser()])

        const DeleteUser = (userId) => {
            // const UserID = props.userID
            console.log(userId)
            axios({
              method: "delete",
              url: "http://localhost:8080/users/" + userId,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Headers":
                  "Origin, X-Requested-With, Content-Type, Accept",
                Authorization: `Bearer ` + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjY21zLmNvbSIsImV4cCI6MTY2NjgwNjkzNCwiaWF0IjoxNjY2NzcwOTM0fQ.SmSa1XeSFKnZeNcXDmJ4spCD973juoCcqHNTItxM-HY",
              }, data: null,
           
              mode: "cors",
            }).then((res) => {
              console.log("response", res)
              // var users = res.data;
              // localStorage.setItem("UserList", JSON.stringify(users))
            })
          }
          const handleClick = (userID) => {
            setShowModal(true)
            DeleteUser(userID)
          }

          useEffect(()=>{
            DeleteUser()
          },[ DeleteUser()])


          const onSubmit = (data) => {
            let submitValues = {
              firstName:data.firstName,
              lastName: data.lastName,
              otherNames: data.otherNames,
              email:data.email,
              
        
            };
            
        
            // const UserID = props.userID
            console.log(user.userId)
            axios({
              method: "put",
              url: "http://localhost:8080/users/" + EditUser.userId,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Authorization": `Bearer ` + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBjY21zLmNvbSIsImV4cCI6MTY2NjgwNjkzNCwiaWF0IjoxNjY2NzcwOTM0fQ.SmSa1XeSFKnZeNcXDmJ4spCD973juoCcqHNTItxM-HY"
              }, data: submitValues,
        
              mode: "cors",
            }).then((res) => {
              console.log("response", res)
              var users = res.data.body;
              console.log("lkhsfjhskf", users)
              setUpdateuser(users)
              localStorage.setItem("Updateuser", JSON.stringify(users))
              toast.success('successful', {autoClose:3000});
            })
          }

          const ViewUser = (userId) => {
            //  const UserID = props.userID
            console.log(userId)
            axios({
              method: "get",
              url: "http://localhost:8080/users/"+userId ,
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

            const handleClickView = (userId) => {
              ViewUser(userId)
              setShowModal2(true)
            }

            useEffect(()=>{
                ViewUser()
              },[ ])
        
        
          


        
      

    return (
        <>
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                       Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        First Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Last Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        User Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        View
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {AllusersList.map((blog) => (
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {blog.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {blog.firstName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {blog.lastName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {blog.userStatus}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        ><button type="button" onClick={() =>{setEditUser(blog); setShowModal1(true)}}>
                                            Edit
                                            </button>
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                          <button type="button" onClick={() => handleClickView(blog.userId)}>
                                            View
                                            </button>
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                             <button type="button" onClick={() => handleClick(blog.userId)}>
                                            Delete
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                                       ))} 

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800">
                      Delete account ?
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Are your sure you want to delete the account? The activities and any data will be deleted. You won't be able to retrieve 
                     any of the data you've added or reactivate your account. Click "Delete"if ypu still want your account deleted.
                    </p>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() =>
                          setShowModal(false)
                        }
                      >
                        Delete
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() =>
                          setShowModal(false)
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

{showModal1? (
        <>
          <div
            className="justify-center items-center  sm:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-32 mx-auto  max-w-screen ">

              <form className="border-0 rounded-lg shadow-lg relative max-w-[700px] px-3  w-full bg-white outline-none focus:outline-none " onSubmit={handleSubmit(onSubmit)}
              >

                <div className="flex  flex-col justify-between p-5 mb-3 ">
                  <h3 className="text-3xl font-semibold">

                  </h3>
                  <div className='flex space-x-3 mr-4 mt-10'  >
                 
                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300"> First Name</label>
                      <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="First Name"  {...register("firstName", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.firstName?.message}</p>
                    </div>

                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300">  Last Name</label>
                      <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Last Name"{...register("lastName", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.lastName?.message}</p>
                    </div>
                   
                  </div>


                  <div className='flex space-x-3 mr-4'  >

                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300"> Email</label>
                      <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" {...register("email", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.email?.message}</p>
                    </div>

                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300"> Other Names</label>
                      <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Other Names"{...register("otherNames", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.otherNames?.message}</p>
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-2 mt-7">


                   
                  
                    
                    
                   

                  </div>
                </div>

                <div className="relative p-6 flex-auto">


                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gray-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={notify}
                  >
                    Save Changes
                  </button>
                  <ToastContainer />
                </div>

              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showModal2? (
        <>
          <div
            className="justify-center items-center  sm:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-32 mx-auto  max-w-screen ">

              <form className="border-0 rounded-lg shadow-lg relative max-w-[700px] px-3  w-full bg-white outline-none focus:outline-none " onSubmit={handleSubmit(onSubmit)}
              >

                <div className="flex  flex-col justify-between p-5 mb-3 ">
                  <h3 className="text-3xl font-semibold">

                  </h3>
                  <div className='flex space-x-3 mr-4 mt-10'  >
                 
                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300"> {singleuser.firstName}</label>
                      {/* <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="First Name"  {...register("firstName", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.firstName?.message}</p> */}
                    </div>

                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300"> {singleuser.lastName}</label>
                      {/* <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Last Name"{...register("lastName", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.lastName?.message}</p> */}
                    </div>
                   
                  </div>


                  <div className='flex space-x-3 mr-4'  >

                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300"> {singleuser.email}</label>
                      {/* <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" {...register("email", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.email?.message}</p> */}
                    </div>

                    <div className=' w-1/2 '>
                      <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300"> {singleuser.otherNames}</label>
                      {/* <input type="text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Other Names"{...register("otherNames", { required: "This is required" })} />
                      <p className="text-red-400 text-xs"> {errors.otherNames?.message}</p> */}
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-2 mt-7">


                   
                  
                    
                    
                   

                  </div>
                </div>

                <div className="relative p-6 flex-auto">


                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal2(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gray-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={notify}
                  >
                    Save Changes
                  </button>
                  <ToastContainer />
                </div>

              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


        </>
    );
 }