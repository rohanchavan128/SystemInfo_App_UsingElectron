const {app,BrowserWindow} = require('electron');

let win;

function createWindow() {
    // Create Browser Window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/img/cpu.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    //Load index.html
    win.loadFile('index.html')
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file.',
    //     slashes: true

    // }));

    //open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}
//Run create window function
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'win32') {
        app.quit();
    }
});

//