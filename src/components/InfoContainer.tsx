import SkillList from './SkillList';
import Timeline from './Timeline';
import { motion } from 'framer-motion';

export default function InfoContainer() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-10 text-primary h-full min-w-0">
      
      <motion.div 
        className="flex flex-col gap-2.5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h3 className="font-bold text-[29px] lg:text-[29px] xl:text-[35px]">
          Opis
        </h3>
        <p className="font-normal text-primary/80 text-[20px] lg:text-[20px] xl:text-[24px]">
          Lorem ipsum dolor sit amet consectetur. Suspendisse amet in blandit
          turpis gravida massa neque magna volutpat. Elit leo nulla arcu risus
          semper lacus.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col lg:flex-row gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-2.5">
          <h3 className="font-bold text-[29px] lg:text-[29px] xl:text-[35px]">
            Wykształcenie
          </h3>
          <p className="font-normal text-primary/80 text-[20px] lg:text-[20px] xl:text-[24px]">
            Akademia Górniczo-Hutnicza w Krakowie
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h3 className="font-bold text-[29px] lg:text-[29px] xl:text-[35px]">
            Umiejętności
          </h3>
          <SkillList />
        </div>
      </motion.div>

      <motion.div 
        className="relative flex flex-col gap-4 overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h3 className="font-bold text-[29px] lg:text-[29px] xl:text-[35px]">
            Doświadczenie
        </h3>
        <Timeline />
      </motion.div>

    </div>
  );
}