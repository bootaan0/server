import { revalidatePath } from "next/cache";

const todos: string[] = ["Next-js"]; 

export default function Todo(){

async function addTodo(data: FormData){
    "use server"
    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/todo")

}

    return(
    <div>

        <form action={addTodo}>
            <input type="text" name="todo" 
            className="border border-gray-500 p-2 rounded-md"/>
            <button className="bg-blue-500 text-white p-2 rounded-md">Add todo </button>
        </form>
        <ul>
        {todos.map((todo, index) => (
           <li key={index}>{todo}</li> 
        ))}
        </ul>
    </div> 
    
)}