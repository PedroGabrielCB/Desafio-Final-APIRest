const validateEmail = (request, response, next) => {
  const { body } = request;
  if (body.email == undefined) {
    return response.status(400)
        .json({ message: 'O campo "email" é obrigatório' });
  }
  if (body.email === '') {
    return response.status(400)
        .json({ message: 'O campo "email" não pode ser vazio' });
  }
  if (!body.email.includes('@') && !body.email.includes('.com') ) {
    return response.status(400)
        .json({ message: 'O campo "email" possui um valor inválido' });
  }
  next();
};
module.exports = { validateEmail };
