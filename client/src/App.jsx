import GetStarted from "./pages/get-started/GetStarted";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
function App() {
  return (
    <div className="font-poppins px-16 py-20 md:py-0">
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
