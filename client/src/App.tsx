import { Route, Routes } from "react-router-dom";
import Header from "./component/Headre";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import "./App.css";
import CreateLab from "./pages/CreateLab";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/add-lab" element={<CreateLab />} />
          <Route path="/lab/:id" element={<Lab />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
