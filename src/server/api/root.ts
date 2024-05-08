import { createCallerFactory, createTRPCRouter } from "app/server/api/trpc";
import { cancha, transaccion, usuario } from "../db/schema";
import { usuarioRouter } from "./routers/usuario";
import { canchaRouter } from "./routers/cancha";
import { transaccionRouter } from "./routers/transaccion";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server/dist/@trpc/server";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  usuario: usuarioRouter,
  cancha: canchaRouter,
  transaccion: transaccionRouter,

});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

export type RouterOutputs = inferRouterOutputs<AppRouter>
export type RouterInputs = inferRouterInputs<AppRouter>