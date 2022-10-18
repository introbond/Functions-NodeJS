require('dotenv').config();
const token = process.env.TOKEN_API_LINE
const lineNotify = require(`line-notify-nodejs`)(token)

let data = `Hello from nodejs`

lineNotify.notify({
    message: data,
  }).then(() => {
    console.log(`send completed : ${data}`);
  });
