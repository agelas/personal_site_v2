import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: "Software Engineer",
    description: "Currently at DNA Script writing embedded software and developing the UI for the world's first commercially available benchtop DNA printer.",
  },
  {
    name: "Software Development Project Manager",
    description: "Lead a team of over 45 student developers at the Delineo Disease Modeling project at the Johns Hopkins University.",
  },
  {
    name: "Software Product Owner Intern",
    description: "Defined data transformations and schema definitions as part of Exact Sciences' transition to the Mulesoft Anypoint.",
  },
];

const Experience = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a software engineer in embedded and fullstack development, with a keen interest in building AI/ML systems.
            </h3>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description } = service;
                return (
                  <div className="border-b border-white/20 h-[166px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
