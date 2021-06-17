import CommentsStore from "./CommentsStore";
import ToDoStore from "./ToDoStore";

class RootStore {
  commentsStore;
  ToDoStore;
  constructor() {
    this.commentsStore = CommentsStore;
    this.ToDoStore = ToDoStore;
  }
}
export default new RootStore();
