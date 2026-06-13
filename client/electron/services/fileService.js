import fs from "fs";
import path from "path";
import db from "../database/db.js";

const uploadDir = path.join(process.cwd(), "electron/storage/uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export function saveFile(file) {
  const filePath = path.join(uploadDir, file.name);

  fs.writeFileSync(filePath, Buffer.from(file.buffer));

  db.prepare(
    `
    INSERT INTO files (name, path, category)
    VALUES (?, ?, ?)
  `,
  ).run(file.name, filePath, file.category || "General");

  return true;
}

export function getFiles() {
  return db.prepare("SELECT * FROM files ORDER BY createdAt DESC").all();
}
