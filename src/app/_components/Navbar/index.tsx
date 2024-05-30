"use client";

import Link from "next/link";
import React, { useState } from "react";

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
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function Navbar() {
  
  const { user, error, isLoading } = useUser();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

const [open, setOpen] = useState<boolean>(true);

  return (
    

      <nav className="flex justify-between h-28 items-center bg-green-400 text-black px-24 py-3">
      <Link href="/">
        <h1 className="text-4xl font-bold bg-transparent">Alquila tu cancha©</h1>
      </Link>
      <ul className="flex gap-x-2 text-2xl">


        {user ? (
          <div className="flex">
            <div>
                    <div className="flex items-center mt-10 space-x-2">
                    {open ? (
                        <div>
                          <Checkbox id="terms" onClick={() => setOpen(false)} />
                          <Label htmlFor="terms">Sos dueño? (no)</Label>
                        </div>
                      ) : (
                        <div>
                          <Checkbox id="terms" onClick={() => setOpen(true)} />
                          <Label htmlFor="terms">Sos dueño? (si)</Label>
                        </div>
                    )}
                  </div>
            </div>  
            {
            user.picture
            ? (
            <div className="mt-5">                     
              <div className="flex">
                <div className="p-2 w-24 rounded-lg">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                    <Avatar className="w-15 h-auto mt-1 ml-5">
                        <AvatarImage src={user.picture || ""} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel><Link href="/">Perfil</Link></DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem><Link href="/">Equipos</Link></DropdownMenuItem>
                      <DropdownMenuItem><Link href="/">Mensajes</Link></DropdownMenuItem>
                      <DropdownMenuItem ><Link href="api/auth/logout">Cerrar sesión</Link></DropdownMenuItem>
                      <DropdownMenuItem disabled={open} ><Link href="/perfil">Tu complejo</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
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

  





