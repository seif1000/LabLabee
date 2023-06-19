import { Route, Routes } from "react-router-dom";
import Header from "./component/Headre";
import Home from "./pages/Home";

import "./App.css";
import CreateLab from "./pages/CreateLab";
import LabDetails from "./pages/LabDetails";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 2000,

  offset: "16px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/add-lab/:id?" element={<CreateLab />} />
            <Route path="/lab-details/:id" element={<LabDetails />} />
          </Route>
        </Routes>
      </div>
    </AlertProvider>
  );
}

export default App;
