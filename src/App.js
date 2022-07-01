import { Routes, Route } from "react-router-dom";
import Calendar from "./pages/Home/Calendar";
import Completed from "./pages/Home/Completed";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header";

function App() {
  return (
      <div>
        
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='completed' element={<Completed/>}></Route>
          <Route path='calendar' element={<Calendar/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
