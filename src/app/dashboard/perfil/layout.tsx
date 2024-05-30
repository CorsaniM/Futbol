import { List } from "app/app/_components/ui/list";
import { TRPCReactProvider } from "app/trpc/react";
import Link from "next/link";

export default function Perfillayout({children, }:{children: React.ReactNode}) {
    const lista = [
        { es: "/dashboard/perfil/canchas", en: "Canchas" },
        { es: "/dashboard/perfil/ingresos", en: "Ingresos" },
        { es: "/dashboard/perfil/dashboard", en: "Dashboard" },
        { es: "/dashboard/perfil/mensajes", en: "Mensajes" },
    ];
    return ( <div>
        <List>
            {lista.map(({es, en})=>(
                <Link href={
                    es
                }>{en}</Link>
            )
        )}
        </List>
        <TRPCReactProvider>{children}</TRPCReactProvider>
    </div>)
}