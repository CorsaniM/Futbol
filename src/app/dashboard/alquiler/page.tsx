import Navbar from "app/app/_components/Navbar";
import { api } from "app/trpc/server";
import Link from "next/link";
import Alquilar from "./alquilar";

export default function Alquiler () {



    
        
    


    return(
        <div>
            <h1>Que es lo que estas buscando?</h1>
            <div>
            <Alquilar/>
            </div>
        </div>
    )
}