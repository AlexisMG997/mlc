import Dashboard from "./pages/dashboard/Dashboard";
import Paso1 from "./pages/paso1/Paso1";
import Paso2 from "./pages/paso2/Paso2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

class App extends Component {


  render()
  {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Dashboard />} />

              <Route path="produccion">
                
                <Route
                index
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
}

export default App;
