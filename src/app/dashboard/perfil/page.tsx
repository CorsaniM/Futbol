import { List, ListTile } from "app/app/_components/ui/list";
import { Title } from "app/app/_components/ui/title"
import { Sidebar } from "lucide-react"

export default function Home () {

    const items = [
        { es: "canchas", en: "Canchas" },
        { es: "ingresos", en: "Ingresos" },
        { es: "dashboard", en: "Dashboard" },
        { es: "mensajes", en: "Mensajes" },
    ];
    


    return(
        <div>
        <Title>Perfil</Title>
        <Sidebar>

        </Sidebar>
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