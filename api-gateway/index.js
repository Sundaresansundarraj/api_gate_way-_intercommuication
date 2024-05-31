const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware')


const app = express();

const routes = {
    '/user':'http://localhost:3001',
    '/post': 'http://localhost:3002',
    '/commint': 'http://localhost:3003'
}


for(const route in routes){
    const target = routes[route];
    app.use(route,createProxyMiddleware({target}))}

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
