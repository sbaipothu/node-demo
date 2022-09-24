// Modules - Encapsulated Code (only shares minimum)
// CommonJs, every file is module (by default)

const names = require('./2-names');
const sayHi = require('./4-utils')
const data = require('./5-alternative-flavour')

console.log(data)
require('./6-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)



