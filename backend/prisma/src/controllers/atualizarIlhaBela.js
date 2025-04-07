const atualizarIlhaBela = (req, res) => {
    const { id } = req.params;
    const novosDados = req.body;
    
    res.status(200).json({ mensagem: `Casa ${id} atualizada com sucesso`, novosDados });
};

export default atualizarIlhaBela;
