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
  "/architect/portfolio/tool/gitlab.com/osspa",
  createProxyMiddleware({
    target: "https://gitlab.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/architect/portfolio/tool/gitlab.com/osspa':'https://gitlab.com/osspa' 
    }
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


//Reverse proxy for Solution Patterns
app.use(
  "/architect/portfolio/redhat-solution-patterns",
  createProxyMiddleware({
    target: "https://raw.githubusercontent.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/architect/portfolio/redhat-solution-patterns':'https://raw.githubusercontent.com/redhat-solution-patterns' 
    }
  })
);


//Reverse proxy for Validated Patterns
app.use(
  "/architect/portfolio/hybrid-cloud-patterns",
  createProxyMiddleware({
    target: "https://raw.githubusercontent.com/",
    changeOrigin: true,
    pathRewrite: {
      '^/architect/portfolio/hybrid-cloud-patterns':'https://raw.githubusercontent.com/hybrid-cloud-patterns' 
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
}

const xml_root = create({ version: '1.0' })
  .ele('templates')
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/DetailDiagram.xml',title:'Detail Diagram',preview:'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/DetailDiagram.png',libs:''})
    .up()
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/LogicalDiagram.xml',title:'Logical Diagram',preview:'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/LogicalDiagram.png',libs:''})
    .up()
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/SchematicDiagram.xml',title:'Schematic Diagram',preview:'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/SchematicDiagram.png',libs:''})
    .up()
    .ele('template', { section: 'Red Hat Templates' ,url: 'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/RedHatAllAssets.xml',title:'All Diagrams',preview:'https://'+HOSTNAME+'/architect/portfolio/tool/Templates/RedHatAllAssets.png',libs:''})
  .up();



// convert the XML tree to string
const xml = xml_root.end({ prettyPrint: true });
let full_file_name = "./asset/architect/portfolio/tool/template.xml";
fs.writeFileSync(full_file_name, xml, function(err) {
    if (err) throw err;
});
1
