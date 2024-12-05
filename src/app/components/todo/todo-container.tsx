import Container from "../ui/container";
import AddToDo from "./add-todo-modal";
import TodoCard from "./todo-card";
import FilterDropDown from "./todo-filter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <AddToDo />
        <FilterDropDown />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-1">
        <div className="bg-white w-full h-full p-5 rounded-lg space-y-2">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
      <Container></Container>
    </div>
  );
};

export default TodoContainer;
