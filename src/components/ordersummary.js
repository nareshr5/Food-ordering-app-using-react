const OrderSummary = () =>{
    return(
        <div className="mt-2 mx-2">
            <h1 className="text-2xl font-bold bg-orange-600 text-white p-2  ">Order Summary</h1>
            <div className="px-2 bg-gray-300 w-full h-96 mt-2 ">
                <h2>Order details</h2>

                <div className="bg-gray-500 w-full h-70">
                    <ul className="flex p-2 font-semibold justify-around">
                        <li><img className="w-[50%] h-[70%] object object-cover pt-2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/10/24/f030a47f-b499-4c05-9d19-ab50fc288e07_PCTIleIndianSweets1.png" alt="res_image" /> </li>
                        <li>Quantity </li>
                        <li>Items - Price </li>
                        
                    </ul>
                </div>

                
            </div>
            
        </div>
    );
}

export default OrderSummary;