import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-10 md:py-12 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4">

          <h2 className="text-4xl md:text-5xl font-bold text-dark">
            About Me
          </h2>

          <p className="text-dark text-base md:text-lg leading-relaxed text-justify">
            I am a BS Information Technology student specializing in Web Development at
            De La Salle University – Dasmariñas. I focus on frontend development and enjoy
            building responsive, user-friendly interfaces using modern web technologies
            such as React, JavaScript, and Tailwind CSS.
          </p>

          <p className="text-dark text-base md:text-lg leading-relaxed text-justify">
            Currently, I work as a Frontend Developer Intern at Supsoft Tech where I translate
            Figma designs into functional React components and develop responsive interfaces
            for data-driven web applications.
          </p>

          <p className="text-dark text-base md:text-lg leading-relaxed text-justify">
            I have also developed several academic and personal projects including management
            systems, dashboards, and mobile applications.
          </p>

          {/* EXPERIENCE */}
          <div className="flex flex-wrap gap-2">
            <Highlight text="Frontend Developer Intern" />
            <Highlight text="DOST Scholar" />
            <Highlight text="Dean’s List" />
          </div>

        </div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          <Skill name="React" />
          <Skill name="JavaScript" />
          <Skill name="HTML/CSS" />
          <Skill name="Tailwind" />
          <Skill name="MySQL" />
          <Skill name="PHP" />
          <Skill name="Java" />
          <Skill name="Python" />
          <Skill name="Figma" />
        </motion.div>

      </div>
    </section>
  );
}

function Highlight({ text }) {
  return (
    <div className="bg-primary text-dark px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
      {text}
    </div>
  );
}

function Skill({ name }) {
  return (
    <div className="bg-accent text-dark font-medium px-3 py-2.5 rounded-xl text-center shadow-md hover:scale-105 hover:shadow-lg transition">
      {name}
    </div>
  );
}

