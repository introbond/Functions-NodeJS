require('dotenv').config();
const lineNotify = (data) => {
    const lineNotify = require(`line-notify-nodejs`)(process.env.TOKEN_API_LINE)
    lineNotify.notify({
        message: data,
    }).then(() => {
        console.log(`line send completed : ${data}`);
        return data
    });
}

module.exports = lineNotify