# Use a imagem oficial do Node.js para criar uma imagem base
FROM node:16

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar os outros arquivos do projeto
COPY . .

# Definir a porta que o aplicativo usará
EXPOSE 3000

# Comando para executar o aplicativo
CMD [ "node", "server.js" ]
