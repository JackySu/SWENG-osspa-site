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
  app.use(express.static(path.join(__dirname, "dist/architect/portfolio")));
  
}else{
  PORT=8081;
  app.use( middleware(compiler, {
    // webpack-dev-middleware options
  }),
  );
}

app.get('/api',function(req,res){  
    //console.log(req.hostname);
    res.send('<p>This is a api Data</p>');  
}); 
//const root = express();
//const contextPath='/architect/portfolio';  
//root.use(contextPath, app)

app.use(
  "/osspa",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true
  })
);

app.use(
  "/architect/portfolio/osspa",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/architect/portfolio/osspa':'https://gitlab.com/osspa' 
    }
  })
);

app.use(
  "/images/intro-marketectures",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/intro-marketectures':'osspa/portfolio-architecture-examples/-/raw/main/images/intro-marketectures' 
    }
  })
);
app.use(
  "/architect/images/intro-marketectures",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/architect/images/intro-marketectures':'osspa/portfolio-architecture-examples/-/raw/main/images/intro-marketectures' 
    }
  })
);

app.use(
  "/images/logical-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/logical-diagrams':'osspa/portfolio-architecture-examples/-/raw/main/images/logical-diagrams' 
    }
  })
);
app.use(
  "/architect/images/logical-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/logical-diagrams':'osspa/portfolio-architecture-examples/-/raw/main/images/logical-diagrams' 
    }
  })
);

app.use(
  "/images/schematic-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/schematic-diagrams':'osspa/portfolio-architecture-examples/-/raw/main/images/schematic-diagrams' 
    }
  })
);

app.use(
  "/architect/images/schematic-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/schematic-diagrams':'osspa/portfolio-architecture-examples/-/raw/main/images/schematic-diagrams' 
    }
  })
);

app.use(
  "/images/detail-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/detail-diagrams':'osspa/portfolio-architecture-examples/-/raw/main/images/detail-diagrams' 
    }
  })
);

app.use(
  "/architect/images/detail-diagrams",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/images/detail-diagrams':'osspa/portfolio-architecture-examples/-/raw/main/images/detail-diagrams' 
    }
  })
);



app.listen(PORT, () => console.log('Portfolio Public Site listening on port', PORT))


// Dynamically Generate the Template Tools
const { create } = require('xmlbuilder2');
const fs = require('fs');
var os = require("os");
var os_hostname = os.hostname();

var HOSTNAME = "www.redhat.com";
if(os_hostname=="portfolio-wnix-us" && PORT==8081){
  HOSTNAME="dev.osspa.org"
}else if(os_hostname=="portfolio-wnix-us"){
  HOSTNAME="osspa.org"
}else if(!os_hostname.startsWith("pawebsite")){
  HOSTNAME="localhost:"+PORT;
}

const xml_root = create({ version: '1.0' })
  .ele('templates')
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'/architect/portfolio/Templates/DetailDiagram.xml',title:'Detail Diagram',preview:'https://'+HOSTNAME+'/architect/portfolio/Templates/DetailDiagram.png',libs:''})
    .up()
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'architect/portfolio/Templates/LogicalDiagram.xml',title:'Logical Diagram',preview:'https://'+HOSTNAME+'/architect/portfolio/Templates/LogicalDiagram.png',libs:''})
    .up()
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'/architect/portfolio/Templates/SchematicDiagram.xml',title:'Schematic Diagram',preview:'https://'+HOSTNAME+'/architect/portfolio/Templates/SchematicDiagram.png',libs:''})
    .up()
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'/architect/portfolio/Templates/RedHatAllAssets.xml',title:'All Diagrams',preview:'https://'+HOSTNAME+'/architect/portfolio/Templates/RedHatAllAssets.png',libs:''})
  .up();



// convert the XML tree to string
const xml = xml_root.end({ prettyPrint: true });
let full_file_name = "./asset/architect/portfolio/tool/template.xml";
fs.writeFileSync(full_file_name, xml, function(err) {
    if (err) throw err;
});
1
