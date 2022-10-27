

import React from 'react'
// import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { useState } from "react";
import {FcGoogle} from "react-icons/fc"
// import {FaFacebookSquare} from "react-icons/fa"
// import LoginImg from "../assets/login1.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';




import loginImg from '../assets/login.jpg'

export default function Login() {
    const [userName, setName] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }

    });
    // const notify = () => toast(' Login Successful ');

    const navigate = useNavigate();

    const authhandle = (e) => {
      console.log("login data", userName)
      const url = "http://localhost:8080/authenticate"
      axios.post(url, {
        username: userName,
        password: password
      }).then((res) => {
        console.log("response", res.data.body.jwt)
        console.log("user", res.data.body.user.uId)
        // toast('Login Successfull' + res.data.body.user.firstName);

  
        localStorage.setItem('jwt', res.data.body.jwt)
        localStorage.setItem('user', JSON.stringify(res.data.body.user))
        console.log(res.data.body.user)
        console.log(localStorage.getItem('user'))
  
        if (res.data.body.user.userName == 'admin@ccms.com') {
          console.log("lastName: Admin")
          console.log(res.data.body)
          console.log(res.data.body.user.firstName)
          // toast('Welcome !!!  ' + res.data.body.user.firstName)
          navigate("/home")
          // toast('Login Successfull' + res.data.body.user.firstName);
        } else if (res.data.body.user.type == 'Employee') {
        //   console.log("type: customer")
        //  toast('Welcome !!!  ' + res.data.body.user.fName)
         navigate("/employee")
        } else {
          // console.log("type: invalid")
          navigate("/home")
          // toast('Login Successfull' + res.data.body.user.firstName);
        }
  
      }).catch((err => {
        // toast('Invalid ! Please Check Your Email or Password ' + err.name);
      }));
    }
  
  


  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){authhandle()}else(alert('please fill the fields'))
                })}>
            <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type="text"  {...register("username", { required: 'This is required', pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/  })}  onChange={(e) => setName(e.target.value)} />
                <p className='text-red-400'> {errors.username?.message}</p>
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" {...register("password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })}  onChange={(e) => setPassword(e.target.value)} />
                <p className='text-red-400'> {errors.password?.message}</p>
            </div>
             <Link to={"/home"}> 
            <button type='submit' className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            </Link>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
    </div>
    </div>
  )
}