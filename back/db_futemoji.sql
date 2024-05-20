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

CREATE TABLE IF NOT EXISTS dificuldade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nivel VARCHAR(13) NOT NULL,
    valor INT NOT NULL
);

INSERT INTO dificuldade (nivel, valor) VALUES
('Fácil', 1),
('Médio', 2),
('Difícil', 3);

CREATE TABLE IF NOT EXISTS pontuacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pontos INT NOT NULL,
    jogador_id INT,
    dificuldade_id INT,
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id),
    FOREIGN KEY (dificuldade_id) REFERENCES dificuldade(id)
);

CREATE TABLE IF NOT EXISTS consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_consulta DATETIME,
    pergunta VARCHAR(550),
    resposta VARCHAR(255)
);