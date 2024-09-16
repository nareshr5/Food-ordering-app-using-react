const SignIn = () =>{
    return(

            <div className="bg-orange-500 h-screen">
            
              <form  onSubmit={(e) => e.preventDefault()}   className="absolute my-[10%] w-3/12 mx-auto left-0 right-0 py-6 bg-black flex flex-col bg-opacity-75 text-white">
                <h1 className="py-1 px-2 mx-3 my-1 text-2xl">Sign In</h1>
                <input className="py-1.5 px-2 mx-4 my-3" type="email" placeholder="Email"/>
                <input className="py-1.5 px-2 mx-4 my-3" type="password" placeholder="Password"/>
                <button className="py-1.5 px-2 mx-4 my-3 bg-red-700 rounded-lg">Submit</button>
              </form>
            </div>
       
    );
}

export default SignIn;