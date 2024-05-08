import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { cancha } from "app/server/db/schema";

export const canchaRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        razon_Social: z.string(),
        email: z.string(),
        domicilio: z.string(),
        localidad: z.string(),
        tamaños: z.string(),
        Estado: z.number(),
        telefono: z.string(),
        picture: z.string(),
        createdAt:z.date(),
        updatedAt: z.date(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(cancha).values(input);
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.cancha.findMany();
  }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        razon_Social: z.string(),
        email: z.string(),
        domicilio: z.string(),
        localidad: z.string(),
        tamaños: z.string(),
        Estado: z.number(),
        telefono: z.string(),
        picture: z.string(),
        createdAt:z.date(),
        updatedAt: z.date(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await db.update(cancha).set(input).where(eq(cancha.id, input.id));
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const channel = await db.query.cancha.findFirst({
        where: eq(cancha.id, input.id),
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
      await db.delete(cancha).where(eq(cancha.id, input.id));
    }),
});


