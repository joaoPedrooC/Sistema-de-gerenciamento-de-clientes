-- Query para criar a tabela client - parte 1 do teste.
CREATE TABLE IF NOT EXISTS client (
  "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "nome" VARCHAR(50) NOT NULL,
  "email" VARCHAR(50) NOT NULL UNIQUE,
  "telefone" CHAR(11) NOT NULL UNIQUE
);

-- Query para deletar e criar  a tabela novamente para adicionar as coordenadas X e Y como endereço dos clientes - parte 2 do teste.
DROP TABLE "client";
CREATE TABLE IF NOT EXISTS client (
  "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "nome" VARCHAR(50) NOT NULL,
  "email" VARCHAR(50) NOT NULL UNIQUE,
  "telefone" CHAR(11) NOT NULL UNIQUE,
  "coordinate_x" FLOAT NOT NULL,
  "coordinate_y" FLOAT NOT NULL
);