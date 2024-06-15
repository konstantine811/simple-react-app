import { Routes, Route } from "react-router-dom";
// partial components
import Navigation from "./components/partials/Navigation";
import { NAV_ITEMS } from "./config/navigation.config";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        {NAV_ITEMS.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
