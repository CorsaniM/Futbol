import { type Config } from "drizzle-kit";

import { env } from "app/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "libsql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["futbol_*"],
} satisfies Config;
