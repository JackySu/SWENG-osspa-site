#!/bin/sh
  

#git clone -b prod https://gitlab.com/osspa/osspa-site.git


echo "Going to Production Directory ~/prod/osspa-site"
echo "-------------------------------------------------------------------------"

echo "Please enter Gitlab pwd for account 'rhosspa'"
read gitpwd

echo $gitpwd

echo "Please enter Quay pwd for account 'osspa_cicd'"
read quaypwd

echo $quaypwd

cd ../prod
rm -rf osspa-site

echo ""
echo "Get main branch and merge version branch into prod.....   "
# Checkout master branch and merge version branch into prod
git clone https://gitlab.com/osspa/osspa-site.git
cd osspa-site


echo ""
echo "Checkout prod Branch......."
git checkout prod

echo ""
echo "Merge main and prod Branch...."
git merge main

echo ""
echo "Push merged commit......"
git push https://rhosspa:$gitpwd@gitlab.com/osspa/osspa-site.git

echo ""
echo "-------------------------------------------------------------------------"
echo "Release PROD complete"




echo "Remove previous Tooling workspace"
cd ~/prod
rm -rf osspa-tool


echo "Checkout prod branch"
git clone https://gitlab.com/osspa/osspa-tool.git
cd osspa-tool

echo ""
echo "Checkout tooling prod Branch......."
git checkout prod

echo ""
echo "Merge tooling main and prod Branch...."
git merge main

echo ""
echo "Push tooling merged commit......"
git push https://rhosspa:$gitpwd@gitlab.com/osspa/osspa-tool.git

cp -R images ../osspa-site/asset/architect/portfolio/tool/
cp -R Libraries ../osspa-site/asset/architect/portfolio/tool/
cp -R Templates ../osspa-site/asset/architect/portfolio/tool/
cp -R index.html ../osspa-site/asset/architect/portfolio/tool/

echo ""
echo "-------------------------------------------------------------------------"
echo "Release Tooling PROD complete"

cd ~/prod/osspa-site

podman image prune

podman login -u osspa_cicd -p $quaypwd quay.io

podman tag quay.io/osspa/pawebsite:latest quay.io/osspa/pawebsite:$(date +"%m_%d_%Y")
podman push quay.io/osspa/pawebsite:$(date +"%m_%d_%Y")

#podman login --authfile ~/.podmanauth quay.io
echo ""
echo "Build pawebsite from PROD branch"
echo "-------------------------------------------------------------------------"
podman build . -t pawebsite

echo ""
echo "Get image built number"
podman tag localhost/pawebsite quay.io/osspa/pawebsite:latest
podman push quay.io/osspa/pawebsite:latest

#echo ""
#echo "Start PROD Server"
#podman stop pawebsite
#podman rm pawebsite
#podman run -d -p 8080:8080 --name="pawebsite" -e process.env.NODE_ENV=production quay.io/osspa/pawebsite:latest

cd ~/ci