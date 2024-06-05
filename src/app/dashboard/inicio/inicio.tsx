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
import { Title } from "app/app/_components/ui/title";

export default function Inicio() {
    const { mutateAsync: createPost, isLoading, error } = api.transaccion.create.useMutation()
    const refresh = api.useUtils().cancha.list.invalidate
    const [deporte, setDeporte] = useState('')
    const [Ubicacion, setUbicacion] = useState('')
    const [horario, setHorario] = React.useState<Date>()
    const [monto, setMonto] = useState<number>(0)

    return(
    <div className="flex-auto font-normal h-screen w-screen">
        <div className="flex-auto text-2xl text-left mt-20 ml-5 mb-16">
            <h1>¿Querés subir tu complejo deportivo?</h1>
            <h2><Link href="/registroalquiler" className="text-green-600">Ingresa aca</Link></h2>
        </div>
        <div className="flex w-screen place-content-center">
            <div className="flex">
                <div className="flex bg-slate-200 rounded-lg">
                    <div className="flex-col" >
                        <div className="flex mb-0 m-5">
                            <Title>Hacer una reserva</Title>
                        </div>
                        <div className="flex">
                            <ul className="flex-col m-5 mt-0 text-2xl ">
                                <li className="m-2">
                                    <h1 className="p-3">Deporte</h1>
                                    <input  className="border-black border rounded-lg" value={deporte} 
                                    onChange={(e) => setDeporte(e.target.value)} placeholder='deporte' />
                                </li>
                                <li className="m-3">
                                    <h1 className="p-3">Ubicacion(Localidad, calle)</h1>
                                    <input  className="border-black border rounded-lg" value={Ubicacion} 
                                    onChange={(e) => setUbicacion(e.target.value)} placeholder='localidad' />
                                </li>
                                <li className="p-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] justify-start text-left font-bold",
                                                    !horario && "text-muted-foreground"
                                                )}
                                            >
                                            <CalendarIcon className="mr-2 h-8 w-8" />
                                                {horario ? format(horario, "PPP") : <span>Ingrese la fecha</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto bg-slate-200 border-green p-0" align="start">
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
                            <div className="flex items-center mr-5 "> {!isLoading && 
                            <button className= "h-24 w-40 rounded-full bg-slate-100 hover:bg-slate-300" onClick={() => createPost({
                                usuarioid: "",
                                canchaid: 1,
                                deporteId: 1,
                                descripcion: "todo gucci",
                                monto: monto,
                                horario: new Date(),
                                estado: 1,
                            }).then(refresh)}>Alquilar Cancha</button>}
                            {isLoading && (
                            <Button disabled={true}>
                                <Loader2Icon className=' m-2 animate-spin' /> Creating post
                            </Button>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}