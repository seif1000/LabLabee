import { Route, Routes } from "react-router-dom";
import Header from "./component/Headre";
import Home from "./pages/Home";

import "./App.css";
import CreateLab from "./pages/CreateLab";
import LabDetails from "./pages/LabDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/add-lab/:id?" element={<CreateLab />} />
          <Route path="/lab-details/:id" element={<LabDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
