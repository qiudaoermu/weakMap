const { app } = require('electron')
console.log(app)
app.on('window-all-closed', () => {
  app.quit()
})
