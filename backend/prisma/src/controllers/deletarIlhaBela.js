const deletarIlhaBela = (req, res) => {
    const { id } = req.params;
 
    res.status(200).json({ mensagem: `Casa ${id} deletada com sucesso` });
};

export default deletarIlhaBela;
