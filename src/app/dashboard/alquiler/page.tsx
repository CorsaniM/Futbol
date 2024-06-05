import { Title } from "app/app/_components/ui/title";
import Alquilar from "./alquilar";

export default function Alquiler () {

    return(
        <div className="mt-5 font-normal text-xl">
            <Title>Elegí tu cancha</Title>
            <div>
            <Alquilar/>
            </div>
        </div>
    )
}