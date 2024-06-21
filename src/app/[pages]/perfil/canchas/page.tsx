"use client"
import { Title } from "app/app/_components/ui/title";
import { List } from "app/app/_components/ui/list";
import Link from "next/link";
import { useState } from "react";


export default function Canchas() {
    const canchasF5 = [
        { tit: "Cancha 1", ima: "/cancha.jpg" },
    ];
    const [index, setIndex] = useState(0)
    const handleClick = (i: number) => {
        setIndex(i)
    };
    return ( 
    <div className="flex m-0">
            <div className="">
            <List>
                {canchasF5.map(({tit, ima},ind)=>(
                    <figure 
                        onClick={()=> handleClick(ind)}   
                        className={` ${index==ind?"":""}`}
                    >
                    <Title>{tit}</Title>
                    <img src={`/app/images ${ima}`} alt="" />
                    </figure>
                )
            )}
            </List>
        </div>
    </div>
    )
}

