import { ipcMain } from "electron";
import {
  uploadFile,
  fetchFiles,
  openFile
} from "../controllers/fileController.js";

ipcMain.handle("files:upload", (e, file) => {
  return uploadFile(file);
});

ipcMain.handle("files:get", () => {
  return fetchFiles();
});

ipcMain.handle("files:open", (e, path) => {
  return openFile(path);
});