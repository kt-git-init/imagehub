import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-gray-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
          <p className="mb-4">
            ImageHub is a premier institution dedicated to teaching the art and
            science of photography. We nurture talent from the ground up,
            fostering a vibrant community of photographers.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="transition-colors duration-300 hover:text-white"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Contact Us</h2>
          <p>New York City, USA</p>
          <p>New York 10001</p>
          <p>Email: kunaltajne.contact@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="pt-8 text-center text-xs">
        © 2024 ImageHub by Kunal Tajne. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
