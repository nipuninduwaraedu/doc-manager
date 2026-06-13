import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getFiles: () => ipcRenderer.invoke("files:get"),
  uploadFile: (file) => ipcRenderer.invoke("files:upload", file),
  openFile: (path) => ipcRenderer.invoke("files:open", path),
});
