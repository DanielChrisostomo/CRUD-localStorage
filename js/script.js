// MODAL
const btnAbrir = document.querySelector("#cadastrarCliente");
const btnFechar = document.querySelector("#modalClose");
const container = document.querySelector("#modal");

function toggleModal(e) {
  // e.preventDefault();
  container.classList.toggle("active");
  // clearInput();
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

const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};
