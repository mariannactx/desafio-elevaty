FROM postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB desafio-elevaty
COPY init.sql /docker-entrypoint-initdb.d/