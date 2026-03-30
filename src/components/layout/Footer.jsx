import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* NAME */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold">
              Alliah Cassandra Lasay
            </h3>
            <p className="text-xs text-gray-300">
              Frontend Developer
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://github.com/alliahlasay4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alliah-cassandra-lasay-28519326a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:alliahlasay4@gmail.com"
              className="hover:text-secondary hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:09286593680"
              className="hover:text-secondary hover:scale-110 transition"
            >
              <FaPhone />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Alliah Cassandra Lasay. Built with React and Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}