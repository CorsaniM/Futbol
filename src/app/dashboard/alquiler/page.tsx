import Navbar from "app/app/_components/Navbar";
import { api } from "app/trpc/server";
import Link from "next/link";
import Alquilar from "./alquilar";

export default function Alquiler () {
    return(
        <div className="ml-5 mt-5 mb-2 font-semibold">
            <h1>Qué estás buscando?</h1>
            <div>
            <Alquilar/>
            </div>
        </div>
    )
}