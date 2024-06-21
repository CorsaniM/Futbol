"use client"
import { Title } from "app/app/_components/ui/title";
import { List } from "app/app/_components/ui/list";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Canchas() {
    const canchasF5 = [
        { tit: "Cancha 1", ima: "/cancha.jpg", url: "1" },
        { tit: "Cancha 2", ima: "/cancha.jpg", url: "2"  },
        { tit: "Cancha 3", ima: "/cancha.jpg", url: "3"  },
        { tit: "Cancha 4", ima: "/cancha.jpg", url: "4"  },
        { tit: "Cancha 5", ima: "/cancha.jpg", url: "5"  },
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
            {canchasF5.map(({tit, ima, url},ind)=>(
                        <div 
                        onClick={()=> handleClick(ind)}   
                        className={`flex flex-row m-2 p-2 ${index==ind?"":""}`}
                        >
                            <Link 
                            href={`/dashboard/perfil/canchas/${url}`}
                            className="flex flex-col m-2 h-80 w-80 rounded-lg justify-center">
                            <Title>{tit}</Title>
                            <img src={`../images${ima}`} alt=" imagen cancha" />
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    </div>
    )
}

