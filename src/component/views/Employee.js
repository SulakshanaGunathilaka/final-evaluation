import React from "react";
// import Navbar from "../Navbar";
//  import Footer from "../Footer";

export default function Employee() {
 return (
    <div>
<navbar>
    <div class="flex justify-between px-6 bg-blue-900 items-center py-4">
      <div class="flex space-x-4 items-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <h1 class="text-white font-bold text-xl tracking-wide cursor-pointer">Tubemixza</h1>
      </div>
      <h1 class="text-white font-bold text-xl align-middle">Employee Dashboard</h1>
      {/* <ul class="flex space-x-6">
        <li class="text-white text-lg font-semibold tracking-normal cursor-pointer">Home</li>
        <li class="text-white text-lg font-semibold tracking-normal cursor-pointer">About</li>
        <li class="text-white text-lg font-semibold tracking-normal cursor-pointer">Contact</li>
      </ul> */}
    </div>
  </navbar>
  <navbar>
    <div class="absolute top-0 w-60 h-full bg-slate-300 p-6">
      <div class="flex space-x-6 mb-6">
        {/* <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span> */}
        {/* <h1>Dashboard</h1> */}
      </div>
      <ul class="flex flex-col space-y-6 mt-14 border-t py-6">
       <a href="/profile"> <li class="hover:bg-red-300 transition duration-500">Profile</li></a>
       <a href="/"><li class="hover:bg-red-300 transition duration-500">Logout</li></a>
      </ul>
    </div>
  </navbar>
  </div>
 )
}
