"use client"
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

export default function Alquilar() {

    const { mutateAsync: createPost, isLoading, error } = api.transaccion.create.useMutation()
    const refresh = api.useUtils().cancha.list.invalidate
    const [deporte, setDeporte] = useState('')
    const [Ubicacion, setUbicacion] = useState('')
    const [horario, setHorario] = React.useState<Date>()

    return(
        <div className="flex h-fit w-fit">
            <div className="flex flex-row items-center">
                <div className="flex m-5 py-3 w-fit h-fit bg-slate-200 rounded-lg">
                    <div className="flex-col">
                        <div className="flex-col">
                            <ul className="flex-col items-center m-5 mt-0 text-2xl ">
                                <li className="m-2">
                                    <h1 className="p-3">Deporte</h1>
                                    <input  className="border-black border rounded-lg" value={deporte} 
                                    onChange={(e) => setDeporte(e.target.value)} placeholder=' deporte' />
                                </li>
                                <li className="m-3">
                                    <h1 className="p-3">Ubicacion</h1>
                                    <input  className="border-black border rounded-lg" value={Ubicacion} 
                                    onChange={(e) => setUbicacion(e.target.value)} placeholder=' localidad' />
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
                        </div>
                        <div className="m-3"> {!isLoading && 
                            <button className="p-2 rounded-full text-2xl bg-green-200 hover:bg-green-300" onClick={() => createPost({
                                usuarioid: "",
                                canchaid: 1,
                                deporteId: 1,
                                descripcion: "todo gucci",
                                horario: new Date(),
                                monto: 1,
                                estado: 1,
                                }).then(refresh)}>Buscar cancha</button>}
                            {isLoading && (
                                <Button disabled={true}>
                                <Loader2Icon className='mr-2 animate-spin' /> Creating post
                            </Button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 m-5">
                    <span className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 1</h1>
                    </span>
                    <div className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 2</h1>
                    </div>
                    <div className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 3</h1>
                    </div>
                    <div className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 4</h1>
                    </div>
                    <div className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 5</h1>
                    </div>
                    <div className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 6</h1>
                    </div>
                    <div className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 7</h1>
                    </div>
                    <div className="flex m-2 h-80 w-80 bg-slate-100 rounded-lg justify-center">
                        <h1 className="text-2xl">Cancha 8</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}