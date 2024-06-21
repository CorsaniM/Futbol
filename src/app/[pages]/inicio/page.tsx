"use client"
import Link from "next/link";
import { api } from "app/trpc/react";
import { useState } from "react";
import { Loader2Icon } from 'lucide-react'
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "app/lib/utils";
import { Button } from "../../_components/ui/button";
import { Calendar } from "../../_components/ui/calendar"; 
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../_components/ui/popover"
import React from "react";
import { Input } from "../../_components/ui/input";
import { Title } from "app/app/_components/ui/title";

export default function Inicio() {
    const { mutateAsync: createPost, isLoading, error } = api.transaccion.create.useMutation()
    const refresh = api.useUtils().cancha.list.invalidate
    const [deporte, setDeporte] = useState('')
    const [horario, setHorario] = React.useState<Date>()
    const [Ubicacion, setUbicacion] = useState('')
    const [monto, setMonto] = useState<number>(0)

    return(
    <div className="flex-auto font-normal">
        <div className="flex-auto text-2xl text-left mt-20 ml-5 mb-16">
            <h1>¿Querés subir tu complejo deportivo?</h1>
            <h2><Link href="/dashboard/perfil/registroalquiler" className="text-green-600">Ingresa aca</Link></h2>
        </div>
        <div className="flex w-screen place-content-center">
            <div className="flex">
                <div className="flex bg-slate-100 rounded-lg">
                    <div className="flex-col">
                        <div className="flex text-2xl font-medium mb-0 m-4">
                            <h1>Hacer una reserva</h1>
                        </div>
                        <div className="flex-row">
                            <ul className="flex items-center m-5 mt-0 text-2xl ">
                                <li className="m-2">
                                    <h1 className="p-3">Deporte</h1>
                                    <input className="border-black border rounded-lg" value={deporte} 
                                    onChange={(e) => setDeporte(e.target.value)} placeholder=' deporte' />
                                </li>
                                <li className="m-3">
                                    <h1 className="p-3">Ubicación (Localidad, calle)</h1>
                                    <input className="border-black border rounded-lg" value={Ubicacion} 
                                    onChange={(e) => setUbicacion(e.target.value)} placeholder=' localidad' />
                                </li>
                                <li className="p-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"custom"}
                                                className={cn(
                                                    "",
                                                    !horario && "text-muted-foreground"
                                                )}
                                            >
                                            <CalendarIcon className="mr-2 h-8 w-8" />
                                                {horario ? format(horario, "PPP") : <span>Ingrese la fecha</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className=" w-16 bg-slate-100 border-green p-0" align="start">
                                            <Calendar
                                                    mode="single"
                                                    selected={horario}
                                                    onSelect={setHorario}
                                                    initialFocus
                                                    />
                                        </PopoverContent>
                                    </Popover>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex mr-5 items-center"> 
                        <Button variant={"custom"}>
                            <Link href="/dashboard/alquiler">Ir a alquilar</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}