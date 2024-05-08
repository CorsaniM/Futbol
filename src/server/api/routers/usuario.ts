import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { usuario } from "app/server/db/schema";

export const usuarioRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        email: z.string(),
        name: z.string(),
        telefono: z.string(),
        documento: z.string(),
        picture: z.string(),
        contraseña: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(usuario).values(input);
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.usuario.findMany();
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        email: z.string(),
        name: z.string(),
        telefono: z.string(),
        documento: z.string(),
        picture: z.string(),
        contraseña: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await db.update(usuario).set(input).where(eq(usuario.id, input.id));
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const channel = await db.query.usuario.findFirst({
        where: eq(usuario.id, input.id),
      });

      return channel;
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      await db.delete(usuario).where(eq(usuario.id, input.id));
    }),
});

// export const usuarioRouter = createTRPCRouter({
//     create: publicProcedure.input(z.object({ numeroOrden: z.string(),usuario_Compradorid: z.number(),
//         usuario_Vendedorid: z.number(), bancoid: z.number(),monto: z.number(),
//         Estado: z.number(),descripcion: z.string(), Fecha_emision: z.number(), Fecha_entrega: z.number(),
//         createdAt: z.number(), updatedAt: z.number() }))
//         .mutation(async ({ ctx, input }) => {
//         // simulate a slow db call
//         await new Promise((resolve) => setTimeout(resolve, 1000))

//         await ctx.db.insert(usuario).values({
//             numeroOrden: input.numeroOrden,
//             usuario_Compradorid: input.usuario_Compradorid,
//             usuario_Vendedorid: input.usuario_Vendedorid,
//             bancoid: input.bancoid,
//             monto: input.monto,
//             Estado: input.Estado,
//             descripcion: input.descripcion,
//             Fecha_emision: input.Fecha_emision,
//             Fecha_entrega: input.Fecha_entrega,
//             createdAt: input.createdAt,
//             updatedAt: input.updatedAt
//         })
//     }),
