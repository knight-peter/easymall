let user = require('./User');

console.log(`userName:${user.userName}`);
console.log(`I'm ${user.userName},I say ${user.sayHello()}`)

let http = require('http');
let url = require('url');
let util = require('util');

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');

  let url_text = url.parse(req.url);
  console.log('url:' + req.url); //字符串
  console.log('parse:' + url.parse(req.url)); //object 对象
  console.log('inspect:' + util.inspect(url_text)); //把对象转换成字符串，调试用
  res.end(`Hello,Node.js,url:${util.inspect(url_text)}`);
})

server.listen(3000, '127.0.0.1', () => {
  console.log('服务器已经运行，请打开浏览器，输入 http://127.0.0.1:3000 来进行访问');
})
