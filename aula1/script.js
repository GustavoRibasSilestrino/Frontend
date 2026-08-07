const form = document.getElementById("form");
const input = document.getElementById("input");
const lista = document.getElementById("lista");
const vazio = document.getElementById("vazio");
const contador = document.getElementById("contador");
const botaoLimpar = document.getElementById("limpar");

const CHAVE = "tarefas";

let tarefas = carregar();

function carregar() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];
  } catch {
    return [];
  }
}

function salvar() {
  localStorage.setItem(CHAVE, JSON.stringify(tarefas));
}

function desenhar() {
  lista.innerHTML = "";

  tarefas.forEach(function (tarefa) {
    const item = document.createElement("li");
    item.className = tarefa.feita ? "item feita" : "item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.feita;
    checkbox.addEventListener("change", function () {
      tarefa.feita = checkbox.checked;
      salvar();
      desenhar();
    });

    const texto = document.createElement("span");
    texto.textContent = tarefa.texto;

    const excluir = document.createElement("button");
    excluir.className = "btn-excluir";
    excluir.type = "button";
    excluir.textContent = "x";
    excluir.title = "Excluir tarefa";
    excluir.addEventListener("click", function () {
      tarefas = tarefas.filter(function (t) {
        return t.id !== tarefa.id;
      });
      salvar();
      desenhar();
    });

    item.append(checkbox, texto, excluir);
    lista.appendChild(item);
  });

  vazio.classList.toggle("escondido", tarefas.length > 0);

  const pendentes = tarefas.filter(function (t) {
    return !t.feita;
  }).length;

  contador.textContent =
    pendentes === 1 ? "1 tarefa pendente" : pendentes + " tarefas pendentes";
}

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();
  if (texto === "") return;

  tarefas.push({ id: Date.now(), texto: texto, feita: false });
  input.value = "";
  salvar();
  desenhar();
});

botaoLimpar.addEventListener("click", function () {
  tarefas = tarefas.filter(function (t) {
    return !t.feita;
  });
  salvar();
  desenhar();
});

desenhar();
