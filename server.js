const express = require('express'); //your original BE server
const app = express();

const webpack = require('webpack');
var path = require('path');
const middleware = require('webpack-dev-middleware'); //webpack hot reloading middleware
const config = require('./webpack.prod.js');
const compiler = webpack(config); //move your `devServer` config from `webpack.config.js`
const history = require('connect-history-api-fallback');
var PORT = 8080;

const {createProxyMiddleware} = require("http-proxy-middleware");

app.use(express.static(__dirname + '/asset'));
app.use(history());

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "dist")));
  
}else{
  PORT=8081;
  app.use( middleware(compiler, {
    // webpack-dev-middleware options
  }),
  );
}

app.get('/api',function(req,res){  
    res.send('<p>This is a api Data</p>');  
}); 
const root = express();
const contextPath='/architect/portfolio';  
root.use(contextPath, app)

app.use(
  "/redhatdemocentral",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true
  })
);

app.use(
  "/osspa",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true
  })
);

app.use(
  "/images/intro-marketectures",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/intro-marketectures':'osspa/osspa-content/-/raw/main/images/intro-marketectures' 
    }
  })
);
app.use(
  "/architect/images/intro-marketectures",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/architect/images/intro-marketectures':'osspa/osspa-content/-/raw/main/images/intro-marketectures' 
    }
  })
);

app.use(
  "/images/logical-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/logical-diagrams':'osspa/osspa-content/-/raw/main/images/logical-diagrams' 
    }
  })
);

app.use(
  "/images/schematic-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/schematic-diagrams':'osspa/osspa-content/-/raw/main/images/schematic-diagrams' 
    }
  })
);

app.use(
  "/images/detail-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/detail-diagrams':'osspa/osspa-content/-/raw/main/images/detail-diagrams' 
    }
  })
);


app.listen(PORT, () => console.log('Portfolio Public Site listening on port 8081!'))
