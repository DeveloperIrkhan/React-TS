import { createContext, ReactNode, useContext, useState } from "react";
import useLocalStorage from "../CustomHooks/useLocalStorage";

// step 2 creating context
const shoppingCartContext = createContext({} as IShoppingCartContextProps);
// step 1 creating custom hook
export const useShoppingCart = () => useContext(shoppingCartContext);

interface IShoppingCartContextProps {
  gettingItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromQuantity: (id: number) => void;
  isOpen: boolean;
  toggleCartSideBar: () => void;
  cartQuantity: number;
  cartItems: ICartItem[];
}

interface IShoppingCartProps {
  children: ReactNode;
}

interface ICartItem {
  id: number;
  quantity: number; // quantity of item in cart
}
// step 3 creating provider for the shoppingCartContext
export const ShoppingCartContextProvider = ({
  children
}: IShoppingCartProps) => {
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "shopping-cart",
    []
  ); // storage Place
  const [isOpen, setIsOpen] = useState<boolean>(false); // storage Place
  const gettingItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((existingItem) => {
      if (existingItem.find((item) => item.id === id)?.quantity === 1) {
        return existingItem.filter((item) => item.id !== id);
      } else {
        return existingItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      }
    });
  };
  const removeFromQuantity = (id: number) => {
    return setCartItems((existingItem) => {
      return existingItem.filter((item) => item.id !== id);
    });
  };

  //   const cartQuantity = cartItems.length;
  // it will return count of each element
  //   and this will calculate the each Element as well as the quantity+
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const toggleCartSideBar = () => setIsOpen((prev) => !prev);
  const values = {
    toggleCartSideBar,
    cartQuantity,
    cartItems,
    gettingItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromQuantity,
    isOpen
  };
  return (
    <shoppingCartContext.Provider value={values}>
      {children}
    </shoppingCartContext.Provider>
  );
};
