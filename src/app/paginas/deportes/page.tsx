"use client"
import { api } from "app/trpc/react";
import { useState } from "react";
import { Loader2Icon } from 'lucide-react'



import { Button } from "../../_components/ui/button";


import React from "react";
import { Input } from "../../_components/ui/input";
import { Title } from "app/app/_components/ui/title";


export default function Deportes() {

    const { mutateAsync: createPost, isLoading, error } = api.deporte.create.useMutation()



    const refresh = api.useUtils().cancha.list.invalidate

    const [NombreDeporte, setName] = useState('')

    const [tipo, setTipo] = useState<number>(0)

    



    return(
        <div>
            <div className="flex">
                <div className="h-screen w-screen">
                <div className="m-10">
                    <Title>Deportes</Title>

                </div>
                <div className="flex bg-slate-200 rounded-lg max-w-fit h-44 w-1/2 items-center mt-44 ml-56 justify-center">
                    <ul className="flex ml-5">
                        <li className="ml-5">
                            <Title>Deporte</Title>
                            <input  className="border-black border rounded-lg" value={NombreDeporte} onChange={(e) => setName(e.target.value)} placeholder='deporte' />
                        </li>
                        <li className="ml-5">
                            <Title>Tamaño</Title>
                            <input  className="border-black border rounded-lg" type="number" value={tipo} onChange={(e) => setTipo(parseFloat(e.target.value))} placeholder='tipo' />
                        </li>
                    </ul> 
                    </div>
                    <div>
                    {!isLoading && 
                    <Button onClick={() => createPost({
                        name: NombreDeporte,
                        tipo: tipo,
                        
                    }).then(refresh)}>Alquilar Cancha</Button>}
                    {isLoading && (
                        <Button disabled={true}>
                        <Loader2Icon className='mr-2 animate-spin' /> Creating post
                    </Button>
                )}
                    </div>
                    <Deportes/>


        </div>
        </div>
        </div>
    )
}