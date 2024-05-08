"use client"

import Link from "next/link"
import { useState } from "react";
import { LoginUser } from "app/server/api/routers/post"; 
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import AppRouter from "next/dist/client/components/app-router";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { env } from "app/env";
import Inicio from "../inicio/page";


export default function Login() {
  
  const { loginWithRedirect} = useAuth0();

  
  const [mail,setMail] = useState("")
  const [pass,setpass]=useState("");
 
  AppRouter


const handleSubmit = async () => {

  

  await LoginUser(mail, pass)   


}

    return(
      
  <body>
      <div id="form" className=" bg-gray-700 overflow-visible">
        <div className="mb-8 flex">
            <Link className="mr-10"href="/"> Volver al inicio</Link>
            <h1>Login side</h1>
        </div>
        <div className="bg-gray-700 rounded-lg">
          
            <form className="bg-slate-400" onSubmit={handleSubmit}>
                <input className="bg-slate-200" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} type="text" placeholder="email" />
                <input className="bg-slate-200" name="pass" value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="password" />
                <Link href="/pages/registrarse">Crear cuenta</Link>

                <input className="m-5 cursor-pointer" type="submit" name="submit" value="Iniciar sesión" />
                <div></div>
        </form>
        </div>
      </div>

      <button onClick={() => loginWithRedirect()}>Login</button>
  </body>
 
    
    )
}