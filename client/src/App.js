import { Routes, Route } from "react-router-dom";
import PageAdmin from "./pages/adminpage";
import PageLogin from "./pages/loginpage";
import PageProduct from "./pages/productspage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<PageAdmin />} />
        {/* <Route path="/login" element={<PageLogin />} /> */}
        <Route path="/products" element={<PageProduct />} />
      </Routes>
    </>
  );
}

export default App;
