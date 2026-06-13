import { saveFile, getFiles } from "../services/fileService";
import { shell } from "electron";

export function uploadFile(file) {
  return saveFile(file);
}

export function fetchFiles() {
  return getFiles();
}

export function openFile(filepath) {
  return shell.openPath(filepath);
}
