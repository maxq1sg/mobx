import axios, { AxiosResponse } from "axios";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
export type IComment = {
  id: string;
  name: string;
};
class CommentsStore {
  comments: IComment[] | null = null;
  loading: boolean = false;
  error = null;

  constructor() {
    makeObservable(this, {
      comments: observable,
      loading: observable,
      error: observable,
      fetchComments: action,
    });
  }
  async fetchComments(url: string) {
    try {
      this.loading = true;
      const { data } = await axios.get(url);
      this.loading = false;
      this.comments = data;
    } catch (error) {
      this.loading = false;
      this.error = error.message;
    }
  }
}
export default new CommentsStore();
