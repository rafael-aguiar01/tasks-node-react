import React, { useState } from "react";
import { Task } from "../../types/Task";

interface EditTaskModalProps {
  task: Task;
  onClose: () => void;
  saveEdit: (id: number, title: string, description: string, onClose: () => void) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onClose, saveEdit }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    saveEdit(task.id, editedTitle, editedDescription, onClose);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold text-indigo-800">Editar Tarefa</h3>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder="Editar título"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-700 placeholder-gray-400"
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          placeholder="Editar descrição"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-700 placeholder-gray-400 resize-none"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-black rounded hover:bg-indigo-700 transition"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;