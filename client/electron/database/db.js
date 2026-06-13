import Database from "better-sqlite3";

const db = new Database("files.db");

db.prepare(
    `CREATE TABLE IF NOT EXISTS files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  path TEXT,
  category TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)`
).run();

export default db;