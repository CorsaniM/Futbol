
import Link from "next/link";
import React from "react";
import { SessionProvider } from "next-auth/react"



export default function Navbar() {
  

//   if(error) return <div>{error.message}</div>

//   console.log(user?.name, user?.email)

//   if(user){
//   return (
//     <nav className="flex justify-between h-20 items-center bg-green-400 text-black px-24 py-3">
//       <Link href="/">
//         <h1 className="text-4xl font-bold bg-transparent">Señores del Futbol©</h1>
//       </Link>
//       <ul className="flex gap-x-2 text-2xl">
//         <li>
//           <Link href="/api/auth/logout">
//             Cerrar sesión
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

  return (


    <nav className="flex justify-between h-20 items-center bg-green-400 text-black px-24 py-3">
      <Link href="/">
        <h1 className="text-4xl font-bold bg-transparent">Señores del Futbol©</h1>
      </Link>
      <ul className="flex gap-x-2 text-2xl">
        <li className="mr-5 bg-white rounded-2xl p-2">
        <Link href="/api/auth/login">
            Iniciar sesion
          </Link>
        </li>
      </ul>
    </nav>

  );

}

  





