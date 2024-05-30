"use server"
import { Title } from "@radix-ui/react-dialog";
import LayoutContainer from "app/app/_components/ui/layout-container";
import { AddDeporte } from "./addDeporte";
import { List, Loader2Icon } from "lucide-react";
import { ListTile } from "app/app/_components/ui/list";
import { api } from "app/trpc/server";
import { db } from "app/server/db";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { useState } from "react";
import { asTRPCError } from "app/lib/errors";
import { Button } from "app/app/_components/ui/button";
import { deporte } from "app/server/db/schema";

export default async function ListaDeportes() {
    
    const deportes = await api.deporte.list();
    
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (id: any) => {
        setIsLoading(true);
        try {
            await api.deporte.delete({ id });
            // Si necesitas actualizar la lista de deportes después de borrar uno, puedes volver a cargar la lista
            toast.success("Deporte eliminado exitosamente");
        } catch (error) {
            // Manejar errores
            console.error("Error al eliminar el deporte:", error);
            toast.error("Error al eliminar el deporte");
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <LayoutContainer>
        <section className="space-y-2 w-1/2 ml-80 mt-10 flex">
                <ul className="min-w-80 border border-black p-3 rounded-lg">
                {deportes.map((deportes) => {
                    return (
                        <div className="flex ">
                            <h1>{deportes.name} </h1>
                            <h1>{deportes.tipo}</h1>
                            <Button disabled={isLoading} onClick={() => handleDelete(deporte.id)}>
                                {isLoading && (
                                    <Loader2Icon className="mr-2 animate-spin" size={20} />
                                )}
                                Eliminar deporte
                            </Button>  
                        </div>
                    );
                })}
                </ul>
                <div className="ml-10">
                <AddDeporte/>
                </div>
        </section>
</LayoutContainer>
    )
    
}