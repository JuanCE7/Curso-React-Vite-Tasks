import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-500 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <h1 className="text-gray-100 text-sm">{task.description}</h1>
      <button
        className="bg-red-900 px-3 py-2 rounded-md mt-5 hover:bg-black"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete Task
      </button>
    </div>
  );
}

export default TaskCard;
