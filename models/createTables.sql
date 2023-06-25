CREATE TABLE `backend-ii-express-mysql`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `sobrenome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `idade` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `backend-ii-express-mysql`.`produtos` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `descricao` VARCHAR(45) NULL,
  `preco` FLOAT NULL,
  `data_atualizado` DATETIME NULL,
  PRIMARY KEY (`id`));
