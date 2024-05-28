"use client";

import Link from "next/link";
import React from "react";

import { useUser } from '@auth0/nextjs-auth0/client';
import { Image } from "lucide-react";
import { Avatar,
  AvatarFallback,
  AvatarImage, } from "../ui/avatar"; 


export default function Navbar() {
  
  const { user, error, isLoading } = useUser();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;


  return (
    

<<<<<<< HEAD
      <nav className="flex justify-between h-24 items-center bg-green-400 text-black px-24 py-3">
=======
      <nav className="flex justify-between h-20 items-center bg-green-400 text-black px-24 py-3">
>>>>>>> parent of cede6f9 (main)
      <Link href="/">
        <h1 className="text-4xl font-bold bg-transparent">Alquila tu cancha©</h1>
      </Link>
      <ul className="flex gap-x-2 text-2xl">


        {user ? (
  <div>
      
    {
    user.picture
     ? (
<<<<<<< HEAD
      <div>
        <div className="mt-5">
          <h2>{user.name}</h2>
=======
      <div className="flex">
        <div className="mt-5">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
>>>>>>> parent of cede6f9 (main)
        </div>
        <div className="flex">
        <Avatar>
        <AvatarImage src={user.picture || ""} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
     </Avatar>
        <div className="m-2 bg-slate-200 rounded-lg p-2 ">
          <Link href="api/auth/logout">Cerrar sesión</Link>
        </div>
        </div>
  </div>
) : (
  <p>No hay imagen de usuario disponible</p>
)}
    
  </div>
) : (
  <li className="mr-5 bg-white rounded-2xl p-2"> 
  <Link href="/api/auth/login">
    Iniciar sesión
  </Link>
  </li>
)}   
      </ul>
    </nav>


);

}

  





