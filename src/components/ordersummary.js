const OrderSummary = () =>{
    return(
        <div className="mt-2 mx-2">
            <h1 className="text-2xl font-bold bg-orange-600 text-white p-2  ">Order Summary</h1>
            <div className="px-2 bg-gray-300 w-full h-96 mt-2 ">
                <h2>Order details</h2>

                <div className="bg-gray-500 w-full h-70">
                    <ul className="flex p-2 font-semibold">
                        <li>Items - </li>
                        <li>Price</li>
                    </ul>
                </div>

                
            </div>
            
        </div>
    );
}

export default OrderSummary;