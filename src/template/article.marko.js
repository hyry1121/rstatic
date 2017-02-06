function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html lang=\"zh-cmn-Hans\"> <head> <meta charset=\"utf-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"> <title>文章详情</title> </head> <body> <h1>Hello " +
      escapeXml(data.name) +
      "!</h1> </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
