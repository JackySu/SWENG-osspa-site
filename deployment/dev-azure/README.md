https://cert-manager.io/docs/configuration/acme/dns01/azuredns/

- Setup the Cert manager Operator
- Configure Azure DNS Server + Admin access (Also create secrets in OCP)
https://voyagermesh.com/docs/v2022.04.13/guides/cert-manager/dns01_challenge/azure-dns/
- Create the Issuer (issuer.yaml)
- Create Certificates (certificate.yaml)


For the traffic to go from Domain to the actual Pod
Domain -> DNS Server -> OCP Router Ingress -> Service(Node)

How Cert works?

Cert -> Issuer -> letsencrypt(Register) -> Challenges(DNS) -> DNS Server (Check TXT rec) -> letsencrypt(Issue Cert) -> Stored In secrets