import TodoContainer from "./app/components/todo/todo-container";
import Container from "./app/components/ui/container";

interface AppProps {}

const App = () => {
  return (
    <div className="bg-slate-50">
      <Container>
        <div className="mx-auto text-center w-full py-10">
          <h1 className="text-2xl font-bold">This is a App Component</h1>
        </div>
        <TodoContainer />
      </Container>
    </div>
  );
};

export default App;
