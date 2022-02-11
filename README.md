# Portfolio Architecture Website


## Quick-start

```bash
git clone https://gitlab.com/osspa/osspa-site.git
cd osspa-site
npm install --legacy-peer-deps
node server.js
```

Or run from Docker
```bash
docker pull quay.io/osspa/pawebsite
docker run -d -p 8081:8081 quay.io/osspa/pawebsite
```

You will be able to access the website locally via 
```
http://localhost:8081
```

## Update the PA, Product, Solution and Vertical list, 

* Link to the original doc (Red Hatter access ONLY, login required)
**  https://docs.google.com/spreadsheets/d/1FWVU3Dc_C5KLVh3NUQq-0rKL2yEUG2aL-ZeUwUOonaQ/

* For *Portfolio Architecture* list update in Catalog Page, 
** Export the PAList tab from doc as csv (`PAList.csv`), and place it in `/src/app/ArchitectureList`

* For *Product* list update in Catalog Page, 
**  Export the ProductNames tab from doc as csv (`ProductList.csv`), and place it in  `/src/app/ArchitectureList` this also provides links in the Detail that redirect people to indiviual product links. 

* For *Solution* list update in Catalog Page, 
**  Export the Solutions tab from doc as csv (`SolutionList.csv`), and place it in  `/src/app/ArchitectureList`

* For *Vertical* list update in Catalog Page, 
**  Export the Verticals tab from doc as csv (`VerticalList.csv`), and place it in  `/src/app/ArchitectureList`

* For *Resources* list update in Detail paget, 
**  Export the Verticals tab from doc as csv (`DetailLink.csv`), and place it in  `/src/app/ArchitectureDetail`