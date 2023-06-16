import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateLab = () => {
  return (
    <div>
      <div className="mx-auto mt-32 max-w-lg px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 ">
          Create New Lab
        </h3>
        <form className="space-y-3" action="#">
          <div>
            <label
              for="name"
              className="mb-1 block text-sm font-medium text-gray-900"
            >
              Lab name
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="technology"
              className=" mb-1 block text-sm font-medium text-gray-900"
            >
              Lab thechnology
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400"
              required
            />
          </div>
          <div>
            <div>
              <DatePicker selected={new Date()} />
            </div>
            <div>
              <DatePicker selected={new Date()} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#30b4a5] px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            Create New Lab
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateLab;
