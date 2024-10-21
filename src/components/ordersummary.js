const OrderSummary = () =>{
    return(
        <div className="mt-2 mx-2">
            <h1 className="text-2xl font-bold bg-orange-600 text-white p-2 ">Order Summary</h1>
            <h2>Order details</h2>
            <ul className="flex">
                <li>Items - </li>
                <li>Price</li>
            </ul>
        </div>
    );
}

export default OrderSummary;