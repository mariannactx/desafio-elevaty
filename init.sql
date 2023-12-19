CREATE TABLE clientes (
    ID SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    data_de_nascimento DATE NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    cartoes_de_credito VARCHAR(255) NOT NULL,
    fatura VARCHAR(255) NOT NULL
);