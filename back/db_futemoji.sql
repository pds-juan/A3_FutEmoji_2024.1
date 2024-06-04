CREATE DATABASE IF NOT EXISTS futemoji;

USE futemoji;

CREATE TABLE IF NOT EXISTS jogadores (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
);

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
    nivel VARCHAR(13) NOT NULL
);

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
    pergunta VARCHAR(650),
    resposta VARCHAR(100),
    emojis VARCHAR(10),
    nome_time VARCHAR(45)
);