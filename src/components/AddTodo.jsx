import { MdOutlineLibraryAdd } from "react-icons/md";

import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

function AddTodo() {
 const {addNewItem} = useContext(TodoItemsContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();



const handleAddButtonClicked = (event) =>{
   event.preventDefault();
   const todoName = todoNameElement.current.value;
   const dueDate = dueDateElement.current.value;
   todoNameElement.current.value="";
   dueDateElement.current.value="";
   addNewItem(todoName, dueDate);
 
}
  return (
    <div className="container text-center">
      <form className="row  kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            
          />
        </div>
        <div className="col-4">
          <input   type="date"   ref={dueDateElement}  />
        </div>
        <div className="col-2">
          <button type="submit"   className="btn btn-success   kg-button">
            <MdOutlineLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
