import { api } from "app/trpc/react";




export default function Canchas(props: { params: {canchasId : number}}){

    const id = props.params.canchasId

    // const canchas = api.cancha.get.useQuery({
    //     id: id
    // })

    return(
        <h1>{id}</h1>
    )
}