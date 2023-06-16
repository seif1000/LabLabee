import LabCard from "../../component/LabCard";
import { useGetAllLabsQuery } from "../../redux/api";

const Home = () => {
  const { data, error, isLoading } = useGetAllLabsQuery(null);
  console.log(data, error, isLoading);

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
