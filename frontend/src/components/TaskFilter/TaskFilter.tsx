import React from "react";

interface TaskFilterProps {
  filter: "all" | "pending" | "completed";
  onFilterChange: (filter: "all" | "pending" | "completed") => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="mb-4">
      <label className="mr-2">Filtrar por:</label>
      <select
        value={filter}
        onChange={(e) => onFilterChange(e.target.value as "all" | "pending" | "completed")}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-700"
      >
        <option value="all">Todas</option>
        <option value="pending">Pendentes</option>
        <option value="completed">Completas</option>
      </select>
    </div>
  );
};

export default TaskFilter;