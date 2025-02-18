import { useDispatch } from "react-redux";
import { addPayment } from "../utils/paymentslice";

import { useSelector } from "react-redux";

const BillDetails = () =>{

    const dispatch = useDispatch();

    const {cartList} =useSelector((store)=> store.cart);

    

    let price=0;
    cartList.map((item)=> (
        price=price+((item?.details?.card?.info?.price/100)*(item?.quantity))
    ))

   // settotalprice(price);
    //console.log(price);
    //console.log(totalprice);
    const delivery_fee = (price*0.08);
    const platform_fee=6;
    const total=price+delivery_fee+platform_fee;
    const taxes = total*0.07;
    const toPay=total+taxes;

    dispatch(addPayment(toPay));




    return (
    <div>
        <ul className="border-gray-400 border-4 text-slate-500 mx-5 my-5 rounded-xl">

            <div className="mx-3">

                <h3 className="my-2 font-bold text-black">Bill Details</h3>

                <div className="flex justify-between">
                <li>Item Total</li>
                <li>₹ {price}</li>
                </div>

                <div className="flex justify-between">
                <li>Delivery Partner fee</li>
                <li>₹ {delivery_fee.toPrecision(3)}</li>

                </div>
                <div className="border-b-2 border-gray-400 my-3"> </div>

                {/* <div className="flex justify-between">
                <li>Delivery Tip</li>
                <li className="text-orange-600">Add tip</li>
                </div> */}

                <div className="flex justify-between">
                <li>Platform fee</li>
                <li>₹ {platform_fee}</li>
                </div>

                <div className="flex justify-between">
                <li>GST and Restaurant Charges</li>
                <li>₹ {taxes.toPrecision(3)}</li>
                </div>

                <div className="border-b-2 border-black my-4"> </div>

                <div className="flex justify-between text-black font-bold mb-2">
                    <li>To PAY</li>
                    <li>₹ {toPay.toPrecision(3)}</li>
                </div>

                

            </div>

            </ul>
            

            
    </div>
)
}

export default BillDetails;