import NAME from "./components/NAME";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState , useReducer} from "react";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todoItemsStore";



const todoItemsReducer= (action) =>{
    return [];
}
function App() {
  const [todoItems, setTodoItems] = useState([]);
  //const [newTodoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, date: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const deleteItem = (todoItemName) => {
    const newItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
         todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <NAME />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
