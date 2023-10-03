// MODAL
const btnAbrir = document.querySelector("#cadastrarCliente");
const btnFechar = document.querySelector("#modalClose");
const container = document.querySelector("#modal");

function toggleModal(e) {
  // e.preventDefault();
  container.classList.toggle("active");
  clearInput();
}

function fecharModal(event) {
  if (event.target === this) {
    toggleModal();
  }
}

btnAbrir.addEventListener("click", toggleModal);
btnFechar.addEventListener("click", toggleModal);
container.addEventListener("click", fecharModal);

// CRUD - Create Read Update Delete

const tempClient = {
  nome: "andre",
  email: "andre.@gmail.com",
  telefone: "981834409",
  cidade: "Rio de Janeiro",
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];

const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

const readClient = () => getLocalStorage();

const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

// 2º SaveClient and ClearInput

const btnSalvar = document.querySelector("#salvar");
const btnCancelar = document.querySelector("#cancelar");

const clearInput = () => {
  const inputAll = document.querySelectorAll(".modal-field");
  inputAll.forEach((item) => (item.value = ""));
};

const clearTable = () => {
  const rows = document.querySelectorAll("#tableClient>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

const createRow = (client) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${client.nome}</td>
  <td>${client.email}</td>
  <td>${client.telefone}</td>
  <td>${client.cidade}</td>
  <td>
    <button type="button" class="button green">editar</button>
    <button type="button" class="button red">excluir</button>
  </td>`;
  const tbody = document.querySelector("#tableClient>tbody");
  tbody.appendChild(newRow);
};

const updateTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};

const saveClient = () => {
  const form = document.querySelector("#form");
  if (form.reportValidity()) {
    const client = {
      nome: document.querySelector("#nome").value,
      email: document.querySelector("#email").value,
      telefone: document.querySelector("#celular").value,
      cidade: document.querySelector("#cidade").value,
    };
    createClient(client);
    clearInput();
    updateTable();
  }
};

btnSalvar.addEventListener("click", saveClient);
btnCancelar.addEventListener("click", clearInput);

// Edit Delete

const tbody = document.querySelector("#tableClient>tbody");
tbody.addEventListener("click", editDelete);
