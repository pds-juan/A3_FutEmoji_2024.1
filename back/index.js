import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/hello-world', (req, res) => {
    res.send('Hello, World!');
});

app.get('/consultar', async (req, res) => {
    try {
        const connection = await db;

        await connection.execute('INSERT INTO tabela_logs (data_consulta) VALUES (?)', [new Date()]);

        const [jogadores] = await connection.execute('SELECT * FROM jogadores');
        const [campeonatos] = await connection.execute('SELECT * FROM campeonatos');
        const [pontuacao] = await connection.execute('SELECT * FROM pontuacao');
        const [logs] = await connection.execute('SELECT * FROM tabela_logs');

        res.status(200).json({ jogadores, campeonatos, pontuacao, logs });
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).send('Um erro inesperado ocorreu ao realizar a consulta.');
    }
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Porta ${porta}.`)
});