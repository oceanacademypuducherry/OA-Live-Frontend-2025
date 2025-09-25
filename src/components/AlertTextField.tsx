"use client";

import React from "react";
import { motion } from "framer-motion";

interface AlertTextFieldProps {
  isNotValid: boolean;
  errorMessage?: string;
  isMobileNum?: boolean;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  icon: React.ReactNode;
}

export function AlertTextField({
  isNotValid,
  errorMessage,
  isMobileNum,
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
}: AlertTextFieldProps) {
  return (
    <div>
      <motion.div
        animate={{
          x: isNotValid ? [-8, 8, -8, 8, -8, 0] : 0,
        }}
        transition={{ duration: 0.4 }}
        className={`relative flex items-center   px-3 py-2 ${
          isNotValid
            ? "border rounded-lg border-red-500"
            : "border-b-2  border-[#051c27]"
        }`}
      >
        {isMobileNum && value.length > 0 && (
          <span className="text-gray-600">+91&nbsp;</span>
        )}

        {type !== "textarea" ? (
          <input
            className={`flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-900 ${
              isMobileNum && value.length > 0 ? "pl-1" : ""
            }`}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        ) : (
          <textarea
            className="flex-1 outline-none bg-transparent text-gray-800 resize-none placeholder-gray-900"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={value.split("\n").length < 5 ? value.split("\n").length : 4}
          />
        )}
        <div className="ml-2 text-gray-500">{icon}</div>
      </motion.div>

      {isNotValid && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
