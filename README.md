# The Hangman
[![Docker Image CI](https://github.com/nstseek/the-hangman/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/nstseek/the-hangman/actions/workflows/firebase-hosting-merge.yml)

Essa aplicação foi desenvolvida para completar o teste técnico proposto para a vaga de desenvolvedor front-end. Você pode visualizar a aplicação funcionando em [https://nstseek-the-hangman.web.app/](https://nstseek-the-hangman.web.app/). Você também pode visualizar o estado das builds e deploys de cada commit visualizando o histórico de commits [aqui](https://github.com/nstseek/the-hangman/commits/master) ou vendo o estado dos workflows do repositório [aqui](https://github.com/nstseek/the-hangman/actions).

## Tecnologias

Esse projeto foi desenvolvido utilizando algumas das mais recentes tecnologias com o React (como React Hooks), TypeScript, Jest, Enzyme, SCSS, e algumas outras bibliotecas.

### Redux

A decisão de não utilizar Redux nesse projeto se deve ao tamanho da aplicação. O Redux não se fez necessário aqui, os recursos que o framework(React) nos proporciona, como a Context API, são mais do que suficientes para o desenvolvimento da aplicação. A aplicação não possui um gerenciamento de estado complexo nem possui vários níveis de componentes trocando muitos dados entre si, o gerenciamento de estado é simples e pode ser feito por uma ferramenta mais simples. Nesse caso, utilizei a Context API do React.

## Documentação

O projeto possui uma cobertura de documentação razoável utilizando [JSDOC](https://jsdoc.app/) em cada componente e interface relevante da aplicação. Caso a sua IDE suporte, basta você passar o mouse sobre um componente e verá uma descrição a respeito do mesmo, explicando qual o propósito daquele componente/variável/interface. Segue um exemplo no link abaixo para demonstrar a funcionalidade funcionando no Visual Studio Code

![JSDOC example](src/assets/Screenshot_1.png?raw=true 'JSDOC example')

Caso a sua IDE não suporte a notação [JSDOC](https://jsdoc.app/), basta ler o comentário acima da declaração do componente/váriavel/interface. A documentação foi escrita em inglês por costume próprio e porque a aplicação está disponível no meu perfil do GitHub, o qual é voltado mais pra área internacional(inglês) do que nacional(português).

## Continuous Integration and Continuous Deployment (CI/CD)

Um [processo de CI/CD simples](https://github.com/nstseek/the-hangman/actions) foi implementado nesse projeto utilizando as Actions do GitHub. Toda vez que algum commit é adicionado a master, o projeto passa por sua bateria de testes, é buildado e deployado no Firebase, podendo ser visualizado no [endereço mencionado acima](https://github.com/nstseek/the-hangman/actions).

## Testes

A cobertura de testes unitários está relativamente precária por falta de tempo para desenvolvê-la. Como é um projeto de teste apenas, não vejo necessidade de cobrir o projeto inteiro com testes unitários pois demandaria tempo que não tenho disponível.

O resultado dos testes de cada commit é publicado utilizando o GitHub Actions logo após rodarem, como você pode ver [aqui](https://github.com/nstseek/the-hangman/actions).

## Flow de trabalho

O projeto possui uma série de filtros para garantir a qualidade do código criado, como [linters](https://eslint.org/), [formatters](https://prettier.io/) e [testes unitários](https://jestjs.io/en/) com um [wrapper específico](https://enzymejs.github.io/enzyme/) que rodam toda vez que o desenvolvedor tenta realizar o push para o repositório através dos git hooks. Esse projeto utiliza o pacote [husky](https://www.npmjs.com/package/husky) que torna muito simples a configuração de git hooks em qualquer repositório Git. Toda vez que o desenvolvedor tenta realizar o push, o script [npm run check](https://github.com/nstseek/the-hangman/blob/011f3201d7bcbf5aecdd0f2e710fc51fdea3f5bc/package.json#L42) [roda antes que o push seja efetuado](https://github.com/nstseek/the-hangman/blob/011f3201d7bcbf5aecdd0f2e710fc51fdea3f5bc/package.json#L76), garantindo que o código que está sendo enviado passa em todos os testes e builda corretamente.

## Scripts disponíveis

### npm start

Inicia o projeto na sua máquina local.

### npm run build

Cria um build do projeto para ser servido.

### npm run eject

Ejeta toda a articulação do create-react-app que não é totalmente visível/manipulável para o desenvolvedor final.

### npm test

Executa todos os testes unitários do projeto.

### npm run test:watch

Executa todos os testes(unitários e end-to-end) do projeto em modo de observação.

### npm run test:report

Executa todos os testes unitários do projeto e gera um report para ser publicado com o GitHub Actions.

### npm run prettier

Executa o [formatter](https://prettier.io/) instalado no projeto para verificar os arquivos existentes.

### npm run prettier:fix

Executa o [formatter](https://prettier.io/) instalado no projeto para corrigir os erros nos arquivos existentes.

### npm run lint

Executa o [linter](https://eslint.org/) instalado no projeto para verificar os arquivos existentes.

### npm run lint:fix

Executa o [linter](https://eslint.org/) instalado no projeto para corrigir os erros nos arquivos existentes.

### npm run check

Executa uma verificação completa no projeto, incluindo o linter, formatter, os testes unitários e o build.

### npm run check:fix

Executa uma verificação completa no projeto, incluindo o linter, formatter, os testes unitários e o build, corrigindo os erros passíveis de correção automática com o linter e o formatter.
