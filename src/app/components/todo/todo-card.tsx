import { removeTodo, TTodo } from "@/app/redux/features/todo/todo-slice";
import { useAppDispatch } from "@/app/redux/hooks";
import { Button } from "../shadcn/button";

const TodoCard = ({ todo }: { todo: TTodo }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm drop-shadow-sm border border-slate-200">
      <input
        type="checkbox"
        name=""
        id=""
        className="text-green-500 p-2 rounded-lg border border-green-800"
      />
      <p className="text-lg">{todo.title}</p>
      <p className="text-lg italic text-gray-200">Time</p>
      <p className="text-lg">{todo.description}</p>
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="rounded-md shadow-sm drop-shadow-sm bg-red-500 shadow-red-200"
        >
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
