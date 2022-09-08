/**
 * Cette fonction supprime une tache de la liste
 */
function deleteTodo(li) {
  return function () {
    // je vais séléctioner la list des todos
    const ul = document.querySelector(".todo-list");
    // On enléve de la list la balise li donnée en paramètre
    ul.removeChild(li);
  };
}

/**
 * Cette fonction est lancé lors du clique sur le bouton
 * ajouter.
 */
function addTodo() {
  // On séléctionne l'input dans notre fichier HTML
  const input = document.querySelector(".todo-input");

  // création d'une balise html LI
  const li = document.createElement("li");
  // Mets le contenue de l'input dans le text de la balise
  li.innerText = input.value;

  // Création du bouton de suppression
  const deleteButton = document.createElement("button");
  // On ajoute du text dans le bouton
  deleteButton.innerText = "Supprimer";
  // on attache un événement click sur notre bouton de suppression
  deleteButton.addEventListener("click", deleteTodo(li));

  // On ajout le bouton dans la balise li
  li.appendChild(deleteButton);

  // Récupération de la list "ul" des todo
  const ul = document.querySelector(".todo-list");
  // Ajouter le li dans la balise ul
  ul.appendChild(li);
}

// On séléctionne le bouton "Ajouter"
const button = document.querySelector(".todo-btn");
// On attache un événement click sur le bouton
button.addEventListener("click", addTodo);
