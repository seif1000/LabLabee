import { Link } from "react-router-dom";
import LabCard from "../../component/LabCard";
import { useGetAllLabsQuery } from "../../redux/api";

import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#30b4a5",
};

const Home = () => {
  const { data, error, isLoading, isError, refetch } = useGetAllLabsQuery(null);

  return (
    <div className="mt-20 flex flex-row flex-wrap px-10 ">
      {isLoading ? (
        <div className="flex   h-screen w-screen flex-row items-center justify-center">
          <ClipLoader
            color={"#30b4a5"}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : isError ? (
        <div className=" flex h-screen w-screen flex-col items-center justify-center">
          <p className="text-md mb-5 text-red-500">
            Somthing went wrong please reload the page
          </p>
          <button
            onClick={() => {
              refetch();
            }}
            className="ml-2 rounded-md bg-[#30b4a5] px-6 py-4 text-white"
          >
            Reload
          </button>
        </div>
      ) : data?.length === 0 ? (
        <div className=" flex h-screen w-screen flex-col items-center justify-center">
          <p className="text-md mb-5 text-red-500">No Labs Found</p>
          <Link
            to={"/add-lab"}
            className="ml-2 rounded-md bg-[#30b4a5] px-6 py-4 text-white"
          >
            Create Lab
          </Link>
        </div>
      ) : (
        data?.map((lab) => <LabCard key={lab._id} lab={lab} />)
      )}
    </div>
  );
};

export default Home;
