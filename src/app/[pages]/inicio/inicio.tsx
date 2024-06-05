import Navbar from "app/app/_components/Navbar";
import Link from "next/link";


export default function Inicio() {

    return(
        <div>
            <main className="flex min-h-screen">
            <div className="flex-1 mt-20 ml-20 h-40">
                <h1>Queres subir tu complejo deportivo? <Link href="/registroalquiler" className="text-green-400">Ingresa aca</Link></h1>
            </div>
            <div className="flex items-center flex-col justify-center ">
            <div className="bg-slate-200 rounded-xl p-6 ">
                <Link href="/dashboard/deportes" className="text-green-600 ">Agregar un deporte</Link>
                </div>
                <div className="bg-slate-200 rounded-lg p-5 mt-10">
                <Link href="/dashboard/alquiler" className="text-green-600">Alquilar una cancha</Link>
                </div>
                <div className="bg-slate-200 rounded-lg p-5 mt-10">
                <Link href="/dashboard/perfil" className="text-green-600">Ir al perfil</Link>
                </div>
            </div>
            </main>
        </div>
    )
}
