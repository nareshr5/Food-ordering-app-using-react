import { useState } from "react";

const Helpandsupportaccordion=(props) =>{

    const {data}=props;
    const {title,description,hyperLinkText,hyperLink}=data;
    console.log(data);

    const [isAccordionOpen,setIsAccordionOpen]=useState(false);

    return(
        <div>


                    <div className="border-b border-gray-400">

                            <button  key={title} className="flex justify-between w-[890px] h-[69.59px] pt-[22px] pb-[26px]   text-start hover:text-orange-500">
                                        <span className="text-lg">{title} </span>
                                    
                                        < button className="w-5 h-5 mr-5" onClick={()=> setIsAccordionOpen(!isAccordionOpen)}
                                    >🔻</button>


                                    
                            </button>



                    {(isAccordionOpen) && <div>

                    {(description) && (<div className="w-[800px] h-[85.78px] pr-[50px] pb-[27px] text-gray-500 text-sm">
                                {description}
                    </div>)}

                    <div className="w-[890px] h-[84px] pb-[27px] cursor-pointer">

                            {/* the below line is causing the things to be in a line , need to fix it later */}
                        {/* {(detail?.hyperLinkText) && <a href={detail?.hyperLink} classroom=" w-[91.6px] h-[38.8px]  pb-[22px] mr-[20px] align-center">{detail?.hyperLinkText}</a> } */}

                        {(data?.options[0]?.type ) && (<a href={hyperLink} className="text-orange-500 font-semibold border border-orange-500 px-[15px] text-sm w-[136.64px] h-[40px]">SEND AN MAIL</a> ) }

                        <div className="w-[136.64px] h-[12px] mt-[5px] text-[10px] text-gray-500">
                                {data?.options[0]?.waitTime}
                        </div>

                    </div>


                    </div>}
 

    

           </div> 








        </div>
    );
}

export default Helpandsupportaccordion;