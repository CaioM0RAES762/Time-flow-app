// usuarios.js
const usuarios = [
  {
    id: "1",
    login: "admin",
    senha: "123",
    nome: "Administrador do Sistema",
    email: "admin@abc.com",
    admin: true
  },
  {
    id: "2",
    login: "user",
    senha: "123",
    nome: "Usuario Comum",
    email: "user@abc.com",
    admin: false
  },
  {
    id: "2cc7",
    nome: "Pedro",
    login: "gustavorpena02@gmail.com",
    senha: "ew",
    email: "gustavorpena02@gmail.com",
    admin: false
  },
  {
    id: "0a88",
    nome: "Gustavo",
    login: "gustavorpena01@gmail.com",
    senha: "123",
    email: "gustavorpena01@gmail.com",
    admin: false
  },
  {
    id: "5fe8",
    nome: "caio",
    login: "caio@gmail.com",
    senha: "1",
    email: "caio@gmail.com",
    admin: false
  },
  {
    id: "649c",
    nome: "Gustavo",
    login: "gustavorpena03@gmail.com",
    senha: "J@ne0104",
    email: "gustavorpena03@gmail.com",
    admin: false
  },
  {
    id: "985c",
    nome: "Geovnna",
    login: "gustavorpena04@gmail.com",
    senha: "1234ja",
    email: "gustavorpena04@gmail.com",
    admin: false
  },
  {
    id: "97f2",
    nome: "caio",
    login: "caio37908@gmail.com",
    senha: "123456",
    email: "caio37908@gmail.com",
    admin: false
  }
];

if (!localStorage.getItem('usuarios')) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
