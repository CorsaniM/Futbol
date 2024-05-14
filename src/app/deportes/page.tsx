"use client"
import { api } from "app/trpc/react";
import { useState } from "react";
import { Loader2Icon } from 'lucide-react'



import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "app/lib/utils";
import { Button } from "../_components/ui/button";
import { Calendar } from "../_components/ui/calendar"; 
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../_components/ui/popover"

import React from "react";
import { Input } from "../_components/ui/input";

import Navbar from "../_components/Navbar";

export default function Deportes() {

    const { mutateAsync: createPost, isPending, error } = api.deporte.create.useMutation()

    const refresh = api.useUtils().cancha.list.invalidate

    const [name, setName] = useState('')

    const [tipo, setTipo] = useState<number>(0)

    



    return(
        <div>
            <div>
        <Navbar/>
            </div>
                <div>
                <div className="h-screen">
            <div className="flex bg-slate-200 rounded-lg max-w-fit h-44 items-center mt-44 ml-56 justify-center">
                <ul className="flex ml-5">
                    <li className="ml-5">
                        <h1>Deporte</h1>
                        <input  className="border-black border rounded-lg" value={name} onChange={(e) => setName(e.target.value)} placeholder='deporte' />
                    </li>
                    <li className="ml-5">
                        <h1>Tipo de deporte</h1>
                        <input  className="border-black border rounded-lg" type="number" value={tipo} onChange={(e) => setTipo(parseFloat(e.target.value))} placeholder='tipo' />
                    </li>
                </ul> 
                </div>
                <div>
                {!isPending && 
                <button onClick={() => createPost({
                    name: name,
                    tipo: tipo,
                    
                }).then(refresh)}>Alquilar Cancha</button>}
                {isPending && (
                    <button disabled={true}>
                    <Loader2Icon className='mr-2 animate-spin' /> Creating post
                </button>
            )}
                </div>
                </div>
                </div>
        </div>
    )
}