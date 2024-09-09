import {useEffect,} from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { addHelpOptions } from "../utils/helpandsupportslice";
import { toggleOnboarding, toggleLegal,toggleFaqs,toggleInstamart } from "../utils/helpandsupportslice";

const HelpAndSupport = () =>{
    useEffect(()=>{
        getSupportOptions();
    },[]);

    const dispatch = useDispatch();

    const getSupportOptions= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/support?");
        const jsonValue = await data.json();
        const options = jsonValue?.data?.issueTypes?.data;
        dispatch(addHelpOptions(options));
       // console.log(options);
        
    }

    const options = useSelector((store) => store?.help?.optionsList);

    if(!options) return null;

    console.log(options);

    return(
        <div className="px-5 bg-cyan-800">
            <div className="pt-[33px] mx-[54.5px] text-white w-[1200px] h-[130px] align-middle">
                <h1 className="font-bold text-3xl">Help & Support</h1>
                <div>Let's take a step ahead and help you better</div>
            </div>

            <div className="w-[1300px] h-[730.5px] mx-[4.5px] bg-white">
                {/* <div className="w-[35px] h-[730.5px]"></div> */}
                blank
                <div className="w-[1200px] h-[630.5px] bg-white mx-[50px] py-[50px]">

                    
                        <div className="w-[260px] h-[630.55px]">
                            <div>
                                <ul className=" h-[316.75px] w-[260px] py-[20px] bg-slate-100 cursor-pointer">
                                    {/* <li className="w-[240px] h-[69.19px] bg-white ml-5 px-5 py-[25px]">
                                        <span className="w-[144.375px] h-[19.18px] font-semibold ml-[40px]">Partner Onboarding </span>
                                    </li> */}

                                    {options.map((option) => (

                                        
                                        <li key={option.title} className="w-[240px] h-[69.19px] bg-slate-100 hover:bg-white ml-5 px-5 py-[25px]  text-slate-500 hover:text-black ">
                                            
                                            <span className="w-[144.5px] h-[19.18px] font-semibold ml-[40px]">{option.title}

                                            </span>
                                            
                                        </li>
                                    
                                        // <div>
                                        //     <li  key={index} className="w-[240px] h-[69.19px] bg-white ml-5 px-5 py-[25px]">
                                        //     <span className="w-[144.375px] h-[19.18px] font-semibold ml-[40px]">{option} </span>
                                        //     </li>
                                        // </div>
                                    ))}
                                </ul>
                            </div>


                        </div>
                    
                </div>

                
            </div>
        </div>
);
}

export default HelpAndSupport;