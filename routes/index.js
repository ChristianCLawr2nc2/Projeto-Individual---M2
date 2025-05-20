// Importa o Express
const express = require('express');
const app = express();

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor está funcionando! 🚀');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
