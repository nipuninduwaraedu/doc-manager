import { app, BrowserWindow } from "electron";
import path from "path";

import "./routes/ipcRoutes.js";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(process.cwd(), "electron/preload.js"),
      contextIsolation: true
    }
  });

  mainWindow.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);