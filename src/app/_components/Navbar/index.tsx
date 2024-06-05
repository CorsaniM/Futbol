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
  
  <nav className="flex justify-between h-30 items-center bg-green-400 text-black px-20 py-2">
    <Link href="/">
    <h1 className="text-4xl font-bold bg-none">Alquila tu cancha©</h1>
    </Link>
    <ul className="flex gap-5 text-xl">
      {user ? 
      (<div>
        { user.picture ? 
          (<div>
            <div className="flex mt-5 mb-1">
              <h2 className="text-center">{user.name}</h2>
            </div>
                
            <div className="flex items-center gap-x-3">
              <Avatar>
                <AvatarImage src={user.picture || ""} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="m-2 bg-slate-100 rounded-lg p-2 ">
                <Link href="api/auth/logout">Cerrar sesión</Link>
              </div>
            </div>
          </div>) : 
          (<p>No hay imagen de usuario disponible</p>
        )}
        </div>) : 
        (<li className="mr-5 bg-white rounded-2xl p-2"> 
          <Link href="/api/auth/login">
            Iniciar sesión
          </Link>
        </li>
      )}   
    </ul>
  </nav>


);

}

  





