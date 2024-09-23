import { revalidatePath } from "next/cache";

const todos: string[] = ["learn next"]

export default async function About(){

async function addTodo (data: FormData){
    "use server"
    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/")
}
return(
  <div className="p-24 text-center">
    <h1 className="text-2xl font-bold text-center">Todo</h1>
    <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
    </ul>
    <form action={addTodo} className="flex flex-col gap-2 p-4 justify-center max-w-xl mx-auto"> 
        <input type="text" name="todo" 
        className="border border-gray-500 p-2 rounded-md"/>
        <button className="bg-blue-500 text-white p-2 rounded-md">Add todo</button>
    </form>
 </div>
    
)}