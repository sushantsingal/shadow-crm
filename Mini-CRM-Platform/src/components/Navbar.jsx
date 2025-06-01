import { auth } from '../services/firebase';
import { signOut } from 'firebase/auth';
import logo from "../assets/Group 117.png";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 sm:gap-6 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-7 sm:h-14" />
        <h1 className="ml-6 text-lg sm:text-xl font-semibold">Shadow CRM</h1>
      </div>
      <button
        onClick={() => signOut(auth)}
        className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
