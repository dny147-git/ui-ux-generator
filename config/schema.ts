import { date, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(10),
});
export const projectTable = pgTable("project", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId: varchar().notNull().unique(),
  userInput: varchar(),
  device: varchar(),
  createdAt: date().defaultNow(),
  config: json(),
  userEmail: varchar()
    .references(() => usersTable.email)
    .notNull(),
});
