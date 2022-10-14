const token = `G0Qzy8XnQT05ViKSAdVzGqvSA4su5DaUllKu8XCGRBt`
const lineNotify = require(`line-notify-nodejs`)(token)

let data = `Hello from nodejs`

lineNotify.notify({
    message: data,
  }).then(() => {
    console.log(`send completed : ${data}`);
  });