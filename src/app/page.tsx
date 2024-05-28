
import Inicio from "./[pages]/inicio/inicio";
import Navbar from "./_components/Navbar";



export default function Home() {
  return (
    <div>
      <div>
        <div className="sticky top-0 z-10">
          <Navbar/>
        </div>
          <Inicio/>
          <h1>HOLA</h1>
          
      </div>
    </div>
  );
}



