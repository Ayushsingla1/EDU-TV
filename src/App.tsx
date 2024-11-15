import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import Player from "./pages/Player";

function App() {
  return (
    <div className="h-full w-full bg-[#3b3b3b]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}

export default App;
