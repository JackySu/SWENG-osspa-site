#!/bin/sh
  
pm2 delete 0

cd ../dev

rm -rf osspa-site-backup
mv osspa-site/ osspa-site-backup

git clone https://gitlab.com/osspa/osspa-site.git

cd osspa-site

npm install --legacy-peer-deps

npm run build

pm2 start server.js --watch=true

cd ~/ci