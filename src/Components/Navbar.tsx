import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky flex items-center px-[4vmin] bg-white shadow-md h-15 mb-3">
      <div className="pr-4 flex justify-between items-center gap-4 me-auto uppercase">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `duration-200 ${isActive ? "text-2xl text-blue-400" : "text-xl"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Products"
          className={({ isActive }) =>
            `duration-200 ${isActive ? "text-2xl text-blue-400" : "text-xl"}`
          }
        >
          Store
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `duration-200 ${isActive ? "text-2xl text-blue-400" : "text-xl"}`
          }
        >
          About
        </NavLink>
      </div>
      <div className="relative bg-slate-100 duration-200 rounded-full w-10 h-10 flex justify-center items-center hover:bg-blue-400 hover:text-white">
        <CiShoppingCart size={30}/>
        <span className="absolute bottom-0 right-0 translate-2 bg-red-500 text-white h-5 w-5 flex justify-center items-center rounded-full">2</span>
      </div>
    </div>
  );
};

export default Navbar;
