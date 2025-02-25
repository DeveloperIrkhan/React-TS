import StoreItems from "../Components/StoreItems";
import Title from "../Components/Title";
// import { useShoppingCart } from "../Context/ShoppingCartContext";
import products from "../data/products.json";
const Store = () => {
  // const { cartItems } = useShoppingCart();
  return (
    <>
      <Title title="Store" />

      <div className="md:mx-5 mx-2">
        {/* <div className="flex flex-wrap gap-4 items-center justify-between"> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-2">
          {products.map((item) => (
            <StoreItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
