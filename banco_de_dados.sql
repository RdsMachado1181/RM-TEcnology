



-- Criação do banco de dados
CREATE DATABASE meu_banco_de_dados;

-- Usando o banco de dados
USE meu_banco_de_dados;

-- Criação de uma tabela de exemplo
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);
