const { createRequire } = require('node:module')
const require = createRequire(import.meta.url)

const readJSON = (path) => require(path)
module.exports=readJSON