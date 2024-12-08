import { useGetTodosQuery } from "@/app/redux/API/api";
import { Button } from "../shadcn/button";
import Container from "../ui/container";
import AddToDo from "./add-todo-modal";
import FilterDropDown from "./todo-filter";

const TodoContainer = () => {
  // TODO: From local state
  // const { todos } = useAppSelector((state) => state.todos);

  // TODO: From server
  const { data: todos, isError, isLoading } = useGetTodosQuery("todos");
  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log("🚀 ~ TodoContainer ~ todos:", todos);
  return (
    <div>
      <div className="flex justify-between mb-2">
        <AddToDo />
        <FilterDropDown />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-1">
        <div className="bg-white w-full h-full p-5 rounded-lg space-y-2">
          {todos.map((todo: any) => (
            <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm drop-shadow-sm border border-slate-200">
              <input
                type="checkbox"
                name=""
                id=""
                className="text-green-500 p-2 rounded-lg border border-green-800"
              />
              <p className="text-lg">{todo.id}</p>
              <p className="text-lg italic text-gray-200">Time</p>
              <p className="text-lg">{todo.title}</p>
              <div className="flex items-center justify-center gap-3">
                <Button className="rounded-md shadow-sm drop-shadow-sm bg-red-500 shadow-red-200">
                  Delete
                </Button>
                <Button className="rounded-md shadow-sm drop-shadow-sm bg-indigo-950 shadow-indigo-100">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="bg-white w-full h-full p-5 rounded-lg space-y-2">
          {todos.length > 0 ? (
            todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
          ) : (
            <div className="bg-white w-full h-full rounded-lg">
              <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm drop-shadow-sm border border-slate-200">
                <p>There is no todo left</p>
              </div>
            </div>
          )}
        </div> */}
      </div>
      <Container></Container>
    </div>
  );
};

export default TodoContainer;
