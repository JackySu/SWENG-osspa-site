
echo "Going to Production Directory /osspa-site"
echo "-------------------------------------------------------------------------"


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
git push https://gitlab.com/osspa/osspa-site.git

echo ""
echo "-------------------------------------------------------------------------"
echo "Release PROD complete"




echo "Remove previous Tooling workspace"
cd ..
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
git push https://gitlab.com/osspa/osspa-tool.git

cp -R images ../osspa-site/asset/architect/portfolio/tool/
cp -R Libraries ../osspa-site/asset/architect/portfolio/tool/
cp -R Templates ../osspa-site/asset/architect/portfolio/tool/
cp -R index.html ../osspa-site/asset/architect/portfolio/tool/

echo ""
echo "-------------------------------------------------------------------------"
echo "Release Tooling PROD complete"

cd ../osspa-site

docker image prune



docker tag quay.io/osspa/pawebsite:latest quay.io/osspa/pawebsite:$(date +"%m_%d_%Y")
docker push quay.io/osspa/pawebsite:$(date +"%m_%d_%Y")

echo ""
echo "Build pawebsite from PROD branch"
echo "-------------------------------------------------------------------------"
docker build . -t pawebsite

echo ""
echo "Get image built number"
docker tag pawebsite quay.io/osspa/pawebsite:latest
docker push quay.io/osspa/pawebsite:latest


cd ..