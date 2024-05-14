import { relations, sql } from "drizzle-orm";
import { date } from "drizzle-orm/pg-core";
import {
  index,
  int,
  primaryKey,
  sqliteTableCreator,
  text,
} from "drizzle-orm/sqlite-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `futbol_${name}`);


export const users = createTable(
  "user",
  {
    id: text("id").primaryKey(),
    email: text("email", { length: 256 }).unique().notNull(),
    name: text("name", { length: 256 }),
    picture: text("picture"),
    dueno: int("dueno", { mode: "boolean" }).default(false),
  },
  (example) => ({
    emailIndex: index("user_email_idx").on(example.email),
  })
);

export const usuario = createTable(
  "usuario",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    email: text("email").unique(),
    name: text("name"),
    telefono: text("telefono"),
    documento: text("documento"),
    picture: text("picture"),
    contraseña: text("contraseña"),
    ubicacionPreferida: text('ubicacionPreferida'),
    esDueno: text('esDueno')
  },
);

export const cancha = createTable(
  "cancha",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    razon_Social: text("razonSocial"),
    email: text("email"),
    domicilio: text("domicilio"),
    localidad: text("localidad"),
    tamanos: text("tamanos"),
    Estado: int("Estado"),
    telefono: text("telefono"),
    picture: text("picture"),
  },
);
export const transaccion = createTable(
  "transaccion",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    usuarioid: int("usuarioId").references(() => usuario.id).notNull(),
    canchaid: int("canchaId").references(() => cancha.id).notNull(),
    deporteId: int("deporteId").references(() => deporte.id).notNull(),
    horario: int("horario", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
    descripcion: text("descripcion"),
    monto: int("monto").notNull(),
    estado: int('estado'),

  },
);

  export const deporte = createTable(
    "deporte",
    {
      id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
      name: text("name"),
      tipo: int("tipo"),
  
    },
);
