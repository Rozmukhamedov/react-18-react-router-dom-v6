import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBookPage from "./pages/AddBookPage";
import BodyPage from "./pages/BodyPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyPage />}>
            <Route index element={<HomePage />} />
            <Route path="teams" element={<AddBookPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
