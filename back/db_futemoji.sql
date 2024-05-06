CREATE DATABASE IF NOT EXISTS futemoji;

USE futemoji;

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

CREATE TABLE IF NOT EXISTS nivel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(13) NOT NULL
);

INSERT INTO nivel (nome) VALUES
('Fácil'),
('Médio'),
('Difícil');

SELECT * FROM campeonatos;
SELECT * FROM nivel;