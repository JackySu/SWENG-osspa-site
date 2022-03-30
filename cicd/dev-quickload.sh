#!/bin/sh
  
pm2 delete 0

cd ../dev/osspa-site

git pull

pm2 start server.js --watch=true

cd ~/ci