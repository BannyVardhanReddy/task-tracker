import axios from "axios";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import './App.css'
import InputSection from "./components/InputSection";
import Home from "./pages/Home";
export default function App() {
  const [data, setData] = useState({
    description: "",
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTask() {
      const data = await axios.get("http://localhost:3000/tasks/");
      setTasks([...data.data.tasks]);
      console.log(data);
    }
    getTask();
  }, []);
  
  useEffect(()=>{
    console.log(tasks);
  },[tasks])
  async function handleOnUpdate(task) {
    try {
      console.log(task);
      const response = await axios.put(
        `http://localhost:3000/tasks/${task._id}`,
        { isCompleted: !task.isCompleted },
      );
      console.log(response);
      console.log(tasks);

      setTasks((prev) =>
        prev.map((p) => (p._id === task._id ? response.data.task : p)),
      );
    } catch (err) {
      console.log(err.response);
      console.log(err.response.data);
    }
  }

  async function handleOnSubmit() {
    try {
      console.log(data);
      const task = await axios.post("http://localhost:3000/tasks/", data);
      setTasks((prev) => [...prev, task.data.task]);

      setData({
        description: "",
      });
    } catch (err) {
      console.log(err.response);
      console.log(err.response.data);
    }
  }
  async function handleOnDelete(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
      console.log(response);

      setTasks((prev) =>
        prev.filter((task) => {
          return task._id !== id;
        }),
      );
    } catch (e) {
      console.log(e.response);
    }
  }

  return (
    <>
      <h1>Task Manager</h1>
      <InputSection data={data} setData={setData} handleOnSubmit={handleOnSubmit}/>
      <TaskList
        tasks={tasks}
        handleOnDelete={handleOnDelete}
        handleOnUpdate={handleOnUpdate}
      ></TaskList>
      <Home></Home>
    </>
  );
}
