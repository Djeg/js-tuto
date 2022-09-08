// Ce fichier contient l'application de notre task list

// Récupérer les éléments HTML qui possède de l'intéraction
const input = document.querySelector(".task-input");
const button = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

// Cette fonction est appelé lorsque je clique sur un bouton supprimer
function deleteTask(task) {
  return () => {
    taskList.removeChild(task);
  };
}

// Cette fonction créer un élément dans la liste des choses à faire
function createTask(taskName) {
  // Création d'une balise LI
  const li = document.createElement("li");

  // On créé un bouton de supression de notre tache
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Supprimer";

  // Lors du clique sur le bouton nous supprimons la tache
  deleteButton.addEventListener("click", deleteTask(li));

  // On créé un label pour notre tache
  const label = document.createElement("span");
  label.innerText = taskName;

  // On ajoute le bouton et le label à l'intérieur de notre tache
  li.appendChild(label).appendChild(deleteButton);

  // On retourne la balise LI
  return li;
}

// Cette fonction rajoute une nouvelle tache dans la list
function addTaskToList() {
  // On récupére ce que contient notre input de tache
  const taskName = input.value;

  // Si la tache est vide
  if (!taskName) {
    // on arréte tout
    return;
  }

  // On créé la balise li de notre tache
  const li = createTask(taskName);

  // On ajout la balise li dans notre list
  taskList.appendChild(li);

  // On vide notre input
  input.value = "";
}

// Lors du clique sur le bouton on lance la fonction "addTaskToList"
button.addEventListener("click", addTaskToList);
