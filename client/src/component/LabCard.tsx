//#30b4a5

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Lab, useDeleteLabMutation } from "../redux/api";
import { Link } from "react-router-dom";
import moment from "moment";

type Props = {
  lab: Lab;
};

const LabCard = ({ lab }: Props) => {
  const { name, technology, start_date, end_date, _id } = lab;
  const [deleteLab, deleteLabMutation] = useDeleteLabMutation();

  return (
    <Link
      to={`lab-details/${_id}`}
      className=" mt-2 rounded-md    pr-1 sm:w-full md:w-1/2  lg:w-1/4 "
    >
      <div className="w-full border border-[#30b4a5] p-6">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {technology}
        </p>
        <div className="mb-2 flex flex-row justify-between">
          <div>
            <p className="text-[#30b4a5]">Start date</p>
            <p className="text-sm">
              {moment(start_date).format("MMMM Do YYYY, h:mm a")}
            </p>
          </div>
          <div>
            <p className="text-[#30b4a5]">End date</p>
            <p className="text-sm">
              {moment(end_date).format("MMMM Do YYYY, h:mm a")}
            </p>
          </div>
        </div>
        <div className="flex flex-row ">
          <Link
            to={`/add-lab/${lab._id}`}
            type="button"
            className="mr-2 inline-flex items-center rounded-sm bg-[#30b4a5] px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Edit
            <PencilIcon className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            onClick={async () => {
              await deleteLab({ _id: lab._id }).unwrap();
            }}
            type="button"
            className="mr-2 inline-flex items-center rounded-sm bg-[#30b4a5] px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Delete
            <TrashIcon className="ml-1 h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default LabCard;
