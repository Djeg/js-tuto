# Exercice - Créer une todo list

## Mise en place

Pour faire cette exercice il vous suffit de [telécharger le code](https://github.com/Djeg/js-tuto/archive/refs/heads/master.zip).

Une fois téléchargé, ouvrir le répertoire "exercice-todo-list" dans votre éditeur de code VSCode.

Ouvrir le fichier `index.html` (celui qui ce situe dans le répertoire exercice-todo-list) dans votre navigateur.

## Le code HTML

Dans le fichier `index.html` faire :

1. Créer une balise h1 avec le texte : "Ma Liste de taches"
2. Créer une balise `ul` avec la class `todo-list`
3. Créer une balise `input` de type `text` avec la classe `todo-input`
4. Créer un bouton `Ajouter` avec la class `todo-btn`

## Gérer le click sur le bouton ajouter

Dans le fichier `app.js` faire les consignes suivante :

1. Créer une fonction "addTodo" qui n'accépte aucun paramètres
2. Dans cette fonction utiliser l'instruction `console.log('addTodo')`.
3. Graçe à la fonction [`document.querySelector`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
   à l'éxtérieur de la fonction `addTodo`, récupérer dans une constante "button" le bouton
   d'ajout de todo :

   exemple :

   ```js
   const button = document.querySelector(".le-nom-de-la-class");
   ```

4. Toujours à l'éxtérieur de la fonction `addTodo`, utiliser la fonction [`button.addEventListener`](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
   avec l'événement `click` et lui attaché la fonction `addTodo`.

5. Vous pouvez tester avec votre navigateur en rafraichissant la page, puis en ouvrant l'inspécteur dans l'onglet "console". Lors du clique sur le bouton "ajouter" le message "addTodo" doit apparaitre dans la console.

## Récupérer la valeur de l'input

1. Dans la fonction "addTodo", supprimer le "console.log". Et grace à [`document.querySelector`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector) récupérer
   dans une constante `input` l'élément input de la page html.
2. Avec la constante `input` afficher dans la console la valeur de l'input : `console.log(input.value)`
3. Vous pouvez tester le code en entrant du texte dans l'input et lors du clique sur le bouton, le texte rentré
   doit s'afficher dans la console de votre inspécteur

## Création et ajout de la tache

1. Toujours la fonction `addTodo`, à la suite de l'exercice précédent. Utiliser la fonction
   [`document.createElement('li')`](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement) pour créer dans une constante li un élément `li`
2. Avec cette constante `li` et graçe à `li.innerText`, ajouter le texte contenue dans l'input au `li`

   exemple :

   ```js
   const li = document.createElement("li");
   li.innerText = input.value;
   ```

3. Grace à l'instruction [`document.querySelector`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector),
   créé une constante `list` en séléctionant la class de la balise `li`.
4. En utilisant la constante `list` ajouter la balise li grace à l'instruction [`li.appendChild`](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild)

## Création du bouton supprimer

1. Dans la fonction "addTodo", juste après la création de l'élément `li`, créer une constante
   `deleteButton` graçe à la fonction [`document.createElement('button')`](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement).
2. Ajouter le texte "Supprimer" en utilisant `deleteButton.innerText`
3. Ajouter le bouton supprimer à la balise li en utilisant [`li.appendChild(deleteButton)`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
4. Vous pouvez tester votre code en utilisant votre navigateur, un bouton suprrimer doit apparraitre
   lors du clique sur le bouton "Ajouter"

## Vidage de l'input et conditions

1. Dans la fonction "addTodo", juste après la récupération de de l'input, Arréter la fonction en utilisant un `return` si le contenue de l'input (`input.value`) est vide
2. À la fin de la fonction "addTodo", vider l'input en utilisant l'instruction `input.value = '';`

## Suppression d'un todo

1. Créer une fonction `deleteTodo` qui accépte un paramètre `todo` et qui retourne une fonction.

   Exemple :

   ```js
   const deleteTodo = (todo) => () => {
     // code de la fonction
   };
   ```

2. Dans le code de la fonction, récupérer dans une constante `list` la liste des todos
   en utilisant [`document.querySelector('.nom-de-la-class)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) (la balise `ul`)
3. En utilisant [`list.removeChild(todo)`](), supprimer le todo de la liste.
4. Dans la fonction `addTodo`, en utilisant la constante `deleteButton` et sa fonction `addEventListener`, lancer la fonction `deleteTodo` avec la balise `li` en paramètre :

Exemple :

```js
deleteButton.addEventListener("click", deleteTodo(li));
```

## Ajout de css

Vous pouvez dans cette exerice libre ajouter le css de votre choix (classique, bootstrap, etc ...) !

Le seul objéctif est de rendre l'application un peu plus jolie :)
