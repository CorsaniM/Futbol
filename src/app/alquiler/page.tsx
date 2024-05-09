import Navbar from "app/app/_components/Navbar";
import Link from "next/link";

export default function RegistroAlquiler () {

    return(
        <div>

        <Navbar/>
    <div className="flex w-screen h-screen">
        <div >
            <h1>Alquilar una cancha</h1>
        </div>
        <div className="h-screen">
            <div className="flex bg-slate-200 rounded-lg max-w-fit h-44 items-center mt-44 ml-56 justify-center">
                <ul className="flex ml-5">
                <li className="ml-5">
                    <h1>Deporte</h1>
                    <input className="border-black border rounded-lg"></input>
                </li>
                <li className="ml-5">
                    <h1>Ubicacion(Localidad, calle)</h1>
                    <input className="border-black border rounded-lg"></input>
                </li>
                <li className="ml-5">
                    <h1>Horarios</h1>
                    <input className="border-black border rounded-lg"></input>
                </li>
                <li className="ml-5  mr-5">
                    <h1>Monto</h1>
                    <input className="border-black border rounded-lg"></input>
                </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    )
}