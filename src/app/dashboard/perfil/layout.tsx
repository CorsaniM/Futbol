"use client"
import { List } from "app/app/_components/ui/list";
import { Title } from "app/app/_components/ui/title";
import { TRPCReactProvider } from "app/trpc/react";
import Link from "next/link";
import { useState } from "react";

export default function Perfillayout({children, }:{children: React.ReactNode}) {
    const lista = [
        { i:0, es: "/dashboard/perfil", en: "Perfil" },
        { i:1, es: "/dashboard/perfil/canchas", en: "Canchas" },
        { i:2, es: "/dashboard/perfil/ingresos", en: "Ingresos" },
        { i:3, es: "/dashboard/perfil/dashboard", en: "Dashboard" },
        { i:4, es: "/dashboard/perfil/mensajes", en: "Mensajes" },
    ];
    const [index, setIndex] = useState(-1)
    const handleClick = (i: number) => {
        setIndex(i)
    };
    return ( 
    <div className="flex m-0">
            <div className="w-1/5 min-w-40 h-screen 
            bg-gradient-to-t from-green-300 from-80% ">
        <List>
            {lista.map(({i, es, en})=>(
            <div 
            onClick={()=> handleClick(i)}   
            className={`flex-auto p-3 hover:bg-green-200 ${index==i? "bg-green-200":""}` }
            >
                <Link href={es}>
                    <Title>{en}</Title>
                </Link>
            </div>
            )
        )}
        </List>

        </div>
        <div>
            <TRPCReactProvider>{children}</TRPCReactProvider>
        </div>
    </div>)
}