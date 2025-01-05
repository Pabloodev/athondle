const fs = require("fs");
const cron = require("node-cron");

// Caminho do arquivo db.json
const dbPath = "./db.json";

// Função para atualizar o trabalhador diário
const updateDailyWorker = () => {
  try {
    // Lê o conteúdo do db.json
    const dbData = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    if (dbData.workers && dbData.workers.length > 0) {
      // Obtém o dia atual
      const today = new Date();
      const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
      );

      // Seleciona o índice do trabalhador do dia
      const workerIndex = dayOfYear % dbData.workers.length;

      // Atualiza o trabalhador diário
      dbData.daily = dbData.workers[workerIndex];

      // Salva o arquivo atualizado
      fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), "utf-8");
      console.log("Trabalhador diário atualizado com sucesso:", dbData.daily);
    } else {
      console.error("Nenhum trabalhador encontrado no arquivo db.json.");
    }
  } catch (error) {
    console.error("Erro ao atualizar o trabalhador diário:", error);
  }
};

// Agenda a execução diária às 00:00
cron.schedule("0 0 * * *", updateDailyWorker);

// Executa imediatamente ao iniciar o script
updateDailyWorker();