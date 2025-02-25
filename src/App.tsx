import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import { ShoppingCartContextProvider } from "./Context/CartContext";
const App = () => {
  return (
    <ShoppingCartContextProvider>
      <div className="">
        <Navbar />
        <div className="px-[4vmin] my-[2vmin]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </ShoppingCartContextProvider>
  );
};

export default App;

// import { useState } from "react";
// import "./App.css";
// import Button from "./Components/button";
// function App() {
//   const [getNumber, setGetNumber] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const showNumber = (): string => {
//     setMessage(getNumber);
//     return `Entered Number: ${getNumber}`; // Now it returns a string
//   };
//   return (
//     <>
//       <div className="flex flex-col gap-y-2">
//         <input
//           type="text"
//           className="border border-black"
//           value={getNumber}
//           onChange={(e) => setGetNumber(e.target.value)}
//         />
//         <Button
//           backgroundColor="#ffcf"
//           fontSize={20}
//           rounded={false}
//           buttonText="Click me"
//           padding="10px 30px 10px 30px"
//           border={2}
//           onClickFun={showNumber}
//         />
//         <p>{message}</p>
//       </div>
//     </>
//   );
// }

// export default App;
