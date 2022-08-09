import Dashboard from "./pages/dashboard/Dashboard";
import Logs from "./pages/logs/Logs";
import Paso0 from "./pages/paso0/Paso0";
import Paso1 from "./pages/paso1/Paso1";
import Paso2 from "./pages/paso2/Paso2";
import Paso3 from "./pages/paso3/Paso3";
import Paso4 from "./pages/paso4/Paso4";
import Paso5 from "./pages/paso5/Paso5";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="Logs" index element={<Logs />} />

            <Route path="produccion">
              <Route index element={<Paso0 />} />
              <Route path="paso1" element={<Paso1 />} />
              <Route path="paso2" element={<Paso2 />} />
              <Route path="paso3" element={<Paso3 />} />
              <Route path="paso4" element={<Paso4 />} />
              <Route path="paso5" element={<Paso5 />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
