import { Route, Routes } from "react-router-dom";
import Header from "./component/Headre";
import Home from "./pages/Home";
ß;
import "./App.css";
import CreateLab from "./pages/CreateLab";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/add-lab/:id?" element={<CreateLab />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
