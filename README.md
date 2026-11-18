# Node Docker App

Aplicação simples em Node.js executada com Docker.

A aplicação inicia um servidor HTTP na porta 3000 e gera
um arquivo data.json com a data e hora atual.

## Construir a imagem

```bash
docker build -t node-docker-app .
```

## Executar o contêiner

```bash
docker run -d -p 3000:3000 --name node-app node-docker-app
```

## Testar

Acesse:

http://localhost:3000

Para visualizar o arquivo gerado:

```bash
docker exec node-app cat data.json
```
