import Navbar from "app/app/_components/Navbar";
import { api } from "app/trpc/server";
import Link from "next/link";
import Alquilar from "./alquilar";
import { Button } from "react-day-picker";

export default function Alquiler () {

    return(
        <div>
        <div>
        <Alquilar/>

        </div>
        
    </div>
    )
}