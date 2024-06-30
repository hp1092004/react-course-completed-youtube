import TodoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
function TodoItems({ todoItems }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
