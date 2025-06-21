const Shimmer =() =>{
    return (
        
        <div className="shimmerContainer  mt-[65px] mx-auto w-[1010px]  ">


            <div className="flex justify-evenly  bg-gradient-to-b from-gray-400 mb-8">


                {/* shorter version for creating shimmer effect */}
                {Array(7).fill(0).map(()=>(
                    <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                ))}

                 {/* <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                 <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-100"></div>
                 <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-slate-300"></div>
                 <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-100"></div>
                 <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-slate-300"></div>
                 <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-100"></div>
                 <div className="  m-[5px] w-36 h-[180px] p-[7px] border-[1px] border-solid border-gray-200bg-gradient-to-r from-slate-300"></div> */}
                 
                 
            

            </div>



            <div>
                <p className="border border-b-2 border-gray-500 mx-4 my-2"> </p>
            </div>



            <div className="flex justify-evenly my-14 bg-gradient-to-b from-gray-400">

                {Array(1).fill(0).map(() =>(
                    <div className="flex">
                        <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                        <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-200"></div>
                    </div>


                ))}

                {/* <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-200"></div>
                <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-200"></div> */}
                
                
            </div>

            <div className="flex justify-evenly bg-gradient-to-b from-gray-400">


            {Array(1).fill(0).map(() =>(
                    <div className="flex">
                        <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                        <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-200"></div>
                    </div>


                ))}

                {/* <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-200"></div>
                <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-200 bg-gradient-to-r from-gray-300"></div>
                <div className=" bg-gray-100 m-[5px] w-[273px] h-[284px] p-[7px] border-[1px] border-solid border-gray-500 bg-gradient-to-l from-slate-200"></div> */}
                
                    
                    
                    

            </div>

            <div>
                <p className="border border-b-2 border-gray-500 mx-4 my-2"> </p>
            </div>
    
    
    
   
    </div>);
    
    
    }
    
    export default Shimmer;