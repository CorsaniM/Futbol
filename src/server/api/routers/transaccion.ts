import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { transaccion } from "app/server/db/schema";

export const transaccionRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        usuarioid: z.number(),
        canchaid: z.number(),
        deporteId: z.number(),
        descripcion: z.string(),
        monto: z.number(),
        horario: z.date(),
        estado: z.number(),
    })
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(transaccion).values(input);
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.transaccion.findMany();
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        usuarioid: z.number(),
        canchaid: z.number(),
        deporteId: z.number(),
        descripcion: z.string(),
        monto: z.number(),
        horario: z.date(),
        estado: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await db.update(transaccion).set(input).where(eq(transaccion.id, input.id));
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const channel = await db.query.transaccion.findFirst({
        where: eq(transaccion.id, input.id),
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
      await db.delete(transaccion).where(eq(transaccion.id, input.id));
    }),
});

// export const transaccionRouter = createTRPCRouter({
//     create: publicProcedure.input(z.object({ numeroOrden: z.string(),transaccion_Compradorid: z.number(),
//         transaccion_Vendedorid: z.number(), bancoid: z.number(),monto: z.number(),
//         Estado: z.number(),descripcion: z.string(), Fecha_emision: z.number(), Fecha_entrega: z.number(),
//         createdAt: z.number(), updatedAt: z.number() }))
//         .mutation(async ({ ctx, input }) => {
//         // simulate a slow db call
//         await new Promise((resolve) => setTimeout(resolve, 1000))

//         await ctx.db.insert(transaccion).values({
//             numeroOrden: input.numeroOrden,
//             transaccion_Compradorid: input.transaccion_Compradorid,
//             transaccion_Vendedorid: input.transaccion_Vendedorid,
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
