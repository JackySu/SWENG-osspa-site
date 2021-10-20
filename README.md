# Portfolio Architecture Website


## Quick-start

```bash
git clone https://gitlab.com/redhatdemocentral/portfolio-architecture-public-website
cd portfolio-architecture-public-website
npm install 
node server.js
```

Or run from Docker
```bash
docker pull quay.io/weimei79/pawebsite
docker run -d -p 8080:8080 quay.io/weimei79/pawebsite
```


## Update the PA, Product, Solution and Vertical list, 

* Link to the original doc (Red Hatter access ONLY, login required)
**  https://docs.google.com/spreadsheets/d/1FWVU3Dc_C5KLVh3NUQq-0rKL2yEUG2aL-ZeUwUOonaQ/

* For *Portfolio Architecture* list update in the website, 
** Export the PAList tab from doc as csv (`PAList.csv`), and place it in `/src/app/ArchitectureList`

* For *Product* list update in the website, 
**  Export the ProductNames tab from doc as csv (`ProductList.csv`), and place it in  `/src/app/ArchitectureList`

* For *Solution* lists update in the website, 
**  Export the Solutions tab from doc as csv (`SolutionList.csv`), and place it in  `/src/app/ArchitectureList`

* For *Vertical* lists update in the website, 
**  Export the Verticals tab from doc as csv (`VerticalList.csv`), and place it in  `/src/app/ArchitectureList`