import { observer } from "mobx-react-lite";
import React, { ChangeEvent, memo } from "react";
import { useState } from "react";
import SingleTodo from "./SingleTodo";
import { v4 as uuidv4 } from "uuid";
import RootStore from "./Store/RootStore";
import { autorun, reaction } from "mobx";

const TodoList = observer(() => {
  const { ToDoStore } = RootStore;
  const [text, setText] = useState("");
  

  return (
    <div>
      {ToDoStore.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}

      <input
        type="text"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() =>
          ToDoStore.addTodo({ id: uuidv4(), completed: false, text })
        }
      >
        добавить
      </button>
      {`всего выполнено ${ToDoStore.completedTodo}`}
    </div>
  );
});

export default TodoList;
