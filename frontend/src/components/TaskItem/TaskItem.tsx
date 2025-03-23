import React from "react";
import { FaCheck, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Task } from "../../types/Task";

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompletion,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <li
      key={task.id}
      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
    >
      <div className="flex-1">
        <span
          className={`text-lg font-medium text-gray-800 ${
            task.status === "COMPLETED" ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
        <span
          className={`block text-sm text-gray-600 ${
            task.status === "COMPLETED" ? "line-through text-gray-400" : ""
          }`}
        >
          {task.description || "Sem descrição"}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggleCompletion(task.id)}
          disabled={task.status === "COMPLETED"}
          className={`relative p-2 ${
            task.status === "COMPLETED"
              ? "text-gray-400 cursor-not-allowed"
              : "text-green-500 hover:text-green-600 transition duration-200"
          }`}
          title={task.status === "COMPLETED" ? "Tarefa concluída" : "Concluir"}
        >
          <FaCheck size={16} />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {task.status === "COMPLETED" ? "Concluída" : "Concluir"}
          </span>
        </button>
        <button
          onClick={() => onEditTask(task)}
          className="relative p-2 text-blue-500 hover:text-blue-600 transition duration-200"
          title="Editar"
        >
          <FaPencilAlt size={16} />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Editar
          </span>
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="relative p-2 text-red-500 hover:text-red-600 transition duration-200"
          title="Excluir"
        >
          <FaTrashAlt size={16} />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Excluir
          </span>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;