"use client"

import Link from "next/link"
import { useState } from "react";
import { PostUser } from "app/server/api/routers/post"; 



export default function Login() {

    const [name,setname]=useState("");
    const [pass,setpass]=useState("");
    const [mail,setMail] = useState("")

const handleSubmit = async () => {

PostUser(name, mail, pass)

};

    return(
    <body>
        <html>

            <div className="bg-slate-400  ">
                <Link href="/"> Volver al inicio</Link>
            </div>
            <div>
                <h1>Login side</h1>
            </div>
            <div>
                <h1 >Registrarse</h1>
                <form className="bg-slate-400" onSubmit={handleSubmit}>
                    <input className="bg-slate-200" id="name" value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="name" />
                    <input className="bg-slate-200" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} type="text" placeholder="email" />
                    <input className="bg-slate-200" name="pass" value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="password" />
                    <button className="cursor-pointer" type="submit" name="submit"  >Crear cuenta</button>
                    
            </form>
            </div>  
        </html>
    </body>
)
}

