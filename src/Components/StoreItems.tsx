import React from "react";
type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};
const StoreItems = ({ id, name, price, imageUrl }: StoreItemsProps) => {
  return (
    <div className="bg-white flex flex-col rounded-sm w-96"  key={id}>
      <img src={imageUrl} className="h-[300px] w-full rounded-t-sm object-cover" />
      <div className="p-4 flex justify-between items-end">
        <span className="text-xl">{name}</span>
        <span className="text-slate-500">{price}</span>
      </div>
    </div>
  );
};

export default StoreItems;
