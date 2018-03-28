let http = require('http');

http.get('https://www.imooc.com/index/getstarlist', (res) => {
  let data = '';
  console.log(res);
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    let result = JSON.parse(data);
    console.log('result:' + result);
  })
})

// http.get('../package.json');
