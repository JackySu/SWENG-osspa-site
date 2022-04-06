#!/bin/sh
  
pm2 delete 0

cd ~/dev

rm -rf osspa-site

git clone https://gitlab.com/osspa/osspa-site.git

echo "Remove previous Tooling workspace"
cd ~/dev
rm -rf osspa-tool


echo "Checkout prod branch"
git clone https://gitlab.com/osspa/osspa-tool.git
cd osspa-tool

cp -R images/ ../osspa-site/asset/architect/portfolio/tool/
cp -R Libraries/ ../osspa-site/asset/architect/portfolio/tool/
cp -R Templates/ ../osspa-site/asset/architect/portfolio/tool/
cp -R index.html ../osspa-site/asset/architect/portfolio/tool/

cd ~/dev/osspa-site

npm install

npm run build

pm2 start server.js --watch=true

cd ~/ci