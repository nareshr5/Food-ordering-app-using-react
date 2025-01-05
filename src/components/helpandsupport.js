import { useEffect , useState} from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { addHelpOptions } from "../utils/helpandsupportslice";
//import { toggleOnboarding, toggleLegal,toggleFaqs,toggleInstamart } from "../utils/helpandsupportslice";
import { addOnboardingDetails } from "../utils/helpandsupportslice";
//import { toggle } from "../utils/helpandsupportslice";

import Helpandsupportaccordion from "./helpandsupportaccordion";
const HelpAndSupport = () =>{
    useEffect(()=>{
        getSupportOptions();
        getOnboardingDetails();
    },[]);

    const dispatch = useDispatch();

    const getSupportOptions= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/support?");
        const jsonValue = await data.json();
        const options = jsonValue?.data?.issueTypes?.data;
        dispatch(addHelpOptions(options));
        //console.log(options);
        
    }

    const getOnboardingDetails= async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/support/issues/partner-onboarding?");
        const jsonValue=await data.json();
        const details = jsonValue?.data?.issues?.data;
        //console.log(details);
        dispatch(addOnboardingDetails(details));
        
    }

    

    const options = useSelector((store) => store?.help?.optionsList);
    const details = useSelector((store) => store?.help?.onboardingDetails);
    //const toggleValue = useSelector((store)=> store?.help?.toggle);
    // const isToggleOpen = useSelector((store) => store?.help?.isToggleOpen);

    const [isAccordionOpen , setIsAccordionOpen]= useState(false);

    // const toggleHandle = ()=>{
    //     const value = !isAccordionOpen;
    //     setIsAccordionOpen(value);
    //     console.log(isAccordionOpen);
    // }

    if(!options) return null;
    if(!details) return null;

    // console.log(options);

    

    return(
        <div className="px-5 bg-cyan-800 h-[2250.5px]">
            <div className="pt-[33px] mx-[54.5px] text-white w-[1200px] h-[130px] align-middle">
                <h1 className="font-bold text-3xl">Help & Support</h1>
                <div>Let's take a step ahead and help you better</div>
            </div>

            <div className="w-[1300px]  h-[2000.5px] mx-[4.5px] bg-white rounded-3xl">
                {/* <div className="w-[35px] h-[730.5px]"></div> */}
                {/* blank */}
                <div className="w-[1200px] h-[630.5px]  bg-white mx-[50px] py-[50px] flex">

                    
                         {/* side navigation bar code */}
                        <div className="w-[260px] h-[630.55px]">
                            <div>
                                <ul className=" h-[316.75px] w-[260px] py-[20px] bg-slate-100 cursor-pointer ">
                                    {/* <li className="w-[240px] h-[69.19px] bg-white ml-5 px-5 py-[25px]">
                                        <span className="w-[144.375px] h-[19.18px] font-semibold ml-[40px]">Partner Onboarding </span>
                                    </li> */}

                                    {options.map((option) => (

                                        <button key={option.title} >
                                        <li  className="w-[240px] h-[69.19px] bg-slate-100 hover:bg-white ml-5 px-5 py-[25px]  text-slate-500 hover:text-black " value={option.title}>
                                            
                                            <span className="w-[144.5px] h-[19.18px] font-semibold ml-[40px]">{option.title}

                                            </span>
                                            
                                        </li>
                                        </button>

                                    
                                
                                    ))}
                                </ul>
                            </div>


                        </div>



                        {/* accordion coding  */}
                        <div className=" w-[940px] h-[1265.45px] pl-[50px] pt-[37px]">
                             <div className="w-[890px] h-[28.8px] text-[24px] font-semibold">Partner Onboarding</div>
                             {/* <button className="w-[890px] h-[69.59px] pt-[22px] pb-[26px] border-b border-gray-400"></button> */}
                             
                             {details.map((detail)=> (

                                //  <div className="border-b border-gray-400">

                                //     <button  key={detail.title} className="flex justify-between w-[890px] h-[69.59px] pt-[22px] pb-[26px]   text-start hover:text-orange-500">
                                //             <span className="text-lg">{detail.title} </span>
                                         
                                //             < button className="w-5 h-5 mr-5" onClick={()=> setIsAccordionOpen(!isAccordionOpen)}
                                //             >🔻</button>


                                            
                                //     </button>



                                // {(isAccordionOpen) && <div>

                                // {(detail.description) && (<div className="w-[800px] h-[85.78px] pr-[50px] pb-[27px] text-gray-500 text-sm">
                                //             {detail.description}
                                //    </div>)}

                                //    <div className="w-[890px] h-[84px] pb-[27px] cursor-pointer">

                                //         {/* the below line is causing the things to be in a line , need to fix it later */}
                                //        {/* {(detail?.hyperLinkText) && <a href={detail?.hyperLink} classroom=" w-[91.6px] h-[38.8px]  pb-[22px] mr-[20px] align-center">{detail?.hyperLinkText}</a> } */}

                                //       {(detail?.options[0]?.type ) && (<a href={detail?.hyperLink} className="text-orange-500 font-semibold border border-orange-500 px-[15px] text-sm w-[136.64px] h-[40px]">SEND AN MAIL</a> ) }

                                //       <div className="w-[136.64px] h-[12px] mt-[5px] text-[10px] text-gray-500">
                                //             {detail?.options[0]?.waitTime}
                                //       </div>

                                //    </div>


                                // </div>}
                                 

                                    

                                //    </div>   
                                
                                <Helpandsupportaccordion data={detail}/>
                                ))
                                }
                        </div>
                    
                </div>

                
            </div>
        </div>
);
}

export default HelpAndSupport;