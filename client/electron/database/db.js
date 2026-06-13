import { app } from "electron";
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const userDataDir = app.getPath("userData");
const dbFile = path.join(userDataDir, "files.db");

if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir, { recursive: true });
}

const db = new Database(dbFile);

db.prepare(
  `CREATE TABLE IF NOT EXISTS files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  path TEXT,
  category TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)`,
).run();

export default db;
