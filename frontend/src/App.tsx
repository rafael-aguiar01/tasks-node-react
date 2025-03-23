import React from "react";
import TaskList from "./components/TaskList/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen w-full flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <TaskList />
      <ToastContainer />
    </div>
  );
};

export default App;