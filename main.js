var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 400,
    resizable: true
  });

  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
