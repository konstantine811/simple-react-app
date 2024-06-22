import { Link, useLocation } from "react-router-dom";

// configs
import { NAV_ITEMS, NAV_PATHS } from "../../config/navigation.config";
import { User } from "lucide-react";
import { useSelector } from "react-redux";

const Navigation = () => {
  let { pathname } = useLocation();
  const counter = useSelector((state) => state.counter.value);
  return (
    <div className="border-b py-4">
      <nav className="container">
        <div className="flex justify-between items-center">
          <ul className="flex gap-2">
            {NAV_ITEMS.map((item) => {
              if (item.isNotNav) return null;
              return (
                <li
                  key={item.path}
                  className={`border p-2 hover:bg-slate-400 transition-all ${
                    pathname === item.path
                      ? "bg-white text-black hover:bg-white"
                      : "bg-transparent text-white"
                  }`}
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <li className="text-white">Counter: {counter}</li>
            <li>
              <Link to={NAV_PATHS.LOGIN}>
                <User />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
