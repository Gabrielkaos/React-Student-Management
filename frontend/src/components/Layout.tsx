import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Student System</h2>
        <nav className="flex flex-col space-y-3">
          <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
          <Link to="/students" className="hover:bg-gray-700 p-2 rounded">Students</Link>
          <Link to="/about" className="hover:bg-gray-700 p-2 rounded">About</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-4">
          
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </header>

        {/* Outlet renders the current child route */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
