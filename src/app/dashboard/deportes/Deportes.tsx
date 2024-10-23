import { Title } from "app/app/_components/ui/title"
import { api } from "app/trpc/server"

export default async function Deportes() {
    
    const Deportes = await api.deporte.list()
    
    console.log(Deportes)
    return(
        <Title>Lista</Title>
    )
}