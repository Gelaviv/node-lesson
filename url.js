const url = require('url')
const route = "http://localhost:5000/addUser?username=Kazeem&age=32"
console.log(route)
let ul = url.parse(route,true);
console.log(ul.hostname)
console.log(ul.pathname)
console.log(ul.search)
params = ul.query
console.log(params.username)
console.log(params.age)