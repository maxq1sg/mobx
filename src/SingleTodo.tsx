import { observer } from "mobx-react-lite";
import React, { memo, useState } from "react";
import { ITodo } from "./Store/ToDoStore";
import RootStore from "./Store/RootStore";
import Modal from "./Modal";

const SingleTodo = observer(({ todo }: { todo: ITodo }) => {
  const { ToDoStore } = RootStore;
  function clickDeleteHandler() {
    // ToDoStore.removeTodo(todo.id);
    setIsActive(true);
  }
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => ToDoStore.changeStatus(todo.id)}
      />
      {todo.text}
      <button onClick={clickDeleteHandler}>удалить</button>
      <Modal {...{ isActive, setIsActive, id: todo.id }}>
        {`желаете ли вы удалить задание \"${todo.text}\"`}
        <button
          onClick={() => {
            ToDoStore.removeTodo(todo.id);
            setIsActive(false);
          }}
        >
          yes
        </button>{" "}
        <button
          onClick={() => {
            setIsActive(false);
          }}
        >
          no
        </button>
      </Modal>
    </div>
  );
});

export default SingleTodo;
