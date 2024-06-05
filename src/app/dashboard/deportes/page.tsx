"use client"
import { api } from "app/trpc/react";
import { useState } from "react";
import { Loader2Icon } from 'lucide-react'


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


export default function Deportes() {

    const { mutateAsync: createPost, isLoading, error } = api.deporte.create.useMutation()

    const refresh = api.useUtils().cancha.list.invalidate

    const [name, setName] = useState('')

    const [tipo, setTipo] = useState<number>(0)

    return(
    <main>
        <div className="flex columns-1 gap-8 h-screen">
            <div className="flex items-center ml-50 w-screen row-span-1 bg-slate-200 rounded-lg max-w-fit h-36 mt-44 ">
                <ul className="flex m-5">
                    <li className="block m-5">
                    <Title>Deportes</Title>
                        <input  className="flex-auto border-black border rounded-lg" 
                        value={name} onChange={(e) => setName(e.target.value)} placeholder='deporte'/>
                    </li>
                    <li className="block m-5">
                        <Title>Tipo de deporte</Title>
                        <input  className=" flex-auto border-black border rounded-lg" type="number" 
                        value={tipo} onChange={(e) => setTipo(parseFloat(e.target.value))} placeholder='tipo'/>
                    </li>
                </ul> 
            </div>

            <div className="w-screen col-span-1">
                {!isLoading && 
                <button className="m-4 rounded-full text-2xl p-3 bg-slate-200 hover:bg-slate-300" onClick={() => createPost({
                    name: name,
                    tipo: tipo,
                }).then(refresh)}>Alquilar cancha</button>}
                {isLoading && (
                    <button disabled={true}>
                    <Loader2Icon className='mr-2 animate-spin'/> Creando
                </button>
                )}
            </div>
        </div>
    </main>
    )
}