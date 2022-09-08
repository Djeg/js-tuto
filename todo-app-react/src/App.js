import { useState } from 'react'

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('')

  const changeNewTask = ev => {
    setNewTask(ev.currentTarget.value)
  }

  const addTask = () => {
    setTaskList([...taskList, newTask])
    setNewTask('')
  }

  const removeTask = index => () =>
    setTaskList([taskList.filter((v, i) => i !== index)])

  return (
    <main>
      <h1>Ma liste de taches</h1>
      <ul>
        {taskList.map((task, index) => (
          <li>
            <span>{task}</span>
            <button onClick={removeTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Ajouter une tache"
        onChange={changeNewTask}
        value={newTask}
      ></input>
      <button onClick={addTask}>Ajouter</button>
    </main>
  )
}

export default App
