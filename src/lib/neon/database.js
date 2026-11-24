import "server-only";
import { neon } from "@neondatabase/serverless";

let database;

export function isNeonDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function getNeonDatabase() {
  // Tolerate a value pasted with its .env quotes, e.g. "postgresql://...".
  const connectionString = process.env.DATABASE_URL?.trim().replace(/^(["'])(.*)\1$/, "$2");
  if (!connectionString) return null;

  if (!database) database = neon(connectionString);
  return database;
}
