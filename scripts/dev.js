const spawn = require('node:child_process').spawn

spawn('npm', ['run', 'watch:demo'], {
  stdio: 'inherit'
})

spawn('npm', ['run', 'playground'], {
  stdio: 'inherit'
})