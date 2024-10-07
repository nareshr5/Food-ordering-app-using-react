const BillDetails = () =>{
    return (
    <div>
        <ul className="border-black border-4 text-slate-500 mx-5 my-5">

            <div className="mx-3">

                <h3 className="my-2 font-bold text-black">Bill Details</h3>

                <div className="flex justify-between">
                <li>Item Total</li>
                <li>₹99</li>
                </div>

                <div className="flex justify-between">
                <li>Delivery Partner fee</li>
                <li>₹21</li>

                </div>
                <div className="border-b-2 border-gray-400 my-3"> </div>

                <div className="flex justify-between">
                <li>Delivery Tip</li>
                <li className="text-orange-600">Add tip</li>
                </div>

                <div className="flex justify-between">
                <li>Platform fee</li>
                <li>₹6</li>
                </div>

                <div className="flex justify-between">
                <li>GST and Restaurant Charges</li>
                <li>₹13.28</li>
                </div>

                <div className="border-b-2 border-black my-4"> </div>

                <div className="flex justify-between text-black font-bold">
                    <li>To PAY</li>
                    <li>₹139</li>
                </div>

                

            </div>

            </ul>
            

            
    </div>
)
}

export default BillDetails;