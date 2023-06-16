import "react-datepicker/dist/react-datepicker.css";
import DatePickerComponent from "../../component/datePicker";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Lab name can only contain Latin letters."
    )
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  technology: Yup.string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Lab technolgy can only contain Latin letters."
    )
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),

  start_date: Yup.date()
    .typeError("Please enter a valid start date")
    .required(),
  end_date: Yup.date().typeError("Please enter a valid end date").required(),
});
const CreateLab = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div className="mx-auto mt-32 max-w-lg px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 ">
          Create New Lab
        </h3>
        <Formik
          // enableReinitialize={true}
          validationSchema={SignupSchema}
          initialValues={{
            name: "",
            technology: "",
            start_date: startDate,
            end_date: endDate,
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("====================================");
            console.log(values);
            console.log("====================================");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-900"
                >
                  Lab name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none"
                  placeholder="Lab name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-xs text-red-300">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="technology"
                  className=" mb-1 block text-sm font-medium text-gray-900"
                >
                  Lab thechnology
                </label>
                <input
                  type="text"
                  name="technology"
                  id="technology"
                  placeholder="Docker, Kubernetes, ..."
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.technology}
                />
                {errors.technology && touched.technology && (
                  <p className="text-xs text-red-300">{errors.technology}</p>
                )}
              </div>

              <div className="flex flex-row">
                <div className=" flex-1">
                  <label
                    htmlFor="technology"
                    className=" mb-1 block text-sm font-medium text-gray-900"
                  >
                    Satrt date
                  </label>
                  <DatePickerComponent
                    date={startDate}
                    setDate={setStartDate}
                    name="start_date"
                  />
                  {errors.start_date && touched.start_date && (
                    <p className="text-xs text-red-300">{errors.start_date}</p>
                  )}
                </div>
                <div className=" flex-1">
                  <label
                    htmlFor="technology"
                    className=" mb-1 block text-sm font-medium text-gray-900"
                  >
                    End date
                  </label>
                  <DatePickerComponent
                    name="end_date"
                    date={endDate}
                    setDate={setEndDate}
                  />
                  {errors.end_date && touched.end_date && (
                    <p className="text-xs text-red-300">{errors.end_date}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#30b4a5] px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                {isSubmitting ? "Loading..." : "Create"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateLab;
