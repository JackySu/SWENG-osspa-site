FROM httpd:2.4
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./extra/my-httpd-ssl.conf /usr/local/apache2/conf/extra/httpd-ssl.conf
COPY ./extra/index.html /usr/local/apache2/htdocs/index.html
RUN chmod -R 777 /usr/local/apache2/logs
