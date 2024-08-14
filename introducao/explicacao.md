# Iniciando Projeto Node.js

## O que é Node.js?

Muitos pensam que Node.js é uma linguagem de programação, mas na verdade, não é. Node.js é um ambiente de desenvolvimento que permite a execução de código JavaScript no lado do servidor. Ele é construído sobre o motor V8 do Google Chrome, que compila JavaScript diretamente para código de máquina, tornando-o extremamente rápido.

## Características do Node.js

- **Event-driven**: Node.js utiliza um modelo assíncrono orientado a eventos, o que significa que operações de E/S (Entrada/Saída) não bloqueiam o fluxo do programa.
- **Single-threaded**: Embora seja de thread única, Node.js pode gerenciar múltiplas conexões simultâneas graças ao seu loop de eventos.
- **Escalável**: Ideal para aplicações que precisam escalar horizontalmente, como servidores web e APIs REST.

## Como inicializar um projeto Node.js

Para inicializar um projeto Node.js, siga os passos abaixo:

1 - Acesse uma pasta existente ou crie uma nova pasta para o seu projeto.
2 - Dentro da pasta, execute o comando:

    ```bash
    npm init
    ```

    Esse comando irá criar a estrutura básica do projeto. Durante a execução, você será solicitado a fornecer informações como o nome do projeto, versão, descrição, ponto de entrada (entry point), e autor. Se preferir, você pode pular essa interação com:

    ```bash
    npm init -y
    ```

    Isso irá criar um `package.json` com valores padrão.

3 - Após rodar o comando, você perceberá que na raiz da pasta foi criado um arquivo `package.json`. Esse arquivo é essencial, pois contém todas as informações necessárias do projeto, como nome, versão, descrição, dependências, scripts, entre outras.

4 - Para executar um arquivo javascript, execute os seguintes comandos:

- Acesse o diretório do arquivo desejado

```bash
    cd <caminho do diretório >
```
- Execute o arquivo com o seguinte comando

```bash
    node <nome-do-arquivo.js>
```

## O que é npm?

O `npm` é a sigla para Node Package Manager (Gerenciador de Pacotes do Node). É uma ferramenta que facilita a instalação, atualização e gerenciamento de bibliotecas e dependências em projetos JavaScript. O npm fornece:

- **Repositório online**: Um vasto repositório de pacotes de código aberto que você pode usar em seus projetos.
- **Utilitário de linha de comando**: Permite instalar, atualizar e gerenciar dependências, além de rodar scripts personalizados.

### Instalando pacotes

Para instalar um pacote, use o comando:

```bash
npm install <nome do pacote>
