import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
export default function TodoActions({
  resetTodos,
  deleteCompleted,
  completedTodosExist,
}) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete Completed Todos"
        onClick={deleteCompleted}
        disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}
