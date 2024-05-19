import express from 'express';
import cors from 'cors';
import db from './db.js';
import { OpenAI } from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY)

const app = express();
app.use(express.json());
app.use(cors());

app.post('/teste', async (req, res) => {
    const { prompt } = req.body;

    const model = 'gpt-3.5-turbo';
    const role = 'user';
    const max_tokens = 50;

    const promptCompleto = `você vai me enviar um conjunto de 3 emojis, a partir desses emojis, preciso adivinhar o time ${prompt}.`

    const completion = await openai.chat.completions.create({
        messages: [{ role: role, content: promptCompleto }],
        model: model,
        max_tokens: max_tokens
    });

    const resposta = completion.choices[0].message.content;

    try {
        const connection = await db;

        await connection.execute('INSERT INTO tabela_logs (data_consulta, pergunta, resposta) VALUES (?, ?, ?)', [new Date(), promptCompleto, resposta]);

        const [jogadores] = await connection.execute('SELECT * FROM jogadores');
        const [campeonatos] = await connection.execute('SELECT * FROM campeonatos');
        const [pontuacao] = await connection.execute('SELECT * FROM pontuacao');
        const [logs] = await connection.execute('SELECT * FROM tabela_logs');

        console.log("\nJogadores:\n" , jogadores, "\n\nCampeonatos:\n", campeonatos,"\n\nPontuação:\n", pontuacao,"\n\nConsultas:\n", logs);

        res.json(resposta);

    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
    }
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Porta ${porta}.`)
});