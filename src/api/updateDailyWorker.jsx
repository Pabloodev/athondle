import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const jsonPath = path.resolve('./db.json');

    // Leia o arquivo JSON atual
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    // Obtenha os trabalhadores
    const workers = jsonData.workers;

    // Selecione um dailyWorker aleatório
    const randomIndex = Math.floor(Math.random() * workers.length);
    const newDailyWorker = workers[randomIndex];

    // Atualize o arquivo JSON
    jsonData.dailyWorker = newDailyWorker;
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');

    return res.status(200).json({ message: 'Daily Worker atualizado!', dailyWorker: newDailyWorker });
  }

  // Método não permitido
  return res.status(405).json({ message: 'Método não permitido' });
}
