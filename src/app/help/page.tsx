"use client";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

// Yup validation schema
const schema = yup.object().shape({
  title: yup.string().required("Title is required").min(5, "Title must be at least 5 characters"),
  issueDescription: yup
    .string()
    .required("Issue description is required")
    .min(150, "Issue description must be at least 150 characters"),
});

const HelpPage = () => {
  const [submitLoading, setSubmitLoading] = useState(false);

  // Auto-scroll to help section when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      const helpElement = document.getElementById("help");
      if (helpElement) {
        helpElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure DOM is ready
    
    return () => clearTimeout(timer);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      issueDescription: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    setSubmitLoading(true);
    try {
      // Simulate an API call or form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Issue submitted successfully!");
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="w-full py-10 lg:h-full border border-gray-200 bg-white z-10 shadow-md flex flex-col lg:flex-row" id="help">
        {/* Illustrator Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/help.png"
            alt="Help Illustrator"
            width={1000}
            height={1000}
            className="w-[55%] h-auto lg:w-[82%]"
            priority // Add priority if this is above the fold
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-5 flex-col">
          <h1 className="text-base lg:text-lg xl:text-2xl font-semibold text-center text-blue-600 mb-4 font-poppins">
            Need Help?
          </h1>

          <form className="w-full max-w-[450px]" onSubmit={handleSubmit(onSubmit)}>
            {/* Title Field */}
            <div className="mb-6">
              <label className="block text-xs md:text-sm lg:text-[16px] font-medium text-gray-600 font-poppins mb-2">
                Title *
              </label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Enter a title for your issue"
                    className="w-full px-5 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
                  />
                )}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1 font-poppins">{errors.title.message}</p>
              )}
            </div>

            {/* Issue Description Field */}
            <div className="mb-6">
              <label className="block text-xs md:text-sm lg:text-[16px] font-medium text-gray-700 font-poppins mb-2">
                Description * (Minimum 150 characters)
              </label>
              <Controller
                name="issueDescription"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Describe your issue in detail..."
                    rows={6}
                    className="w-full px-5 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
                  />
                )}
              />
              {errors.issueDescription && (
                <p className="text-red-500 text-xs mt-1 font-poppins">
                  {errors.issueDescription.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid || submitLoading}
              className={`w-full py-3 md:py-[10px] rounded-lg transition border border-blue-600 font-poppins text-sm lg:text-xl font-semibold ${
                !isValid || submitLoading
                  ? "bg-blue-100 text-blue-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {submitLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HelpPage;