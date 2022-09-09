Usado Para fins academicos

<h1>Pacotes necessarios para realizar a tarefa</h1><br>
express<br>
cors<br>
dotenv<br>
cryptoJs<br>
jsonwebtoken<br>
mongoose<br>
nodemon<br>
stripe<br>

<h1>Instruções</h1>
na pasta routes estão todas as rotas para realizar as tarefas<br>
as rotas são chamadas no arquivo index.js<br>
as rotas são baseadas em CRUD, com cada arquivo js representando o banco em que está agindo<br>
a parte de user é dividida em duas rotas, a da user.js(que contem get todos, get, put e delete) e auth.js<br>
que é onde estão as rotas post referentes ao cadastrdo de novo usuario e ao login

<h1>User</h1>
GET = Sem necessidade de se passar nenhuma informação<br>
POST(Cadastro) = Passar 'Username', 'email' e 'password' no body da requisição<br>
POST(Login) = Passar 'Username' ou 'email' ou 'password' no body da requisição<br>
PUT = Passar o ID do user que deseja modificar na URL, no body passar o(s) campo(s) que devem ser modificados<br>
DELETE = Passar na URL o ID do user que deseja deletar<br>

<h1>Products</h1>
GET = Sem necessidade de se passar nenhuma informação<br>
GET(Unico Produto) = Passar na URL o ID do produto<br>
POST = Passar 'title', 'desc', 'img', 'categories', 'price', 'color' e 'size' no body da requisição<br>
PUT = Passar o ID do produto que deseja modificar na URL, no body passar o(s) campo(s) que devem ser modificados(Precisa de autenticação)<br>
DELETE = Passar na URL o ID do user que deseja deletar(Precisa de autenticação)<br>

<h1>Orders</h1>
GET = Sem necessidade de se passar nenhuma informação<br>
GET(Unico Order) = Passar na URL o ID da order<br>
POST = Passar o 'UserID', 'Produtcs'(array dos produtos com ProductID e quantity) 'amount' e 'address'<br>
PUT = Passar na URL o ID da order que deseja ser modificada com a determinada mudança no corpo(Necessita autenticação)<br>
DELETE = Passar na URL o ID da order que deseja ser excluida(Necessita autenticação)