CREATE DATABASE IF NOT EXISTS futemoji;

USE futemoji;

CREATE TABLE IF NOT EXISTS jogadores (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
);

INSERT INTO jogadores (nome) VALUES
('Juan');

CREATE TABLE IF NOT EXISTS campeonatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
);

INSERT INTO campeonatos (nome) VALUES
('Brasileirão série A'),
('LaLiga'),
('Bundesliga'),
('Premier League'),
('Ligue 1'),
('Série A');

CREATE TABLE IF NOT EXISTS pontuacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dificuldade VARCHAR(13) NOT NULL,
    valor INT NOT NULL
);

INSERT INTO pontuacao (dificuldade, valor) VALUES
('Fácil', 1),
('Médio', 2),
('Difícil', 3);

CREATE TABLE IF NOT EXISTS tabela_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_consulta DATETIME
);


SELECT * FROM jogadores;
SELECT * FROM campeonatos;
SELECT * FROM pontuacao;
SELECT * FROM tabela_logs;