import Navbar from "app/app/_components/Navbar";
import Link from "next/link";

export default function Inicio() {
    
    return(
    <div>
        <div className="flex-auto font-normal min-h-screen">
            <div className="flex-auto text-2xl text-left mt-20 ml-5 h-40">
                <h1>¿Querés subir tu complejo deportivo?</h1>
                <h2><Link href="/registroalquiler" className="text-green-600">Ingresa aca</Link></h2>
            <div>
            <div className="flex items-center flex-col justify-center text-2xl text-green-600 ">
                <div className="w-80 rounded-full p-5 m-5 bg-slate-100 hover:bg-slate-200">
                    <Link href="/dashboard/deportes">Agregar un deporte</Link>
                </div>
                <div className="w-80 rounded-full p-5 m-5 bg-slate-100 hover:bg-slate-200">
                    <Link href="/dashboard/alquiler">Alquilar una cancha</Link>
                </div>
                <div className="w-80 rounded-full p-5 m-5 bg-slate-100 hover:bg-slate-200">
                    <Link href="/dashboard/perfil">Ir al perfil</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}
