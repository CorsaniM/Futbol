"use server"
import { Title } from "app/app/_components/ui/title";
import ListaDeportes from "./listaDeportes";
import { AddDeporte } from "./addDeporte";

export default async function Deportes() {

    return(
        <div>
            <Title>Deportes</Title>
            <div className="w-40">
            <ListaDeportes/>
            </div>
        </div>
    )
}