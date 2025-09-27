"use client";

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
import Image from "next/image";
import Link from "next/link";
import { OA } from "@/assets";

export const Footer = () => {
  return (
    <footer className="bg-[#003B57] text-white">
      {/* Newsletter */}
      <div className="bg-primary">
        <div className="max-w-[90%] lg:max-w-[79%] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 py-6 gap-6">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-white w-full text-center sm:text-left">
            <FaEnvelope className="w-8 h-8 shrink-0 mt-1" />
            <div className="pl-0 md:pl-1">
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
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center mt-2 gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-64 2xl:w-96 px-4 py-2 rounded-md text-black text-[12px] sm:text-[14px] xl:text-[16px] bg-white border border-white focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400"
            />

            <button className="bg-white text-sky-500 px-4 py-2 rounded-md flex items-center gap-2 text-[12px] sm:text-[14px] xl:text-[16px] font-medium w-full sm:w-auto justify-center">
              <FaEnvelope className="w-4 h-4 shrink-0" /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 text-center sm:text-left">
          {/* About Section */}
          <div className="flex justify-center sm:justify-start">
            <div>
              <h2 className="text-[24px] md:text-[28px] font-bold flex flex-col items-center sm:items-start gap-3 mb-4">
                <Image src={OA} alt="Ocean Academy" width={200} height={100} />
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
              <div className="flex justify-center sm:justify-start gap-3 mt-4 flex-wrap">
  <Link
    href="https://www.facebook.com/oceanacademy.co.in"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
  >
    <FaFacebookF className="text-[16px] md:text-[18px]" />
  </Link>

  <Link
    href="https://www.youtube.com/@ocean_academy"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
  >
    <FaYoutube className="text-[16px] md:text-[18px]" />
  </Link>

  <Link
    href="https://www.instagram.com/oceanacademy_official/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
  >
    <FaSquareInstagram className="text-[16px] md:text-[18px]" />
  </Link>

  <Link
    href="https://www.linkedin.com/company/oceanacademyedu/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
  >
    <FaLinkedinIn className="text-[16px] md:text-[18px]" />
  </Link>
</div>

            </div>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center sm:justify-start">
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4 text-sky-400">
                Contact Info
              </h3>

              {/* Location */}
              <div className="flex flex-row items-start gap-2 mb-4 text-[14px] md:text-[16px] text-gray-200 leading-relaxed justify-center sm:justify-start">
                <FaMapMarkerAlt className="text-[16px] md:text-[18px] shrink-0 mt-1" />
                <p className="text-center sm:text-left">
                  No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC
                  Bank, Saram, Puducherry-605013.
                </p>
              </div>

              {/* Phone */}
              <p className="flex justify-center sm:justify-start items-center gap-3 mb-2 text-[14px] md:text-[16px] text-gray-200">
                <FaPhoneAlt className="text-[14px] md:text-[16px] shrink-0" />
                0413-2240580
              </p>

              {/* Email */}
              <p className="flex justify-center sm:justify-start items-center gap-3 text-[14px] md:text-[16px] text-gray-200">
                <FaEnvelope className="text-[14px] md:text-[16px] shrink-0" />
                info@oceanacademy.in
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center sm:justify-start">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-sky-400">Quick Links</h3>
              <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[16px] text-gray-200">
                <li>
                  <Link href="/courses" className="hover:text-sky-400">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-sky-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
  href="https://placement.oceanacademy.co.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-sky-400"
>
  Placement
</Link>

                </li>
                <li>
                  <Link href="/services" className="hover:text-sky-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-sky-400">
                    Gallery
                  </Link>
                </li>
                <li>
               

                  <Link
  href="https://candidate.oceanacademy.co.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-sky-400"
>
 Job Portal
</Link>

                </li>
                <li>
                  <Link href="/career" className="hover:text-sky-400">
                    Career
                  </Link>
                </li>
                 <li>
                  <Link href="/faq" className="hover:text-sky-400">
                  FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* More + Office Hours */}
          <div className="flex justify-center sm:justify-start">
            <div className="w-full">
              <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[16px] text-gray-200 mb-6">
                <li>
                  <Link href="https://oceanacademy.co.in/terms-conditions" className="hover:text-sky-400">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="https://oceanacademy.co.in/privacy-policy" className="hover:text-sky-400">
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-sky-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    Verify Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-sky-400">
                    Blog
                  </Link>
                </li>
              </ul>

              {/* Office Hours */}
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-[16px] md:text-[18px] text-sky-400">
                  Office Hours
                </h3>
                <div className="mt-2 text-[14px] md:text-[16px] text-gray-200 leading-relaxed">
                  <div className="flex justify-center sm:justify-start items-center gap-2">
                    <FaClock className="text-[16px] md:text-[18px]" />
                    <span>Monday – Sunday</span>
                  </div>
                  <div className="flex justify-center sm:justify-start items-center gap-2 mt-1">
                    <span>9:30 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-[14px]">
          © {new Date().getFullYear()} Ocean Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
