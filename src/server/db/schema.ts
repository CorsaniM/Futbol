import { relations, sql } from "drizzle-orm";
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
  },
);

export const cancha = createTable(
  "cancha",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    razon_Social: text("razonSocial", { length: 256 }),
    email: text("email"),
    domicilio: text("domicilio"),
    localidad: text("localidad"),
    tamaños: text(""),
    Estado: int("Estado").notNull(),
    telefono: text("telefono"),
    picture: text("picture"),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("updatedAt", { mode: "timestamp" }),
  },
);
export const transaccion = createTable(
  "transaccion",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    usuarioid: int("banco").references(() => usuario.id),
    canchaid: int("cheque").references(() => cancha.id),
    descripcion: text("descripcion"),
    monto: int("monto").notNull(),
  },
);
