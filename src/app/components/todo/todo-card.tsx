import { Button } from "../shadcn/button";

const TodoCard = () => {
  return (
    <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm drop-shadow-sm border border-slate-200">
      <input
        type="checkbox"
        name=""
        id=""
        className="text-green-500 p-2 rounded-lg border border-green-800"
      />
      <p className="text-xl font-semibold">Todo Title</p>
      <p className="text-xl font-semibold">Time</p>
      <p className="text-xl font-semibold">Description</p>
      <div className="flex items-center justify-center gap-3">
        <Button className="rounded-md shadow-sm drop-shadow-sm bg-red-500 shadow-red-200">
          Delete
        </Button>
        <Button className="rounded-md shadow-sm drop-shadow-sm bg-indigo-950 shadow-indigo-100">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
