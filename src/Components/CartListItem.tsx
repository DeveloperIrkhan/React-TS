import { useShoppingCart } from "../Context/CartContext";
import products from "../data/products.json";
import { formatCurrency } from "../Utilities/FormatCurrency";
interface ICartListItemsProps {
  id: number;
  quantity: number;
}
const CartListItem = ({ id, quantity }: ICartListItemsProps) => {
  const { removeFromQuantity } = useShoppingCart();

  const product = products.find((item) => item.id === id);
  if (product === null) return null;
  return (
    <div>
      {product && (
        <div className="flex gap-2 justify-between items-center border-b border-blue-300 pb-1">
          <img className="w-24 h-16 object-cover" src={product.imageUrl} />
          <div className="flex float-end gap-6">
            <span className="font-bold ml-1">{product.name}</span>
            <span>x {quantity}</span>
            <span>
              <span className="font-bold">price : </span>
              {formatCurrency(product.price)}
            </span>
            <span>
              <span className="font-bold">Sub Total : </span>{" "}
              {formatCurrency(product.price * quantity)}
            </span>
            <span
              onClick={() => removeFromQuantity(id)}
              className="w-7 h-7 flex justify-center rounded-md cursor-pointer items-center text-white bg-red-100 hover:bg-red-600"
            >
              x
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartListItem;

// const product = products.find(
//     (product) => product.id === item.id
//   );
//   return (
//     product && (
//       <li
//         key={item.id}
//         className="flex items-center py-2 md:mx-10 mx-2 border-b"
//       >
//         <div className="flex w-full justify-between items-center gap-4">
//           <img className="w-20 h-auto" src={product.imageUrl} />
//           <span>{product.name}</span>
//           <span>Qty: {item.quantity}</span>
//         </div>
//         <CartListItem items={...item} />
//       </li>
