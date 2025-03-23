// src/components/TaskList/TaskList.tsx
import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import TaskFilter from "../TaskFilter/TaskFilter";
import { Task } from "../../types/Task";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useTasks } from "../../hooks/useTasks";

const TaskList: React.FC = () => {
  const {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    saveEdit,
  } = useTasks();

  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [editingTask, setEditingTask] = React.useState<Task | null>(null);
  const [filter, setFilter] = React.useState<"all" | "pending" | "completed">("all");

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingTask(null);
    setIsEditModalOpen(false);
  };

  const confirmDeleteTask = (id: number) => {
    confirmAlert({
      title: "Confirmar Exclusão",
      message: "Tem certeza que deseja excluir esta tarefa?",
      buttons: [
        {
          label: "Sim",
          onClick: () => deleteTask(id),
        },
        {
          label: "Não",
          onClick: () => {}, // Não faz nada
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      overlayClassName: "confirm-alert-overlay", // Classe personalizada para o overlay
      customUI: ({ onClose }) => (
        <div className="custom-confirm-dialog">
          <h2 className="text-lg font-semibold text-red-600">Confirmar Exclusão</h2>
          <p className="text-gray-700 mt-2">Tem certeza que deseja excluir esta tarefa?</p>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600 transition"
              onClick={() => {
                deleteTask(id);
                onClose();
              }}
            >
              Sim
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
              onClick={onClose}
            >
              Não
            </button>
          </div>
        </div>
      ),
    });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return task.status === "PENDING";
    if (filter === "completed") return task.status === "COMPLETED";
    return true;
  });

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-lg w-full max-w-md space-y-6">
      <h2 className="text-2xl font-semibold text-center text-indigo-800">
        Lista de Tarefas
      </h2>
      <TaskForm onAddTask={addTask} />
      <TaskFilter filter={filter} onFilterChange={setFilter} />
      <ul className="space-y-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleCompletion={toggleTaskCompletion}
              onDeleteTask={confirmDeleteTask}
              onEditTask={openEditModal}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-sm">
            Nenhuma tarefa encontrada.
          </p>
        )}
      </ul>
      {isEditModalOpen && editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={closeEditModal}
          saveEdit={saveEdit}
        />
      )}
    </div>
  );
};

export default TaskList;