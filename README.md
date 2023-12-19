# Desafio Elevaty

## Iniciar aplicações

- Banco de dados: verifique se o postgresql está rodando na sua máquina na porta 5432. Se estiver, desative o serviço. Então, na raiz do projeto, executar no terminal 
```bash
docker build -t postgres-db ./
docker run -d --name postgresdb-container -p 5432:5432 postgres-db
```

- API: na pasta `api`, executar no terminal `yarn && yarn start`
- Interface: na pasta `client`, executar no terminal `yarn && yarn start`

## Uso da API

- Formato de data: yyyy-mm-dd

### 1. Ver lista de clientes
```bash
curl --request GET \
  --url http://localhost:3001/api/clientes
```

### 2. Ver cliente (http://localhost:3001/api/clientes/:id)
```bash
curl --request GET \
  --url http://localhost:3001/api/clientes/2
```

### 3. Criar cliente

```bash
  curl --request POST \
  --url http://localhost:3001/api/clientes \
  --header 'Content-Type: application/json' \
  --data '{
  "nome": "Maria da Silva",
  "email": "mariadasilva@gmail.com" ,
  "data_de_nascimento": "2023-12-14",
  "telefone": "83912345678",
  "endereco": "Rua Fulano de tal, 334. Bairro, Cidade - País",
  "cartoes_de_credito": "1234567890, 1234567890",
  "fatura": "https://drive.google.com/file/d/1rmhZT5HxOfdrHOZsOSBqfkwDCwNozcIA/view?usp=drive_link"
}'
```

### 4. Editar cliente (http://localhost:3001/api/clientes/:id)
```bash
curl --request PUT \
  --url http://localhost:3001/api/clientes/1 \
  --header 'Content-Type: application/json' \
  --data '{
  "nome": "Maria Silva",
  "email": "mariasilva@gmail.com" ,
  "data_de_nascimento": "2023-12-14",
  "telefone": "83912345678",
  "endereco": "Rua Sicrana de tal, 334. Bairro, Cidade - País",
  "cartoes_de_credito": "1234567890, 1234567890",
  "fatura": "https://drive.google.com/file/d/1rmhZT5HxOfdrHOZsOSBqfkwDCwNozcIA/view?usp=drive_link"
}'
```
### 5. Excluir cliente (http://localhost:3001/api/clientes/:id)
```bash
curl --request DELETE \
  --url http://localhost:3001/api/clientes/1
```