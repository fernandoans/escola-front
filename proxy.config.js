const proxy = [{
    context: '/laboratorio',
    target: 'http://localhost:8080',
    pathRewrite: { '^/laboratorio': '' }
}];
module.exports = proxy;