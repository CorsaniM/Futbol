import { createTRPCRouter, protectedProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  current: protectedProcedure.query(async ({ ctx }) => {
    return {
      user: ctx.session.user,
      isDueno: ctx.isDueno,
    };
  }),
});
