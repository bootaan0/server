

export default async function Login(){
    await new Promise (resolve => setTimeout(resolve, 2000))
    return(
        <div>
            <h1 className="text-center text-3xl m-3">Login</h1>
            <form action={async (formData: FormData) => {
                'use server'
                console.log(formData.get('text'));
                console.log(formData.get('password'));
                
            }} className="flex flex-col gap-5 p-4 justify-center max-w-xl mx-auto">
                <input name="text" placeholder="Enter email" required 
                className="border border-gray-500 p-2 rounded-md"/>
                <input type="password" name="password" placeholder="Enter password" required 
                className="border border-gray-500 p-2 rounded-md"/>
               
                <button className="bg-blue-500 p-2 text-white rounded-md">login</button>
            </form>
        </div>
    )
}