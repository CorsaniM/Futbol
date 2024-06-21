"use client"
import { Title } from "app/app/_components/ui/title";
import { List } from "app/app/_components/ui/list";
import Link from "next/link";
import { useState } from "react";


export default function Canchas() {
    const canchasF5 = [
        { tit: "Cancha 1", ima: "/cancha.jpg" },
        { tit: "Cancha 2", ima: "/cancha.jpg" },
    ];
    const [index, setIndex] = useState(0)
    const handleClick = (i: number) => {
        setIndex(i)
    };
    return ( 
    <div className="flex m-0">
            <div className="flex flex-col">
            <Title>Futbol 5</Title>
            <div className="grid grid-cols-4 m-5">
            {canchasF5.map(({tit, ima},ind)=>(
                        <div 
                        onClick={()=> handleClick(ind)}   
                        className={`flex flex-row m-2 p-2 ${index==ind?"":""}`}
                        >
                            <figure className="flex flex-col m-2 h-80 w-80 rounded-lg justify-center">
                            <Title>{tit}</Title>
                            <img src={`../images${ima}`} alt=" imagen cancha" />
                            </figure>
                        </div>
                    )
                )}
            </div>
        </div>
    </div>
    )
}

