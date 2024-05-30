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
    

      <nav className="flex justify-between h-26 items-center bg-green-400 text-black px-24 py-3">
      <Link href="/">
        <h1 className="text-4xl font-bold bg-transparent">Alquila tu cancha©</h1>
      </Link>
      <ul className="flex gap-x-2 text-2xl">


        {user ? (
  <div>
      
    {
    user.picture
     ? (
      <div>
          <div className="mt-1">
              <h2>Bienvenido {user.name}!</h2>
          </div>
          <div className="flex">
            <Avatar className="ml-10">
              <AvatarImage src={user.picture || ""} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          <div className="ml-10 bg-slate-200 rounded-lg p-2 ">
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

  





