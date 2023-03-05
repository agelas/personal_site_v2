import React from 'react';
import { BsArrowUpRight } from "react-icons/bs"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: "UI/UX design",
    description: "Lorem, ipsum sit amet consecetutur adisicing elit. Maiores, uia quo expedita  accusamus illum ducimus tempore repellat distinctio harum aperiam.",
    link: "Learn More",
  },
  {
    name: "Development",
    description: "Lorem, ipsum sit amet consecetutur adisicing elit. Maiores, uia quo expedita  accusamus illum ducimus tempore repellat distinctio harum aperiam.",
    link: "Learn More",
  },
  {
    name: "Digital Marketing",
    description: "Lorem, ipsum sit amet consecetutur adisicing elit. Maiores, uia quo expedita  accusamus illum ducimus tempore repellat distinctio harum aperiam.",
    link: "Learn More",
  },
  {
    name: "Product Branding",
    description: "Lorem, ipsum sit amet consecetutur adisicing elit. Maiores, uia quo expedita  accusamus illum ducimus tempore repellat distinctio harum aperiam.",
    link: "Learn More",
  }
];

const Services = () => {
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
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          > 
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 5 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div 
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services list */ }
            <div>
              {services.map((service, index) => {
                // destructure service
                const {name, description, link} = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <BsArrowUpRight /> {/* This won't be necessary since this is 'experience' for me */ }
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

export default Services;
