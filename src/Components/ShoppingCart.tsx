import { useShoppingCart } from "../Context/CartContext";
import CartListItem from "./CartListItem";
import products from "../data/products.json";
import { formatCurrency } from "../Utilities/FormatCurrency";
const ShoppingCart = () => {
  const { isOpen, toggleCartSideBar, cartItems } = useShoppingCart();
  return (
    <div>
      <div
        className={`fixed top-0 right-0 md:w-180 w-2/3 h-full bg-white shadow-lg
      p-4 z-50 transition-transform duration-400 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      >
        <button
          onClick={toggleCartSideBar}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✖
        </button>

        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <div className="my-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <CartListItem key={item.id} {...item} />
              ))}
            </div>
          )}
          <div className="flex text-xl font-bold items-center float-end my-10 md:mx-10 mx-2">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
