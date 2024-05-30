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
    dueno: int("esDueno", { mode: "boolean" }).notNull().default(false),
    ubicacionPreferida: text('ubicacionPreferida'),
  },
  (example) => ({
    emailIndex: index("user_email_idx").on(example.email),
  })
);

export const usuarioDueno = createTable(
  "usuarioDueno",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    email: text("email").unique(),
    name: text("name"),
    razonSocial:text("razonSocial"),
    telefono: text("telefono"),
    documento: text("documento"),
    picture: text("picture"),
    contraseña: text("contraseña"),
    ubicacionPreferida: text('ubicacionPreferida'),
    esDueno: int("esDueno", { mode: "boolean" }).notNull().default(false),
    canchasId: int("canchasId").notNull(),
    transaccionesId: int("canchasId").notNull(),

  },
);

export const cancha = createTable(
  "cancha",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    razon_Social: text("razonSocial"),
    email: text("email"),
    telefono: text("telefono"),
    picture: text("picture"),
    domicilio: text("domicilio"),
    localidad: text("localidad"),
    cp: text("localidad"),
    reservasId: int("reservasId"),
    horariosDisponible:int("horario", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
    horariosOcupados: int("horario", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
    tamanos: text("tamanos"),
    Estado: int("Estado"),
    duenoId: int("duenoId"),
  },
);

export const transaccion = createTable(
  "transaccion",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    usuarioid: text("usuarioId").notNull(),
    canchaid: int("canchaId")
    // .references(() => cancha.id)
    .notNull(),
    deporteId: int("deporteId")
    // .references(() => deporte.id)
    .notNull(),
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


