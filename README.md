<h1 align="center">Plataforma de pedidos de comida</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/TexLuciano/api-devburger?color=DC143C">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/TexLuciano/api-devburger?color=DC143C">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/TexLuciano/api-devburger?color=DC143C">

  <img alt="License" src="https://img.shields.io/github/license/TexLuciano/api-devburger?color=DC143C">

   <img alt="Github issues" src="https://img.shields.io/github/issues/TexLuciano/api-devburger?color=DC143C" /> 

   <img alt="Github forks" src="https://img.shields.io/github/forks/TexLuciano/api-devburger?color=DC143C" /> 

   <img alt="Github stars" src="https://img.shields.io/github/stars/TexLuciano/api-devburger?color=DC143C" /> 
</p>

<p align="center">
<img width="450" height="300" src="https://user-images.githubusercontent.com/118227265/233434475-febe139d-7baf-4866-92c7-4c06fcd461d6.JPG"/>
<img width="450" height="300" src="https://user-images.githubusercontent.com/118227265/233434481-2301d375-b51b-441c-a2b4-9ff88a73e7ba.JPG"/>
<img width="450" height="300" src="https://user-images.githubusercontent.com/118227265/233434478-306d6ede-0294-47c4-881a-89f4457be5bd.JPG"/>
<img width="450" height="300" src="https://user-images.githubusercontent.com/118227265/233434475-febe139d-7baf-4866-92c7-4c06fcd461d6.JPG"/>
<img width="450" height="300" src="https://user-images.githubusercontent.com/118227265/233434472-1007b977-c083-495d-a39e-4900d6ece138.JPG"/>
</p>


<p>Este é um projeto Full Stack de uma plataforma de pedidos de comida, onde os usuários podem se cadastrar, 
escolher os produtos desejados e realizar pedidos. O administrador da plataforma pode verificar e gerenciar esses pedidos, 
adicionar novos produtos, criar categorias e realizar outras tarefas de gerenciamento.</p>

<h2>Tecnologias utilizadas</h2>

<h3>Back-end:</h3>
<p>Node.js com Express e JavaScript.</p>

<p>PostgreSQL e MongoDB como bancos de dados.</p>

<p>Sequelize e Mongoose para conectar e manipular os dados.</p>

<p>Yup e uuid para validação de dados e geração de identificadores únicos, respectivamente.</p>

<p>Docker e docker-compose para criação e gerenciamento de containers.</p>
 
<h2>Executando o projeto</h2>

<h3>Pré-requisitos</h3>
<p>Node.js</p>
<p>PostgreSQL</p>
<p>MongoDB</p>
<p>Docker (opcional)</p>
  
<h2>Configuração<h2>

<h3>Clone o repositório: git clone https://github.com/seu-usuario/plataforma-de-pedidos.git</h3>
  
<p>Instale as dependências do front-end: cd plataforma-de-pedidos/client && npm install<p>
<p>Instale as dependências do back-end: cd ../server && npm install<p>
<p>Crie um arquivo .env no diretório server com as variáveis de ambiente. Veja um exemplo no arquivo .env.example.<p>
<p>Execute as migrations do banco de dados PostgreSQL: npm run migrate<p>
<p>Inicie o servidor: npm run dev<p>
<p>Inicie o cliente: cd ../client && npm run dev<p>
<p>Se preferir, você pode utilizar o Docker e o docker-compose para executar o projeto. Para isso, basta executar o comando docker-compose up no diretório raiz do projeto.<p>

<h2>Funcionalidades</h2>
  
<h3>Usuário:</h3>

<p>Cadastro de usuários.</p>
<p>Login e logout de usuários.</p>
<p>Visualização de produtos disponíveis.</p>
<p>Adição de produtos ao carrinho.</p>
<p>Realização de pedidos.</p>
<p>Visualização do histórico de pedidos realizados.</p>
  
<h3>Administrador:</h3>
<p>Verificar e gerenciar pedidos.</p>
<p>Adicionar novos produtos.</p>
<p>Criar categorias.</p>
<p>Realizar outras tarefas de gerenciamento.</p>
