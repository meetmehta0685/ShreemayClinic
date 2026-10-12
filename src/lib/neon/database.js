import "server-only";
import { neon } from "@neondatabase/serverless";

let database;

export function isNeonDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function getNeonDatabase() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;

  if (!database) database = neon(connectionString);
  return database;
}
