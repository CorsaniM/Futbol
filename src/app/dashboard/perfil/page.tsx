import { List, ListTile } from "app/app/_components/ui/list";
import { Title } from "app/app/_components/ui/title"
import { Sidebar } from "lucide-react"
import Link from "next/link";

export default function Home () {

    const lista = [
        { es: "/dashboard/perfil/canchas", en: "Canchas" },
        { es: "/dashboard/perfil/ingresos", en: "Ingresos" },
        { es: "/dashboard/perfil/dashboard", en: "Dashboard" },
        { es: "/dashboard/perfil/mensajes", en: "Mensajes" },
    ];
    


    return(
        <div>
        <Title>Perfil</Title>
        <div>
            <List>
                {lista.map(({es, en})=>(
                    <Link href={
                        es
                    }>{en}</Link>
                )
            )}
            </List>
        </div>
        <div>
        <Title>Dashboard</Title>
        </div>

        </div>

    )
}

{/* <List>
{items.map(({ es, en }) => (
    <ListTile
    key={es}
    href={`/dashboard/faIKDivwt7Z8Gp-B5yFrv/maintenance/tables/${en}`}
    title={en as React.ReactNode}
    />
))}
</List> */}