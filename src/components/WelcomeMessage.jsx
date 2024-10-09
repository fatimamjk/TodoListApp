import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
import { TodoItemsContext } from "../store/todoItemsStore";
const WelcomeMessage=()=>{
  const ContextObj  = useContext(TodoItemsContext)
  const todoItems = ContextObj.todoItems;

return  todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>


}



export default WelcomeMessage;