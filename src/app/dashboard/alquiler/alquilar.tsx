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
    <div className="flex flex-row min-h-screen">
        <div className="flex mt-9" >
            <div className="flex h-fit bg-slate-100 rounded-lg p-2">
                <ul className="flex-row ml-5">
                <li className="ml-2 mr-2 mb-2 mt-3 hover:bg-green-100">
                            <h1>Deporte</h1>
                                <input  className="border-black border rounded-lg" value={deporte} 
                                onChange={(e) => setDeporte(e.target.value)} placeholder=' deporte' />
                            </li>
                            <li className="ml-2 mt-2 ml-2 hover:bg-green-100">
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
                                                    "mt-5 mr-5 mb-3 flex-auto text-right font-normal hover:bg-green-100",
                                                    !horario && "text-muted-foreground"
                                                    )} >
                                                    <CalendarIcon className="mr-5 h-4 w-4 "/>
                                                    {horario ? format(horario, "PPP") : <span>Ingrese la fecha</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 bg-slate-100" align="start">
                                            <Calendar
                                            mode="single" 
                                            selected={horario}
                                            onSelect={setHorario}
                                            initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                </li>
                                <li className="placeml-2 mt-3 mr-20 ml-20 hover:bg-green-100">
                                    <h1>Horario</h1>
                                   <div>
                                    <input type="time" id="horario" />
                                   </div>
                                </li>
                                </ul>
            </div>
        </div>
                                
        <div className="ml-40 items-flex grid grid-row-8 grid-flow-col gap-8 auto-cols-auto">
            <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl">Cancha 1</h1>
                    </div>
                     <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl">Cancha 2</h1>
                     </div>
                    <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl">Cancha 3</h1>
                    </div>
                        <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl">Cancha 4</h1>
                        </div>
                    <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl">Cancha 5</h1>
                    </div>
                     <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl">Cancha 6</h1>
                     </div>
                    <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl">Cancha 7</h1>
                    </div> 
                     <div className="flex m-5 h-80 w-80 bg-slate-100 rounded-xl justify-center hover:bg-green-200">
                        <h1 className="text-2xl text-center">Cancha 8</h1>
                       </div>
     </div>    
    </div>
        </>
)
}