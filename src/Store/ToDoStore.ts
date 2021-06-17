import { computed } from "mobx"
import { action, makeObservable, observable } from "mobx"
import { v4 as uuidv4 } from 'uuid';

export interface ITodo{
    id:string,
    text:string,
    completed:boolean
}

class TodoStore{
    todos:ITodo[]=[]
    constructor(todosFromStorage:ITodo[]){
        this.todos = todosFromStorage
        makeObservable(this,{
            todos:observable,
            addTodo:action,
            removeTodo:action,
            completedTodo:computed,
            changeStatus:action
        })
    }
    addTodo(todo:ITodo){
        this.todos.push(todo)
        localStorage.setItem("todos",JSON.stringify(this.todos))
    }
    removeTodo(id:string|number){
        this.todos=this.todos.filter((todo)=>todo.id!==id)
        localStorage.setItem("todos",JSON.stringify(this.todos))
    }
    get completedTodo(){
        return this.todos.filter(todo=>todo.completed===true).length
    }
    changeStatus(id:string|number){
        this.todos=this.todos.map(todo=>{
            if(todo.id===id){
                return {...todo,completed:!todo.completed}
            }
            return todo
        })
        localStorage.setItem("todos",JSON.stringify(this.todos))
    }
}
const todosFromStorage = localStorage.getItem("todos")
const initState = todosFromStorage?JSON.parse(todosFromStorage):[]
export default new TodoStore(initState as ITodo[])