import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

function App() {
  // const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;
