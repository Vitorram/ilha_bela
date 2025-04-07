const criarIlhaBela = (req, res) => {
    const dados = req.body;
    
    res.status(201).json({ mensagem: 'Casa criada com sucesso em Ilhabela', dados });
};

export default criarIlhaBela;
