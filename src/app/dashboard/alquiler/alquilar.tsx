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
    const [monto, setMonto] = useState<number>(0)
    const [seña, setSeña] = useState('')
    
    
    

    return(
        <>
    <div className="flex w-screen h-screen">
        <div className="flex">
            <div className="flex bg-slate-200 rounded-lg max-w-fit max-h-80
            items-center mt-44 ml-56 justify-center">
                <ul className="flex-col m-5 p-5">
                    <li className="m-3">
                        <h1>Deporte</h1>
                        <input  className="border-black border rounded-lg" value={deporte} onChange={(e) => setDeporte(e.target.value)} placeholder='deporte' />
                    </li>
                    <li className="m-3">
                        <h1>Ubicacion(Localidad, calle)</h1>
                        <input  className="border-black border rounded-lg" value={Ubicacion} onChange={(e) => setUbicacion(e.target.value)} placeholder='localidad' />
                    </li>
                    <li className="m-3">
                        <h1>Monto</h1>
                        <Input  className="border-black border rounded-lg" type="number" value={monto} onChange={(e) => setMonto(parseFloat(e.target.value))} placeholder='monto' />
                    </li>
                    <li className="m-3">
                        <h1>Seña</h1>
                        <input  className="border-black border rounded-lg" value={seña} onChange={(e) => setSeña(e.target.value)} placeholder='seña' />
                    </li>
                </ul>
                    <li className="m-0">
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
                <div className="m-3"> {!isLoading && 
                <button onClick={() => createPost({
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
                    <Loader2Icon className='mr-2 animate-spin' /> Creating post
                </Button>
            )}
            </div>
            </div>
        </div>
    </div>
        
        </>
    )
}