var remote = require('electron').remote

try {
  var msg = remote.require('./index.js').mainProcessFunction()
  console.log('expected relative require:', msg)
} catch (e) {
  console.error('error with expected relative require:', e)
}

try {
  var msg2 = remote.require('../../../src/index.js').mainProcessFunction()
  console.log('require relative to node_modules/electron-forge/lib/cli.js:', msg2)
} catch (e) {
  console.error('error with require relative to node_modules/electron-forge/lib/cli.js:', e)
}
