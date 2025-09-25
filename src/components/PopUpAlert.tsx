"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { HiUser } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdEmail, MdCall, MdDescription } from "react-icons/md";
import Cookies from "js-cookie";
import Image from "next/image";
import { AlertTextField } from "./AlertTextField";
import { LOGO_ENQUIRY } from "@/assets/enquiry";
import * as yup from "yup";

// ----------------- Validation Schema -----------------
const enquirySchema = yup.object().shape({
  name: yup.string().min(3).max(20).required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]{10,11}$/, "Mobile number must be 10–11 digits")
    .required("Mobile number is required"),
  selectedCourse: yup
    .string()
    .required("Please select a course")
    .notOneOf(["Select Course"], "Please select a course"),
  otherCourse: yup.string().when("selectedCourse", {
    is: (val: string) => val === "Others",
    then: yup.string().required("Please enter your course"),
    otherwise: yup.string().notRequired(),
  }),
  description: yup.string().optional(),
});

// ----------------- Courses List -----------------
const courseList = [
  "MERN Full Stack",
  "MEAN Full Stack",
  "Java Full Stack",
  "Python Django",
  "AI & Data Science",
  "Data Analytics",
  "Others",
];

// ----------------- Component -----------------
interface PopUpAlertProps {
  closeAlert: () => void;
  onSubmitSuccess: () => void;
}

export const PopUpAlert: React.FC<PopUpAlertProps> = ({
  closeAlert,
  onSubmitSuccess,
}) => {
  const [closeAnime, setCloseAnime] = useState(false);
  const [isDropClicked, setIsDropClicked] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    selectedCourse: "Select Course",
    description: "",
  });
  const [otherCourse, setOtherCourse] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ----------------- Handlers -----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleOtherCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherCourse(e.target.value);
    setErrors({ ...errors, otherCourse: "" });
  };

  const handleDropdownSelect = (course: string) => {
    setUserData({ ...userData, selectedCourse: course });
    setIsDropClicked(false);
    setErrors({ ...errors, selectedCourse: "" });

    if (course !== "Others") setOtherCourse("");
  };

  // ----------------- Form Submit -----------------
  const handleSubmit = async () => {
    const dataToValidate = {
      ...userData,
      otherCourse: userData.selectedCourse === "Others" ? otherCourse : "",
    };

    try {
      await enquirySchema.validate(dataToValidate, { abortEarly: false });

      const finalData = {
        ...userData,
        selectedCourse:
          userData.selectedCourse === "Others"
            ? otherCourse
            : userData.selectedCourse,
      };

      console.log("Form submitted:", finalData);

      Cookies.set("isAlert", "1", { expires: 365 });
      onSubmitSuccess();
      setCloseAnime(true);
    } catch (err: any) {
      if (err.inner) {
        const formErrors: Record<string, string> = {};
        err.inner.forEach((e: any) => {
          if (e.path) formErrors[e.path] = e.message;
        });
        setErrors(formErrors);
        console.log("Validation errors:", formErrors); // ✅ Shows exactly what failed
      }
    }
  };

  // ----------------- Motion Variants -----------------
  const alertVariant = {
    open: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 500 } },
    close: { y: 1000, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 w-[100%] max-w-sm -translate-x-1/2 -translate-y-1/2
                 bg-white/40 backdrop-blur-md shadow-2xl rounded-2xl p-6 z-50"
      initial={{ y: 1000, opacity: 0 }}
      variants={alertVariant}
      animate={!closeAnime ? "open" : "close"}
    >
      {/* Close Icon */}
      <motion.div
        className="absolute top-3 right-3 cursor-pointer text-[#051c27]"
        whileHover={{ scale: 1.2, rotateZ: 180 }}
        transition={{ duration: 0.2 }}
        onClick={() => setCloseAnime(true)}
      >
        <CgClose className="w-6 h-6" />
      </motion.div>

      {/* Logo & Title */}
      <div className="flex flex-col justify-center items-center">
        <div className="h-6 w-8">
          <Image src={LOGO_ENQUIRY} alt="oa logo" className="object-contain" />
        </div>
        <h1 className="text-center text-xl font-semibold text-[#0a73be] mb-6">
          Course Enquiry
        </h1>
      </div>

      <div className="space-y-5">
        {/* Name */}
        <AlertTextField
          isNotValid={!!errors.name}
          errorMessage={errors.name}
          name="name"
          placeholder="Full Name"
          value={userData.name}
          onChange={handleChange}
          icon={<HiUser className="text-[#051c27]" />}
        />

        {/* Email */}
        <AlertTextField
          isNotValid={!!errors.email}
          errorMessage={errors.email}
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          icon={<MdEmail className="text-[#051c27]" />}
        />

        {/* Mobile */}
        <AlertTextField
          isNotValid={!!errors.mobileNumber}
          errorMessage={errors.mobileNumber}
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={userData.mobileNumber}
          onChange={handleChange}
          icon={<MdCall className="text-[#051c27]" />}
          isMobileNum
        />

        {/* Dropdown */}
        <div className="relative">
          <div
            className={`flex justify-between items-center px-3 py-2 cursor-pointer  ${
              errors.selectedCourse
                ? "border border-red-500"
                : "border-b-2 border-[#051c27]"
            } `}
            onClick={() => setIsDropClicked(!isDropClicked)}
          >
            <p
              className={
                userData.selectedCourse === "Select Course"
                  ? "text-gray-900"
                  : "text-gray-700"
              }
            >
              {userData.selectedCourse}
            </p>
            <TiArrowSortedDown className="text-gray-700" />
          </div>

          {isDropClicked && (
            <motion.div
              className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-b-lg shadow-lg overflow-y-auto max-h-52 z-50"
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 200 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {courseList.map((course, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-2 hover:bg-[#00AEFF] hover:text-white cursor-pointer ${
                    userData.selectedCourse === course
                      ? "bg-[#00AEFF] text-white font-medium"
                      : ""
                  }`}
                  onClick={() => handleDropdownSelect(course)}
                >
                  {course}
                </div>
              ))}
            </motion.div>
          )}
          {errors.selectedCourse && (
            <p className="text-red-500 text-sm mt-1">{errors.selectedCourse}</p>
          )}
        </div>

        {/* Others Input */}
        {userData.selectedCourse === "Others" && (
          <AlertTextField
            isNotValid={!!errors.otherCourse}
            errorMessage={errors.otherCourse}
            name="otherCourse"
            placeholder="Enter your course"
            value={otherCourse}
            onChange={handleOtherCourseChange}
            icon={<HiUser className="text-[#051c27]" />}
          />
        )}

        {/* Description */}
        <AlertTextField
          isNotValid={false}
          type="textarea"
          name="description"
          placeholder="Your Query"
          value={userData.description}
          onChange={handleChange}
          icon={<MdDescription className="text-[#051c27]" />}
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full mt-10 bg-[#0a73be] hover:bg-[#034E72] text-white py-3 rounded-lg transition"
      >
        Submit
      </button>
    </motion.div>
  );
};
