import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { db } from "app/server/db";
import { deporte } from "app/server/db/schema";

export const deporteRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        tipo: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(deporte).values(input);
    }),

  list: protectedProcedure.query( async({ }) => {
    const deporte = await db.query.deporte.findMany();
    return deporte;
  }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        tipo: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await db.update(deporte).set(input).where(eq(deporte.id, input.id));
    }),

  get: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const channel = await db.query.deporte.findFirst({
        where: eq(deporte.id, input.id),
      });

      return channel;
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      await db.delete(deporte).where(eq(deporte.id, input.id));
    }),
});


