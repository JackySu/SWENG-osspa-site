const express = require('express'); //your original BE server
const app = express();

const webpack = require('webpack');
var path = require('path');
const middleware = require('webpack-dev-middleware'); //webpack hot reloading middleware
const config = require('./webpack.prod.js');
const compiler = webpack(config); //move your `devServer` config from `webpack.config.js`
const history = require('connect-history-api-fallback');

const {createProxyMiddleware} = require("http-proxy-middleware");

app.use(history());

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "dist")));
}else{
  app.use( middleware(compiler, {
    // webpack-dev-middleware options
  }),
  );
}

app.get('/api',function(req,res){  
    res.send('<p>This is a api Data</p>');  
}); 

app.use(
  "/redhatdemocentral",
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
      '^/images/intro-marketectures':'redhatdemocentral/portfolio-architecture-examples/-/raw/main/images/intro-marketectures' 
    }
  })
);

app.use(
  "/images/logical-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/logical-diagrams':'redhatdemocentral/portfolio-architecture-examples/-/raw/main/images/logical-diagrams' 
    }
  })
);

app.use(
  "/images/schematic-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/schematic-diagrams':'redhatdemocentral/portfolio-architecture-examples/-/raw/main/images/schematic-diagrams' 
    }
  })
);

app.use(
  "/images/detail-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/detail-diagrams':'redhatdemocentral/portfolio-architecture-examples/-/raw/main/images/detail-diagrams' 
    }
  })
);


app.listen(8081, () => console.log('Portfolio Public Site listening on port 8080!'))
