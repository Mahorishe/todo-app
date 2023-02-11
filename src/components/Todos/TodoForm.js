import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handlerSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div className={styles.todoContainerForm}>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Add todo">
          Submit
        </Button>
      </form>
    </div>
  );
}
