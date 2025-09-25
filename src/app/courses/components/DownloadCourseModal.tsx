"use client";

import React from "react";
import { createPortal } from "react-dom";
import { X, Download, User, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DOWNLOAD_COURSE } from "@/assets/enquiry";
import { BASE_URL } from "@/config/api";

// Yup schema
const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
    .required("Mobile number is required"),
});

interface DownloadCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  courseId: string; // Added
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
}

export const DownloadCourseModal: React.FC<DownloadCourseModalProps> = ({
  isOpen,
  onClose,
  courseName,
  courseId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await BASE_URL.post(`/add/user/${courseId}`, data, {
        responseType: "blob", // important for file download
      });

      // Convert response to blob
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      // Create temporary link to trigger download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${courseName}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

      // Close modal & reset form
      onClose();
      reset();
    } catch (error: any) {
      console.error("Download failed:", error);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[700px] transform transition-all duration-300 scale-100 z-[100000]">
        {/* Header */}
        <div className="relative bg-[#034E72] px-6 py-5 sm:px-8 sm:py-6 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <h2 className="text-lg sm:text-md font-medium text-white">
            Download PDF - {courseName}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col items-center sm:flex-row gap-10">
          {/* Image */}
          <div className="flex-shrink-0 w-full sm:w-1/3 hidden sm:block">
            <Image
              src={DOWNLOAD_COURSE}
              alt="download course"
              className="rounded-xl"
            />
          </div>

          {/* Form */}
          <div className="w-full sm:w-2/3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    {...register("name")}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#00AEFF] transition-colors duration-200 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-[#00AEFF] transition-colors duration-200 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div
                  className={`flex border-2 rounded-xl overflow-hidden ${
                    errors.mobile ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <div
                    className={`flex items-center bg-gray-50 px-4 focus:outline-none focus:border-[#00AEFF] ${
                      errors.mobile
                        ? "border-red-500"
                        : "border-r-2 border-gray-200 focus:border-[#00AEFF]"
                    }`}
                  >
                    <Phone className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600 font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    {...register("mobile")}
                    className="w-full px-4 py-3 focus:outline-none focus:border-none"
                    placeholder="Enter mobile number"
                  />
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00AEFF] to-[#034E72] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="flex gap-4">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <p>Downloading...</p>
                  </div>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download PDF
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
