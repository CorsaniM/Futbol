import { type AfterCallbackAppRoute, handleAuth, handleCallback } from '@auth0/nextjs-auth0/edge'  


import { db, schema } from 'app/server/db'

const afterCallback: AfterCallbackAppRoute = async (_req, session, _state) =>
     {     try{         await db.insert(schema.users).values({           
        id: session.user.sub,           
        email: session.user.email,   
        name: session.user.name,     
        picture: session.user.picture,   
        })    
     }     catch(e)
     {console.log(e)} 
    {return session } 

    }
export const GET = handleAuth({callback: handleCallback({afterCallback,}), })