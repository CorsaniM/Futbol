
import Inicio from "./dashboard/inicio/inicio";
import Navbar from "./_components/Navbar";


export default function Home() {

  return (
    <header>
      <div className="mt-10 font-medium text-3xl">
          <h1>¡Bienvenido!</h1>
          <Inicio/>
      </div>
    </header>
  );
}



