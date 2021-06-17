import { autorun, reaction, when } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import RootStore from "./Store/RootStore";

const Comments = observer(() => {
  const { commentsStore, ToDoStore } = RootStore;
  const { comments, error, loading } = commentsStore;
  useEffect(() => {
    commentsStore.fetchComments(
      "https://jsonplaceholder.typicode.com/comments?_limit=20"
    );
  }, []);

  return (
    <div>
      {loading ? "LOADING..." : error ? error : null}
      {comments?.map(({ name }) => (
        <div>{name}</div>
      ))}
    </div>
  );
});

export default Comments;
