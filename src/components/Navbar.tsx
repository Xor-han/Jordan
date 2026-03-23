import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [onColor, setOnColor] = useState(false);

  const handleOnClick = () => {
    setOnColor(!onColor);
  };
  return (
    <nav className="flex justify-between border">
      <div className="px-8 py-4 border-r items-center">
        <img src="./Logo.png" alt="Logo de Jordan" />
      </div>
      <ul className="flex gap-8 px-8 py-4 border-b border-t w-full justify-center items-center max-sm:hidden">
        <Link
          onClick={handleOnClick}
          to="/"
          className={`py-2 px-6 rounded-full ${onColor ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/shop"
          onClick={handleOnClick}
          className={`py-2 px-6 rounded-full  ${onColor ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <li>Shop</li>
        </Link>
        <Link
          to="/contact"
          onClick={handleOnClick}
          className={`py-2 px-6 rounded-full ${onColor ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <div className="flex gap-6 py-4 px-6 border-l items-center max-sm:border-0">
        <User />
        <ShoppingCart />
      </div>
    </nav>
  );
};
