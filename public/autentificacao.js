// autentificacao.js
async function login(email, senha) {
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    return true;
  } else {
    return false;
  }
}

