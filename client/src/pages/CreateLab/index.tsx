import "react-datepicker/dist/react-datepicker.css";
import DatePickerComponent from "../../component/datePicker";

import { Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useCreatePostMutation } from "../../redux/api";
const SignupSchema = Yup.object().shape({
  name: Yup.string()

    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  technology: Yup.string()

    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  start_date: Yup.date()
    .typeError("Please enter a valid start date")
    .required(),
  end_date: Yup.date().typeError("Please enter a valid end date").required(),
});
const CreateLab = () => {
  const params = useParams();

  const [createPost, { isLoading, isError, error }] = useCreatePostMutation();

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
            start_date: new Date(),
            end_date: new Date(),
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            createPost({
              name: values.name,
              technology: values.technology,
              start_date: values.start_date,
              end_date: values.end_date,
            }).unwrap();
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
            setFieldValue,
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
                    date={values.start_date}
                    setDate={(val) => {
                      setFieldValue("start_date", val);
                    }}
                    name="start_date"
                  />
                  {errors.start_date && touched.start_date && (
                    <p className="text-xs text-red-300">{errors.start_date}</p>
                  )}
                  {isError &&
                    error?.status == 400 &&
                    error?.data
                      .filter((item) => item.path == "start_date")
                      .map((item) => (
                        <p className="text-xs text-red-300">{item.msg}</p>
                      ))}
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
                    date={values.end_date}
                    setDate={(val) => {
                      setFieldValue("end_date", val);
                    }}
                  />
                  {errors.end_date && touched.end_date && (
                    <p className="text-xs text-red-300">{errors.end_date}</p>
                  )}
                  {isError &&
                    error?.status == 400 &&
                    error?.data
                      .filter((item) => item.path == "end_date")
                      .map((item) => (
                        <p className="text-xs text-red-300">{item.msg}</p>
                      ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-full rounded-lg bg-[#30b4a5] px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                {params.id
                  ? isLoading
                    ? "Updating..."
                    : "Update"
                  : isLoading
                  ? "Creating..."
                  : "Create"}
              </button>
              {isError && error?.status == 500 && (
                <p className="text-xs text-red-300">
                  Somthing went wrong try later!
                </p>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateLab;
