
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/mainlogo.png";

function Header() {
  
  return (
    <section className="w-full bg-white shadow">
      <header className="max-w-7xl mx-auto w-full px-4 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

        {/* Top row on small screens: Logo + Sign In */}
        <div className="w-full flex justify-between items-center sm:w-auto">
          <div className="w-32 sm:w-36">
            <NavLink to={"/"}>
            <img src={logo} alt="Site Logo" className="w-full" />
            </NavLink>
          </div>
          <div className="w-24 sm:hidden">
            <button className="w-full bg-rose-500 text-white border-2 border-transparent px-3 py-1 rounded-md hover:bg-rose-600 transition">
              Sign in
            </button>
          </div>
        </div>

        {/* Search input - full width on small, centered on large */}
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search for sports"
            className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        {/* Sign in button - only visible on large screens */}
        <div className="hidden sm:block w-24">
          <button className="w-full bg-rose-500 text-white border-2 border-transparent px-3 py-1 rounded-md hover:bg-rose-600 transition">
            Sign in
          </button>
        </div>

      </header>
    </section>
  );
}

export default Header;
