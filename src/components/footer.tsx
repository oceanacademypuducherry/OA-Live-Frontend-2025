"use client";

import { OA } from "@/app/assets/img";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

// ✅ Import your logo from public folder
// Place logo file at: /public/assets/oa-logo.png


export default function Footer() {
  return (
    <footer className="bg-[#003B57] text-white">
      {/* Newsletter */}
      <div className="bg-sky-500">
        <div className="max-w-[90%] lg:max-w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-16 py-6 gap-6">
          {/* Left Section */}
          <div className="flex items-start gap-3 text-white w-full md:w-1/2">
            <FaEnvelope className="w-8 h-8 shrink-0 mt-1" />
            <div className="pl-1">
              <p className="text-[18px] md:text-[20px] font-semibold">
                Stay Updated
              </p>
              <p className="text-[14px] md:text-[16px] leading-relaxed">
                Get the latest news, events, and educational insights delivered
                to your inbox
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex w-full md:w-auto items-center gap-7">
            <input
  type="email"
  placeholder="Enter your email address"
  className="w-full md:w-72 lg:w-96 px-4 py-2 rounded-md text-black bg-white border border-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400"
/>

            <button className="bg-white text-sky-500 px-4 py-2 rounded-md flex items-center gap-2 text-[14px] md:text-[16px] font-medium">
              <FaEnvelope className="w-4 h-4 shrink-0" /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer main */}
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto px-4 md:px-12 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-6">
        {/* First Column (About Section) */}
        <div className="w-[480px]">
          <h2 className="text-[24px] md:text-[28px] font-bold flex items-center gap-3">
            <Image src={OA} alt="Ocean Academy" width={40} height={40} />
            <span className="text-sky-400">Ocean Academy</span>
          </h2>
          <div className="mt-4 text-[14px] md:text-[16px] leading-relaxed text-gray-200">
            <p>
              Ocean was founded on the principle of building and implementing
              great ideas that drive progress for the students and clients.
            </p>
          </div>

          {/* Social Links */}
          <h3 className="mt-6 font-semibold text-[16px] md:text-[18px] text-sky-400">
            Follow Us
          </h3>
          <div className="flex gap-3 mt-4">
            <Link
              href="#"
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
            >
              <FaFacebookF className="text-[16px] md:text-[18px]" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
            >
              <FaYoutube className="text-[16px] md:text-[18px]" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
            >
              <FaSquareInstagram className="text-[16px] md:text-[18px]" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
            >
              <FaLinkedinIn className="text-[16px] md:text-[18px]" />
            </Link>
          </div>
        </div>

        {/* Other 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_22%_25%] gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-2 text-sky-400">
              Contact Info
            </h3>
            <div className="flex items-start gap-2 mb-4 text-[14px] md:text-[16px] text-gray-200 leading-relaxed">
              <FaMapMarkerAlt className="text-[16px] md:text-[18px] shrink-0 mt-0" />
              <div className="space-y-1">
                <p>
                  No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC
                  Bank, Saram, Puducherry-605013.
                </p>
              </div>
            </div>
            <p className="flex items-center gap-3 mb-4 text-[14px] md:text-[16px] text-gray-200">
              <FaPhoneAlt className="text-[14px] md:text-[16px] shrink-0" />{" "}
              0413-2240580
            </p>
            <p className="flex items-center gap-3 mb-3 text-[14px] md:text-[16px] text-gray-200">
              <FaEnvelope className="text-[14px] md:text-[16px] shrink-0" />{" "}
              info@oceanacademy.in
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-2 text-sky-400">
              Quick Links
            </h3>
            <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[16px] text-gray-200">
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Placement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Job Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* More + Office Hours */}
          <div>
            <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[16px] text-gray-200 mt-2">
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Verify Certificate
                </Link>
              </li>
            </ul>

            {/* Office Hours */}
            <div className="mt-6">
              <h3 className="font-semibold text-[16px] md:text-[18px] text-sky-400">
                Office Hours
              </h3>
              <p className="flex items-start gap-3 text-[14px] md:text-[16px] text-gray-200 mt-2 leading-relaxed">
                <FaClock className="text-[16px] md:text-[18px] mt-1" /> Monday –
                Saturday <br /> 9:30 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
