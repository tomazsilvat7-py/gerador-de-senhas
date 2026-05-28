function gerarSenha() {
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%&*";

  let caracteres = "";

  if (document.getElementById("maiusculas").checked) {
    caracteres += maiusculas;
  }

  if (document.getElementById("minusculas").checked) {
    caracteres += minusculas;
  }

  if (document.getElementById("numeros").checked) {
    caracteres += numeros;
  }

  if (document.getElementById("simbolos").checked) {
    caracteres += simbolos;
  }

  if (caracteres === "") {
    alert("Selecione pelo menos uma opção.");
    return;
  }

  const tamanho = document.getElementById("tamanho").value;

  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }

  document.getElementById("senha").value = senha;

  verificarForca(senha);
}

function copiarSenha() {
  const campoSenha = document.getElementById("senha");

  navigator.clipboard.writeText(campoSenha.value);

  document.getElementById("mensagem").textContent =
    "✅ Senha copiada!";
}

function mostrarSenha() {
  const campoSenha = document.getElementById("senha");

  if (campoSenha.type === "password") {
    campoSenha.type = "text";
  } else {
    campoSenha.type = "password";
  }
}

function verificarForca(senha) {
  const barra = document.getElementById("barra");
  const nivel = document.getElementById("nivel");

  let forca = 0;

  if (senha.length >= 8) forca++;
  if (senha.match(/[A-Z]/)) forca++;
  if (senha.match(/[0-9]/)) forca++;
  if (senha.match(/[^A-Za-z0-9]/)) forca++;

  switch (forca) {
    case 1:
      barra.style.width = "25%";
      barra.style.background = "red";
      nivel.textContent = "Senha Fraca";
      break;

    case 2:
      barra.style.width = "50%";
      barra.style.background = "orange";
      nivel.textContent = "Senha Média";
      break;

    case 3:
      barra.style.width = "75%";
      barra.style.background = "yellow";
      nivel.textContent = "Senha Boa";
      break;

    case 4:
      barra.style.width = "100%";
      barra.style.background = "lime";
      nivel.textContent = "Senha Forte";
      break;

    default:
      barra.style.width = "0%";
      nivel.textContent = "";
  }
}

function toggleTema() {
  document.body.classList.toggle("light");
}