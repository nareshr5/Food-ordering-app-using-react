const Cart = ()=>{

    // if the user is not signed in redirect the user to the signin page and then direct him to the cart page
    return(

    <div className="w-7/12 h-screen mx-auto mt-3 bg-slate-200">
        <h1 className="bg-orange-500 font-bold text-white py-2 text-2xl"> Cart</h1>
        
        <div className="bg-slate-300 w-auto h-screen mx-4 my-2 border-white border-4 ">
            <div className="flex">
                 <img className="w-13 h-13" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/dxtygbfmmlrsdtrf7hf2" alt="res_image" />
                 <div className="text-xl font-bold"> Fayaz Restaurant</div>
                 <div className="font-semibold text-slate-600">Kumbakonam Locality</div>

            
            </div>

            <div>fried rice</div>
            
        </div>

   </div>
   );
}

export default Cart;