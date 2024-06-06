"use client"
import Navbar from "app/app/_components/Navbar";
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


export default function Inicio() {

    const { mutateAsync: createPost, isLoading, error } = api.transaccion.create.useMutation()
    const refresh = api.useUtils().cancha.list.invalidate
    const [deporte, setDeporte] = useState('')
    const [Ubicacion, setUbicacion] = useState('')
    const [monto, setMonto] = useState<number>(0)
    const [horario, setHorario] = React.useState<Date>()

    return(
    <div className="flex-row min-h-screen">
        <div className="flex-auto">
            <div className=" mt-20 ml-5 align-content:left">
                <h2>¿Queres subir tu complejo deportivo?</h2>
                <h2><Link href="/registroalquiler" className="mt-10 ml-200 h-60 text-green-900"
                >Ingresá acá</Link></h2>
            </div>

        </div>
                 <div className="flex justify-center mt-9" >
                     <div className="flex-row bg-slate-100 rounded-lg p-5">
                        <ul className="flex-row ml-5">
                            
                            <div className="mr-3 mb-2 text-center font-semibold">
                                <h2>Hace tu reserva</h2>
                            </div>
                            <li className="ml-0 mt-3">
                            <h1>Deporte</h1>
                                <input  className="border-black border rounded-lg" value={deporte} 
                                onChange={(e) => setDeporte(e.target.value)} placeholder=' deporte' />
                            </li>
                            <li className="ml-0 mt-3">
                                    <h1>Ubicación</h1>
                                <input  className="border-black border rounded-lg" value={Ubicacion} 
                                 onChange={(e) => setUbicacion(e.target.value)} placeholder=' localidad' />
                                </li>
                                <li className="ml-5">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "mt-5 mb-2 flex text-right font-normal",
                                                    !horario && "text-muted-foreground"
                                                    )} >
                                                    <CalendarIcon className="mr-2 h-4 w-4 " />
                                                    {horario ? format(horario, "PPP") : <span>Ingrese la fecha</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                            mode="single"
                                            selected={horario}
                                            onSelect={setHorario}
                                            initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                </li>
                 <div>
                 {!isLoading && 
                    <button className=" mt-3 ml-8 p-2 hover: bg-green-200 rounded-2xl border" 
                    align-start onClick={() => createPost({
                        usuarioid: "",
                        canchaid: 1,
                        deporteId: 1,
                        descripcion: "todo gucci",
                        monto: monto,
                        horario: new Date(),
                        estado: 1,
                    }).then(refresh)}>Alquilar cancha</button>}
                {isLoading && (
                    <Button disabled={true}>
                    <Loader2Icon className='mt-6 animate-spin' /> Creating post
                </Button>
            )}
            </div>
            </ul>
            </div>
         </div>
            </div>
    )
}