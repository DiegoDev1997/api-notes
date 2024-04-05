
### Api de Anotações

Essa é uma api rest feita para que um usuário possa criar várias anotações


## Rotas da Api

users
- (GET)  /users : Retorna todos os usuários
- (POST) /auth/sigup : Crie a sua conta na api
- (POST) /auth/sigin : Faça o login de usuário
- (GET)  /users/:id : Retorna informações de um usuário pelo seu id
- (PUT)  /users/:id : Atualize informações de um usuário especifico
- (DELETE) /users/:id : Delete um usuário especifico

notes
- (GET)  /notes : Retorna todas as anotações criadas
- (POST) /notes : Crie uma anotação
- (GET) /users/:userid/notes : Pegue todas as anotações de um usuário especifico
- (GET)  /notes/:id : Retorna informações de uma anotações
- (PUT)  /users/:id : Atualize informações de uma anotação especifica
- (DELETE) /users/:id : Delete uma anotação especifica
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`JWT_KEY`
Guardará a sua chave jwt para escriptar e descriptografar seu token

`PORT`
Guardará a porta que rodará o projeto

`BD_NAME`
Guardará o nome do seu banco de dados

`BD_PORT`
Guardará a porta em que está rodando seu banco de dados

`BD_PASS`
Guardará a senha do seu banco de dados

`BD_USER`
Guardará o nome do usuário do banco de dados



## Instalação

Instale as dependências do projeto com  npm

```bash
  npm install 
```
Após instalar as dependências e criar suas variaveis de ambiente necessárias,Rode a api rodando o comando

```bash
  npm run dev
```
## 🛠 Habilidades
Node,Express,MySQL,JWT,Typescript,Nodemon,Sequelize


## Stacks utilizadas

**Back-end:** Node, Express, Sequelize, MySQL, Typescript, JWT,Nodemon, cors


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/DiegoDev1997/api-notes.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```
crie suas variáveis de ambiente no arquivo

```bash
 .env
```

Inicie o servidor

```bash
  npm run dev
```
