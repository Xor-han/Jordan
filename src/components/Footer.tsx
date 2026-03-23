import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex justify-between max-md:flex max-md:flex-col">
        <div className="flex gap-20 w-1/2 border-r border-l border-b p-10 max-md:w-full max-sm:flex-wrap">
          <nav>
            <h3 className="text-lg font-bold uppercase">Compagny</h3>
            <ul className="text-sm">
              <Link to="/">
                <li>About Nike</li>
              </Link>
              <Link to="/">
                <li>FAQ</li>
              </Link>
              <Link to="/">
                <li>News</li>
              </Link>
              <Link to="/">
                <li>Accessibility</li>
              </Link>
            </ul>
          </nav>
          <nav>
            <h3 className="text-lg font-bold uppercase">Collaborate</h3>
            <ul className="text-sm">
              <Link to="/">
                <li>Privacy Policy</li>
              </Link>
              <Link to="/">
                <li>Delivery Policy</li>
              </Link>
              <Link to="/">
                <li>Terms of Use</li>
              </Link>
              <Link to="/">
                <li>Terms of Sale</li>
              </Link>
            </ul>
          </nav>
          <nav>
            <h3 className="text-lg font-bold uppercase">Shop</h3>
            <ul className="text-sm">
              <Link to="/">
                <li>How to order</li>
              </Link>
              <Link to="/">
                <li>Track you order</li>
              </Link>
              <Link to="/">
                <li>Return & Exchanges</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="w-1/2 p-10 border-r border-b flex flex-col gap-6 max-md:w-full ">
          <p className="text-lg font-bold uppercase">Email Adress</p>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-l border-t border-b pl-4 pb-4 pr-28 pt-4 max-sm:pr-20"
            ></input>
            <button className=" border border-black px-6 uppercase bg-red-500 text-white py-4 hover:bg-red-800">
              Submit
            </button>
          </div>
        </div>
      </div>
      <p className="p-10">© 2026 Nike, Inc. All Rights Reserved</p>
    </footer>
  );
};
