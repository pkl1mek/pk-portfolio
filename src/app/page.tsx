"use client";

import ProfileContainer from '@/components/ProfileContainer';
import InfoContainer from '@/components/InfoContainer';
import Service from '@/components/Service';
import servicesData from '@/data/services.json';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';
import ProjectScroller from '@/components/ProjectScroller';
import { motion, LayoutGroup } from 'framer-motion';
import AnimatedUnderline from '@/components/AnimatedUnderline';

export default function HomePage() {
  const heroContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };
  
  const gridContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <LayoutGroup>
      <div className="flex w-full flex-1 flex-col">
        <motion.div
          className="
          w-full flex flex-col lg:flex-row
          items-center lg:items-start
          justify-between
          gap-12 py-20
        "
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
        >
          <div className="flex flex-col gap-6 text-center lg:text-start">
            <motion.h1 
              className="sm:text-[41px] lg:text-[50px] xl:text-[72px] font-black text-primary leading-tight"
              variants={heroItemVariants}
            >
              Tworzenie
              <br />
              nowoczesnych
            </motion.h1>
            <motion.h1 
              className="sm:text-[41px] lg:text-[50px] xl:text-[72px] font-bold text-primary neon neon-green leading-tight"
              variants={heroItemVariants}
            >
              Stron Webowych
              <br />
              Branding & Design
            </motion.h1>
            <motion.p 
              className="sm:text-[35px] lg:text-[29px] xl:text-[41px] font-light text-primary"
              variants={heroItemVariants}
            >
              Łączę estetykę z funkcjonalnością
            </motion.p>
          </div>
          <motion.img
            src="screens.png"
            alt="Hero Image"
            className="
              w-full max-w-md
              lg:w-1/2 lg:max-w-none 
              h-auto max-h-[400px] 
              object-contain
            "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </motion.div>

        <motion.section 
          id="o-mnie" 
          className="w-full mt-25 text-start py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="relative inline-block sm:text-[35px] lg:text-[35px] xl:text-[50px] font-black text-primary">
            Kim jestem
            <AnimatedUnderline />
          </h2>
          <div className="mt-20 flex flex-col lg:flex-row gap-16 lg:items-stretch">
            <ProfileContainer />
            <InfoContainer />
          </div>
        </motion.section>
        
        <motion.section 
          id="uslugi" 
          className="w-full py-12 text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="relative inline-block sm:text-[35px] lg:text-[35px] xl:text-[50px] font-black text-primary">
            Czym się zajmuję
            <AnimatedUnderline />
          </h2>
          <motion.div 
            className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesData.map((service) => (
              <Service
                key={service.title}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
              />
            ))}
          </motion.div>
        </motion.section>
        
        <motion.section 
          id="portfolio" 
          className="w-full py-12 text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="relative inline-block sm:text-[35px] lg:text-[35px] xl:text-[50px] font-black text-primary">
            Portfolio
            <AnimatedUnderline />
          </h2>
          <div className="mt-20">
            <ProjectScroller>
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.title}
                  type={project.type}
                  color={project.color}
                  imageUrl={project.imageUrl}
                />
              ))}
            </ProjectScroller>
          </div>
        </motion.section>
      </div>
    </LayoutGroup>
  );
}