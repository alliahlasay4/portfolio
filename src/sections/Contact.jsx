import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-primary">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-dark mb-8"
        >
          Let's Work Together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-dark text-lg mb-10"
        >
          I'm currently open to internship and junior developer opportunities.
          Feel free to reach out if you'd like to collaborate or discuss a project.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-6"
        >

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:alliahlasay4@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-xl font-medium shadow-md"
          >
            <FaEnvelope />
            Email Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:09286593680"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition"
          >
            <FaPhone />
            Call Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/alliahlasay4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition"
          >
            <FaGithub />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/alliah-cassandra-lasay-28519326a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}