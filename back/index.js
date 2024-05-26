import express from 'express';
import cors from 'cors';
import db from './db.js';
import { OpenAI } from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY)

const app = express();
app.use(express.json());
app.use(cors());

app.post('/salvar-nome', async (req, res) => {
    const { nome } = req.body;

    try {
        const connection = await db;
        await connection.execute('INSERT INTO jogadores (nome) VALUES (?)', [nome]);

    } catch (error) {
        console.log('Erro ao salvar o nome:', error);
        res.status(500).send('Erro ao salvar o nome no banco de dados.');
    }
});

app.post('/conversar', async (req, res) => {
    // const { prompt } = req.body;

    const model = 'gpt-3.5-turbo';
    const role = 'user';
    const max_tokens = 50;

    const promptCompleto = `Você vai me enviar um conjunto de 3 emojis, que representam um time de futebol. Seguem algumas regras: você NÃO deve utilizar emojis que possuem letras; você NÃO pode utilizar emojis que só possuem cores; seja criativo nos emojis; quero emojis que representem os times, não use emojis aleatórios; quero que utilize uma base vasta de emojis, o céu é o limite; não quero repetição de times; use sempre emojis diferentes para cada time; escolha apenas times de campeonatos ingleses; APENAS UM TIME POR VEZ. A resposta deve ser exatamente no seguinte padrão, nada além disso: 'emoji 1''emoji 2''emoji 3''nome do time que os emojis representam'.` // ${prompt}`;

    const completion = await openai.chat.completions.create({
        messages: [{ role: role, content: promptCompleto }],
        model: model,
        max_tokens: max_tokens
    });

    const resposta = completion.choices[0].message.content;
    const respostaFiltrada = resposta.replace(/\s/g, '');
    const emojis = respostaFiltrada.substring(0, 6);
    const nomeTime = respostaFiltrada.substring(6);

    try {
        const connection = await db;

        await connection.execute('INSERT INTO consultas (data_consulta, pergunta, resposta) VALUES (?, ?, ?)', [new Date(), promptCompleto, resposta]);

        res.json({ promptCompleto, resposta });

    } catch (error) {
        console.log('Erro ao incluir as informações no banco de dados:', error);
        res.status(500).send('Um erro inesperado ocorreu ao incluir as informações no banco de dados.');
    }
});

app.get('/consultar', async (req, res) => {

    try {
        const connection = await db;

        const [jogadores] = await connection.execute('SELECT * FROM jogadores');
        const [campeonatos] = await connection.execute('SELECT * FROM campeonatos');
        const [pontuacao] = await connection.execute('SELECT * FROM pontuacao');
        const [consultas] = await connection.execute('SELECT * FROM consultas');

        const [ultimaConversa] = await connection.execute('SELECT pergunta, resposta FROM consultas ORDER BY data_consulta DESC LIMIT 1');

        console.log("\nJogadores:\n", jogadores, "\n\nCampeonatos:\n", campeonatos, "\n\nPontuação:\n", pontuacao, "\n\nConsultas:\n", consultas);

        res.json({ ultimaConversa });

    } catch (error) {
        console.log('Erro ao realizar a consulta:', error);
        res.status(500).send('Um erro inesperado ocorreu ao realizar a consulta.');
    }
});

const porta = 3001;
app.listen(porta, () => {
    console.log(`Porta ${porta}.`)
});