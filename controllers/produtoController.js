const produtoModel = require('../services/produtoService');

const findAll = async (request, response) => {
  const clientes = await produtoModel.findAll();
  return response.status(200).json(clientes);
};

const save = async (request, response) => {
  const result = await produtoModel.save(request.body);
  return result ?
    response.status(200).json() :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao salvar cliente' });
};

const update = async (request, response) => {
  const result = await produtoModel.update(request.body);
  return result ?
    response.status(200).json() :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao atualizar cliente' });
};

const remove = async (request, response) => {
  const { id } = request.params;
  const result = await produtoModel.remove(id);
  return result ?
    response.status(200).json() :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao remover cliente' });
};

module.exports = {
  findAll,
  save,
  remove,
  update,
};
