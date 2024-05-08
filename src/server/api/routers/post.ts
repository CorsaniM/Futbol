"use server"


import { and, eq, gt, like, or } from "drizzle-orm";
import { db } from "../../db";
import { usuario } from "../../db/schema";



import { redirect } from "next/navigation";






export async function LoginUser(mail: string, pass: string) {

    const userExist = await db.select().from(usuario).where(
        and(
            like(usuario.email, mail),
            like(usuario.contraseña, pass)
        )
    );

    if(Array.isArray(userExist) && userExist.length === 0)
        {
            return { success: true, message: "Inicio de sesión exitoso" };
        }
        else{
        console.log("Bien Bien")
        redirect("/register?returnTo")
    }
};

export async function PostUser (name: string, mail: string,pass: string) {
    
    console.log(name, mail, pass)
    
        await db.insert(usuario).values({
            name: name,
            email: mail,
            contraseña: pass,
        });
    }
