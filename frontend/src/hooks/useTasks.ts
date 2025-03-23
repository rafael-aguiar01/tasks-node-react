import { useState, useEffect } from "react";
import { Task } from "../types/Task";
import { toast } from "react-toastify";
import api from "../utils/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      if (response.status !== 200) {
        throw new Error("Erro ao buscar tarefas");
      }
      const data = response.data;
      const formattedTasks = data.tasks.map((task: Task) => ({
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
      }));
      setTasks(formattedTasks);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
      toast.error("Erro ao carregar tarefas.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title: string, description: string) => {
    if (!title.trim()) {
      toast.error("O título da tarefa é obrigatório.");
      return;
    }
    const newTask = {
      title: title.trim(),
      description: description.trim(),
    };
    try {
      const response = await api.post("/tasks", newTask);
      if (response.status !== 201) {
        throw new Error("Erro ao adicionar tarefa");
      }
      const createdTask = response.data;
      setTasks((prevTasks) => [...prevTasks, createdTask]);
      toast.success("Tarefa adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      toast.error("Erro ao adicionar a tarefa.");
    }
  };

  const toggleTaskCompletion = async (id: number) => {
    try {
      const response = await api.patch(`/tasks/${id}`, { status: "COMPLETED" });
      if (response.status !== 200) {
        throw new Error("Erro ao atualizar o status da tarefa");
      }
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: "COMPLETED" } : task
        )
      );
      toast.success("Tarefa concluída com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o status da tarefa:", error);
      toast.error("Erro ao concluir a tarefa.");
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status !== 200) {
        throw new Error("Erro ao deletar tarefa");
      }
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      toast.success("Tarefa excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      toast.error("Erro ao excluir a tarefa.");
    }
  };

  const saveEdit = async (
    id: number,
    title: string,
    description: string,
    onClose: () => void
  ) => {
    const updatedFields: Partial<Task> = {};
    if (title.trim() !== "") {
      updatedFields.title = title.trim();
    }
    if (description.trim() !== "") {
      updatedFields.description = description.trim();
    }
    if (Object.keys(updatedFields).length === 0) {
      toast.info("Nenhuma alteração foi feita.");
      onClose();
      return;
    }
    try {
      const response = await api.put(`/tasks/${id}`, updatedFields);
      if (response.status !== 200) {
        throw new Error("Erro ao editar tarefa");
      }
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, ...updatedFields } : task
        )
      );
      toast.success("Tarefa editada com sucesso!");
      onClose();
    } catch (error) {
      console.error("Erro ao editar tarefa:", error);
      toast.error("Erro ao editar a tarefa.");
    }
  };

  return { tasks, addTask, toggleTaskCompletion, deleteTask, saveEdit };
};