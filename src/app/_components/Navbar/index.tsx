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

  if (isLoading) return <div className="flex h-36 p-5 ">Cargando...</div>;
  if (error) return <div>{error.message}</div>;

  return (

  <nav className="flex justify-between h-36 items-center text-black font-medium 
  px-20 py-2 bg-gradient-to-b from-green-400 from-80% ">
    <Link href="/">
    <h1 className="text-4xl font-bold p-2 hover:bg-green-300 ">Alquila tu cancha©</h1>
    </Link>
    <ul className="flex gap-5 text-2xl">
      {user ? 
      (<div>
        { user.picture ? 
          (<div className="flex-col">
            <div className="flex mt-4 items-center gap-x-3" >
              <Link href={"/dashboard/perfil"}>
                <Avatar className="size-12" >
                  <AvatarImage src={user.picture || ""} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <h2 className="text-center">{user.name}</h2>
            </div>
          <div className="flex justify-end">
            <div className="flex">
              <div className="text-xl my-2 w-40 place-self-end rounded-full bg-green-300 hover:bg-green-200">
                <Link href="api/auth/logout">Cerrar sesión</Link>
              </div>
            </div>
          </div>
                
            
          </div>) : 
          (<p>No hay imagen de usuario disponible</p>
        )}
        </div>) : 
        (<li className="m-2 rounded-full p-3 bg-green-300 hover:bg-green-200"> 
          <Link href="/api/auth/login">
            Iniciar sesión
          </Link>
        </li>
      )}   
    </ul>
  </nav>


);

}

  





