//#30b4a5

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const LabCard = () => {
  return (
    <div className=" mt-2 rounded-md    pr-1 sm:w-full md:w-1/2  lg:w-1/4 ">
      <div className="w-full border border-[#30b4a5] p-6">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex flex-row ">
          <button
            type="button"
            className="mr-2 inline-flex items-center rounded-sm bg-[#30b4a5] px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Edit
            <PencilIcon className="ml-1 h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="mr-2 inline-flex items-center rounded-sm bg-[#30b4a5] px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Delete
            <TrashIcon className="ml-1 h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabCard;
