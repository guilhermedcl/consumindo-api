# Aplicativo de Notícias e Meteorologia

Este aplicativo utiliza duas APIs de terceiros para fornecer notícias e dados meteorológicos com base em uma cidade específica.

## Como usar:

1. Clone o repositório do projeto para o seu ambiente local.
2. Certifique-se de ter o Node.js instalado em seu sistema.
3. No terminal, navegue até o diretório do projeto.
4. Instale as dependências do projeto executando o comando `npm install`.
5. Abra o arquivo `app.js` em um editor de código de sua escolha.
6. Insira suas chaves de API para as APIs de notícias e de dados meteorológicos nos campos `newsApiKey` e `openWeatherApiKey`, respectivamente.
7. Defina a cidade desejada na variável `city`.
8. Salve as alterações no arquivo `app.js.`.
9. No terminal, execute o aplicativo digitando `node app.js`.

## Como funciona:

O aplicativo realiza duas operações principais:

1. **Buscar Notícias:**

   A função `fetchNews(city)` é responsável por buscar notícias com base na cidade fornecida. Ele utiliza a API da News API para obter os últimos artigos relacionados à cidade. Os artigos são então exibidos no console, incluindo o título, a descrição, a fonte e a URL da notícia.

2. **Buscar Dados Meteorológicos:**

   A função `fetchWeather(city)` é responsável por buscar dados meteorológicos com base na cidade fornecida. Ele utiliza a API da OpenWeatherMap para obter informações sobre a temperatura, a condição do tempo e a umidade. Além disso, a velocidade do vento é incluída, se disponível. Os dados são exibidos no console.

## Como rodar:

1. Após inserir as chaves de API e definir a cidade no arquivo `app.js`, execute o aplicativo digitando `node app.js` no terminal.
2. Aguarde até que o aplicativo conclua a busca e exiba os resultados no console.
