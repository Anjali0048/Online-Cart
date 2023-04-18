import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom/dist";
import logo from "../logoo/logo.jpg"
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
  <div>
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

      <NavLink to="/">
        <div>
          <img className="w-20" src={logo} alt="" />
        </div>
      </NavLink>

      <div className="flex items-center space-x-3 text-white text-lg">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl"/>
            {
              cart.length > 0 && 
              <span className="absolute -top-1 -right-2 bg-green-500 animate-bounce w-5 h-5 rounded-full flex justify-center items-center text-xs">
                {cart.length}
              </span>
            }
          </div>  
        </NavLink>
      </div>

    </nav>
  </div>
  )
};

export default Navbar;
