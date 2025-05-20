// Função que lida com a rota principal (home)
const home = (req, res) => {
  res.status(200).json({
    message: 'Bem-vindo à API!',
    status: 'ok',
  });
};

// Exporta o controlador
module.exports = {
  home,
};
