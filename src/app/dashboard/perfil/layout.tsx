import { List } from "app/app/_components/ui/list";
import { Title } from "app/app/_components/ui/title";
import { TRPCReactProvider } from "app/trpc/react";
import Link from "next/link";

export default function Perfillayout({children, }:{children: React.ReactNode}) {
    const lista = [
        { es: "/dashboard/perfil", en: "Perfil" },
        { es: "/dashboard/perfil/canchas", en: "Canchas" },
        { es: "/dashboard/perfil/ingresos", en: "Ingresos" },
        { es: "/dashboard/perfil/dashboard", en: "Dashboard" },
        { es: "/dashboard/perfil/mensajes", en: "Mensajes" },
    ];
    return ( 
    <div className="flex m-0">
            <div className="w-1/5 min-w-40 h-screen 
            bg-gradient-to-t from-green-300 from-80% ">
        <List>
            {lista.map(({es, en})=>(
            <div className="flex-auto p-3 hover:bg-green-200">
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