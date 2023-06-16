import LabCard from "../../component/LabCard";

import ModalComponent from "../../component/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  return (
    <div className="mt-20 flex flex-row flex-wrap px-10 ">
      <LabCard />
      <LabCard />
      <LabCard />
      <LabCard />
      <LabCard />
      <LabCard />
      <LabCard />
    </div>
  );
};

export default Home;
