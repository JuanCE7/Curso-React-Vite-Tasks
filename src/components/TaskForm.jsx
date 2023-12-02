import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    //cambia el comportamiento por default
    e.preventDefault();
    createTask({ title, description });
    e.target.reset();
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-5">
        <label className="text-white text-2xl font-serif">ADD TASK</label>
        <input
          autoFocus
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="escribe tu descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-green-600 px-3 py-2 rounded-md mt-5 hover:bg-green-100 hover:text-black text-white" >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
