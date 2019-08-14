import { app, BrowserWindow, screen, Menu, dialog } from 'electron';
import * as path from 'path';
import * as url from 'url';
import MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;

const jsn = require('./package.json');

let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function createMenu() {
  const template: Array<MenuItemConstructorOptions> = [
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Version',
          click: function() {

            const infoString = `Version: ${jsn.version}\nAuthor: ${jsn.author.name}\nⓒ All rights reserved`;

            dialog.showMessageBox({
              type: 'info',
              title: 'Version',
              message: infoString
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function createWindow() {

  const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null;
  });

}

try {
  app.on('ready', function () {
    createWindow();
    createMenu();
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  dialog.showErrorBox('Error', e);
}
