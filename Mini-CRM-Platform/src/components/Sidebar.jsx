import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Group 117.png';

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Segments', path: '/segments' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'AI Generator', path: '/ai-generator' }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded shadow"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 border-b border-gray-800 flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-12 mb-2" />
          <div className="text-2xl font-bold">Shadow CRM</div>
        </div>
        <nav className="p-4 space-y-4">
          {menu.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`block px-4 py-2 rounded transition duration-200 ${
                pathname === item.path ? 'bg-indigo-600' : 'hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)} // auto-close on mobile
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
