
import Navbar from "../_components/Navbar";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <div>
        <div>
            <main className="flex min-h-screen bg-white">
            <div className=" mt-20 ml-20 h-40">
                <h1>Queres subir tu complejo deportivo? <Link href="/registroalquiler" className="text-green-400">Ingresa aca</Link></h1>
            </div>
            <div className="flex items-center flex-col justify-center ">
            <div className="bg-slate-200 rounded-lg p-5 ">
                <Link href="/deportes" className="text-green-400 mb-10">agregar un deporte</Link>
                </div>
                <div className="bg-slate-200 rounded-lg p-5 mt-10">
                <Link href="/alquiler" className="text-green-400">Alquilar una cancha</Link>
                </div>
                <div className="bg-slate-200 rounded-lg">
                </div>
            </div>
            </main>
        </div>
          <h1>HOLA</h1>
          
      </div>
    </div>
  );
}





import Inicio from "../pages/inicio/inicio"; 
import Navbar from "../_components/Navbar";



export default function Home() {
  return (
    <div>
      <div>
          <Inicio/>
          <h1>HOLA</h1>
          
      </div>
    </div>
  );
}



