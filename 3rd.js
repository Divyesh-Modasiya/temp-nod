const os = require('os')

const user = os.userInfo()
console.log(user)
console.log(`the system up times is ${os.uptime} seconds`)