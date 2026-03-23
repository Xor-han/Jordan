import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="px-8 py-4 border items-center">
        <img src="./Logo.png" alt="Logo de Jordan" />
      </div>
      <ul className="flex gap-8 px-8 py-4 border-b border-t w-full justify-center items-center">
        <Link to="/" className={`py-2 px-6 rounded-full`}><li>Home</li></Link>
        <Link to="/shop" className={`py-2 px-6 rounded-full`}><li>Shop</li></Link>
        <Link to="/contact" className={`py-2 px-6 rounded-full`}><li>Contact</li></Link>
      </ul>
      <div className="flex gap-6 py-4 px-6 border items-center">
        <User/>
        <ShoppingCart/>
      </div>
    </nav>
  );
};
