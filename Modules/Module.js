//todo:Put the logs in the correct order
import { createRequire } from "module";
const require = createRequire(import.meta.url);

require('./file1.js')
import './file2.mjs'
import './file3.mjs'

function getModule() {
   import('./file4.mjs')
   require('./file5.js')
}

getModule()

// file1.js
console.log("file1.js")
module.exports = {}

// file2.mjs
console.log("file2.mjs")
export default {}

// file3.mjs
await new Promise((res) => setTimeout(() => res(), 0))
console.log("file3.mjs")
export default {}

// file4.mjs
console.log("file4.mjs")
export default {}

// file5.mjs
console.log("file5.js")
module.exports = {}

/*
file1.js 1
file2.js 2
file3.js 3
file4.js 5
file5.js 4
 */