import Dashboard from "./pages/dashboard/Dashboard";
import Paso0 from "./pages/paso0/Paso0";
import Paso1 from "./pages/paso1/Paso1";
import Paso2 from "./pages/paso2/Paso2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />

            <Route path="produccion">
              <Route index element={<Paso0 />} />
              <Route
                path="paso1"
                element={<Paso1 />}
              />
              <Route
                path="paso2"
                element={<Paso2 />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
