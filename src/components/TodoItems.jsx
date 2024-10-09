import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import Item from "./Item";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  const {deleteItem,todoItems} = useContext(TodoItemsContext)
  return (
    <>
      <div className={styles.ItemsCotainer}>
        {todoItems.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            date={item.date}
            onDeleteClick={deleteItem}
          ></Item>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
