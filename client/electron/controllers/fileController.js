import { saveFile, getFiles } from "../services/fileService";
import { shell } from "electron";

export function uploadFile(file) {
  return saveFile(file);
}

export function fetchFile() {
  return getFiles(file);
}

export function openFile(filepath) {
  shell.openPath(filepath);
}
