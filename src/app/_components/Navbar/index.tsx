"use client";

import Link from "next/link";
import React from "react";

import { useUser } from '@auth0/nextjs-auth0/client';
import { Image } from "lucide-react";
import { Avatar,
  AvatarFallback,
  AvatarImage, } from "../ui/avatar"; 
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu"

export default function Navbar() {
  
  const { user, error, isLoading } = useUser();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;


  return (
    

      <nav className="flex justify-between h-24 items-center bg-green-400 text-black px-24 py-3">
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
        <div className="mt-5">
          <h2>{user.name}</h2>
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
        <div className="flex mt-4 ml-10 pl-10">
          <div className="p-2 h-12 w-24 bg-white rounded-lg">
          <DropdownMenu>
            <DropdownMenuTrigger>Cuenta</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel><Link href="/">Perfil</Link></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href="/">Equipos</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/">Mensajes</Link></DropdownMenuItem>
              <DropdownMenuItem ><Link href="api/auth/logout">Cerrar sesión</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            {/* <Link href="api/auth/logout">Cerrar sesión</Link> */}
          </div>
            <Avatar className="w-10 h-10 mt-1 ml-5">
                <AvatarImage src={user.picture || ""} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
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

  





