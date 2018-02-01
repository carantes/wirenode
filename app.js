const { spawn } = require('child_process')

const wiremock = spawn('java', [
  '-jar',
  './bin/wiremock-standalone-2.14.0.jar',
  '--root-dir',
  __dirname
])

wiremock.stdout.on('data', data => {
  console.log(`stdout: ${data}`)
})

wiremock.stderr.on('data', data => {
  console.log(`stderr: ${data}`)
})

wiremock.on('close', code => {
  console.log(`child process exited with code ${code}`)
})
