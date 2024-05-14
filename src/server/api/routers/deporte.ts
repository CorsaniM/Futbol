import { eq } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "app/server/api/trpc";
import { db } from "app/server/db";
import { deporte } from "app/server/db/schema";

export const deporteRouter = createTRPCRouter({
  create: publicProcedure
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

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.deporte.findMany();
  }),

  update: publicProcedure
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

  get: publicProcedure
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

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      await db.delete(deporte).where(eq(deporte.id, input.id));
    }),
});


