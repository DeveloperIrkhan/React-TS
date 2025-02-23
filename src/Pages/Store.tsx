import StoreItems from "../Components/StoreItems";
import Title from "../Components/Title";
import products from "../data/products.json";
const Store = () => {
  return (
    <>
      <Title title="Store" />

      <div className="mx-10">
      {/* <div className="flex flex-wrap gap-4 items-center justify-between"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <StoreItems {...item}/>
        ))}
      </div>
      </div>
    </>
  );
};

export default Store;
