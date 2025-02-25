import React, { useEffect } from "react";
import { formatCurrency } from "../Utilities/FormatCurrency";
import { useShoppingCart } from "../Context/CartContext";
type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
const StoreItems = ({ id, name, price, imageUrl }: StoreItemsProps) => {
  const {
    gettingItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromQuantity
  } = useShoppingCart();
  const quantity = gettingItemQuantity(id);
  useEffect(() => {
    console.log("quantity", quantity);
  }, [quantity]);
  return (
    <div
      className="group bg-white flex flex-col rounded-sm w-86 overflow-hidden"
      key={id}
    >
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          className="h-[300px] w-full rounded-t-sm object-cover duration-300 group-hover:scale-125 group-hover:rotate-6"
        />
      </div>
      <div className="p-4 flex justify-between items-end">
        <span className="text-xl">{name}</span>
        <span className="text-slate-500">{formatCurrency(price)}</span>
      </div>
      <div className="flex items-center justify-between p-2">
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(id)}
            className="w-full px-2 py-1 text-white shadow-md rounded-md font-medium bg-blue-300 duration-200 hover:bg-blue-400"
          >
            + Add To Cart
          </button>
        ) : (
          <div className="flex flex-col m-auto items-center gap-3">
            <div className="flex justify-center items-center gap-4">
              <span
                onClick={() => decreaseCartQuantity(id)}
                className="p-0 m-0 w-6 h-6 text-lg font-medium bg-blue-300 hover:bg-blue-400 duration-150 cursor-pointer flex justify-center items-center text-white leading-none"
              >
                -
              </span>
              <span>
                <span className="text-xl mx-2">{quantity}</span>in cart
              </span>
              <span
                onClick={() => increaseCartQuantity(id)}
                className="p-0 m-0 w-6 h-6 text-lg font-medium bg-blue-300 hover:bg-blue-400 duration-150 cursor-pointer flex justify-center items-center text-white leading-none"
              >
                +
              </span>
            </div>
            <button
              onClick={() => removeFromQuantity(id)}
              className="w-full px-2 py-1 text-white shadow-md rounded-md font-medium bg-red-300 duration-200 hover:bg-red-400"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItems;
