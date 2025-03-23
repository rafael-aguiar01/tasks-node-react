import { useState, useEffect } from "react";
import { Task } from "../types/Task";
import { toast } from "react-toastify";
import api from "../utils/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
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
      await api.patch(`/tasks/${id}`, { status: "COMPLETED" });
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
      await api.delete(`/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      toast.success("Tarefa excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      toast.error("Erro ao excluir a tarefa.");
    }
  };

  return { tasks, addTask, toggleTaskCompletion, deleteTask };
};