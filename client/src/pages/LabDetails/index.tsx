import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteLabMutation, useGetLabByIdQuery } from "../../redux/api";
import { ClipLoader } from "react-spinners";
import { CSSProperties } from "react";
import moment from "moment";
import { useAlert } from "react-alert";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#30b4a5",
};
const LabDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const alert = useAlert();

  // get lab by id query
  const { data, isError, isLoading, refetch, error } = useGetLabByIdQuery({
    _id: params.id,
  });

  // delete lab mutation
  const [deleteLab, deleteLabMutation] = useDeleteLabMutation();
  return (
    <>
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
          <p className="text-md mb-5 text-red-500">{error.data}</p>
          <button
            onClick={() => {
              refetch();
            }}
            className="ml-2 rounded-md bg-[#30b4a5] px-6 py-4 text-white"
          >
            Reload
          </button>
        </div>
      ) : (
        <div className=" flex h-screen w-screen flex-col items-center justify-center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {data?.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data?.technology}
          </p>
          <div className=" mb-2 flex flex-col justify-between">
            <div>
              <p className="text-[#30b4a5]">Start date</p>
              <p className="text-sm">
                {moment(data.start_date).format("MMMM Do YYYY, h:mm a")}
              </p>
            </div>
            <div>
              <p className="text-[#30b4a5]">End date</p>
              <p className="text-sm">
                {moment(data.end_date).format("MMMM Do YYYY, h:mm a")}
              </p>
            </div>
          </div>
          <div className="flex flex-row ">
            <Link
              to={`/add-lab/${params.id}`}
              type="button"
              className="mr-2 inline-flex items-center rounded-sm bg-[#30b4a5] px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Edit
              <PencilIcon className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              onClick={async () => {
                await deleteLab({ _id: params.id }).unwrap();
                alert.show("Lab was deleted succussfully");
                navigate("/");
              }}
              type="button"
              className="mr-2 inline-flex items-center rounded-sm bg-[#30b4a5] px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Delete
              <TrashIcon className="ml-1 h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LabDetails;
