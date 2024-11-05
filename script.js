class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserList {
  constructor() {
    this.users = []; // Inicializa o array de usuários
  }

  addUser(user) {
    this.users.push(user); // Adiciona um novo usuário ao array
    this.displayUsers(); // Atualiza a exibição dos usuários
  }

  editUser(index, newUser) {
    this.users[index] = newUser; // Substitui o usuário no índice especificado
    this.displayUsers(); // Atualiza a exibição dos usuários
  }

  deleteUser(index) {
    this.users.splice(index, 1); // Remove o usuário do array
    this.displayUsers(); // Atualiza a exibição dos usuários
  }

  displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Limpa a lista de usuários
    this.users.forEach((user, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
                ${user.name} (${user.email})
                <button onclick="editUser(${index})">Editar</button>
                <button onclick="deleteUser(${index})">Deletar</button>
            `;
      userList.appendChild(li); // Adiciona o usuário à lista
    });
  }
}

const userList = new UserList();

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const user = new User(name, email);
    userList.addUser(user); // Adiciona o novo usuário
    document.getElementById("userForm").reset(); // Reseta o formulário
  });

function editUser(index) {
  const name = prompt("Novo nome:", userList.users[index].name);
  const email = prompt("Novo email:", userList.users[index].email);
  if (name && email) {
    const newUser = new User(name, email);
    userList.editUser(index, newUser); // Edita o usuário
  }
}

function deleteUser(index) {
  if (confirm("Tem certeza que deseja deletar este usuário?")) {
    userList.deleteUser(index); // Deleta o usuário
  }
}
