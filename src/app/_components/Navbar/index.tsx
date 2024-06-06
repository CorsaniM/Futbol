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


  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>{error.message}</div>;


  return (
    

      <nav className="flex justify-between h-22 items-center
      bg-gradient-to-b from-green-400 to-95%
      text-black px-18 py-5">
      <Link href="/">
        <h1 className="text-4xl font-bold ml-5 bg-transparent">Alquila tu cancha©</h1>
      </Link>
      <ul className="flex gap-x-4 text-2x4">


        {user ? (
  <div>
      
    {
    user.picture
     ? (
      <div>
        <div className="flex m-5 ml-3">
          <h2>{user.name}</h2>
        </div>
        <div className="flex mt-2">
        <Link href={"./dashboard/perfil"}>
          <Avatar>
          <AvatarImage src={user.picture || ""} alt="@shadcn" />
          </Avatar>
        </Link>
        <div className="m-2 bg-slate-200 rounded-lg p-1 ">
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

  





