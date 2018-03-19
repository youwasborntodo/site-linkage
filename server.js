// http://blog.csdn.net/qq_31411389/article/details/52442508
const http = require('http'); 
const url = require('url')
const requestHanders = require('./handleEvent.js');
const handle = {}

const server = http.createServer(function (request, response) {    
    
    // 发送 HTTP 头部     
    // HTTP 状态值: 200 : OK    
    // 内容类型: text/plain    
    response.writeHead(200, {'Content-Type': 'text/plain'});    
    
    // 发送响应数据 "Hello World"    
    response.end('---\n');    
}).listen(3000);   

const router = () => {
    const onRequest = (req, res) => {
        const pathName = url.parse(req.url).pathname;
        console.log('router==', pathName)
    }
}

export.router = router
export.start = start
export.upload = upload

handle['/'] = requestHanders.start;
handle['/start'] = requestHanders.start;
handle['/upload'] = requestHanders.upload;

server.start(router.route,handle); 
    
// 终端打印如下信息    
console.log('Server running at http://127.0.0.1:3000/');    