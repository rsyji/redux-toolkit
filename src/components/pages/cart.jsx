import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/features/cartSilce";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  function handleRemove(productId){
    dispatch(removeItem(productId))
  }
  return (
    <div className="flex flex-col gap-y-3 bg-slate-300">
      <h4 className="text-2xl text-center">Cart</h4>
      {cartItems.map((item) => {
       return(
        <div key={item.id} className="flex justify-between items-center flex-row h-32 bg-white  px-2">
        <img className='h-28 w-28' src={item.image} alt={item.title} />
        <div className="flex justify-center items-center flex-col">
          <h5 className="font-bold">{item.title.slice(0,10)}</h5>
          <span className="font-xl font-bold">$:{item.price}</span>
        </div>
        <button onClick={()=>handleRemove(item.id)} className="bg-red-500 hover:bg-red-600 rounded py-1 px-1 h-8 text-white font-bold"> Remove </button>
      </div>
       )
      })}
    </div>
  );
};

export default Cart;
