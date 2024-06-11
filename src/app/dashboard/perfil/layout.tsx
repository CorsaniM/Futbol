"use client"
import { List } from "app/app/_components/ui/list";
import { Title } from "app/app/_components/ui/title";
import { TRPCReactProvider } from "app/trpc/react";
import Link from "next/link";
import { useState } from "react";

export default function Perfillayout({children, }:{children: React.ReactNode}) {
    const lista = [
        { es: "", en: "Perfil" },
        { es: "/canchas", en: "Canchas" },
        { es: "/ingresos", en: "Ingresos" },
        { es: "/dashboard", en: "Dashboard" },
        { es: "/mensajes", en: "Mensajes" },
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
            {lista.map(({es, en},ind)=>(
                <div 
                    onClick={()=> handleClick(ind)}   
                    className={`flex-auto p-3 hover:bg-green-200 ${index==ind? "bg-green-200":""}`}
                >
                    <Link href={`/dashboard/perfil${es}`}>
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