import { useState } from "react";
import './index.css';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState(""); 
  const [newTaskDescription, setNewTaskDescription] = useState(""); 

  const addTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTaskObject: Task = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      description: newTaskDescription.trim(), 
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen min-w-screen w-full flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-gray-50 p-6 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-indigo-800">
          Lista de Tarefas
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite o título da tarefa"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-700 placeholder-gray-400"
          />
          <textarea
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            placeholder="Digite a descrição da tarefa"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-700 placeholder-gray-400 resize-none"
          />
          <button
            onClick={addTask}
            className="w-full px-4 py-2 bg-indigo-600 text-black rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition duration-200"
          >
            Adicionar
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-col items-start justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <span
                  className={`text-lg font-medium text-gray-800 ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </span>
                <span
                  className={`text-sm text-gray-600 ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.description || "Sem descrição"}
                </span>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium text-black transition duration-200 ${
                      task.completed
                        ? "bg-gray-400 hover:bg-gray-500"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {task.completed ? "Desmarcar" : "Concluir"}
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-3 py-1 bg-red-500 text-black rounded-lg text-sm font-medium hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm">
              Nenhuma tarefa adicionada ainda.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;