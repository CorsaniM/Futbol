import Navbar from "app/app/_components/Navbar";
import Link from "next/link";


export default function Inicio() {

    return(
        <div>
            <main className="flex min-h-screen">
            <div className=" mt-20 ml-2 h-60">
                <h2>Queres subir tu complejo deportivo?</h2>
                <h2><Link href="/registroalquiler" className="mt-10 ml-200 h-60 text-green-900">Ingresá acá</Link></h2>
            </div>
            <div className="flex items-center flex-col justify-center-right ">
            <div className="bg-slate-200 rounded-xl p-5 mt-20 ml-20 hover:bg-slate-100">
                <Link href="/dashboard/deportes" className="text-green-900 mb-10 ">Agregar un deporte</Link>
                </div>
                <div className="bg-slate-200 rounded-xl p-5 mt-10 ml-20 hover:bg-slate-100">
                <Link href="/dashboard/alquiler" className="text-green-900">Alquilar una cancha</Link>
                </div>
                <div className="bg-slate-200 rounded-xl p-3 mt-10 ml-20 hover:bg-slate-100">
                <Link href="/dashboard/perfil" className="text-green-900">Ir al perfil</Link>
                </div>
            </div>
            </main>
        </div>
    )

}


