import SkillList from './SkillList';
import Timeline from './Timeline';

export default function InfoContainer() {
  return (
    <div className="flex flex-1 flex-col gap-10 text-primary h-full min-w-0">
      
      <div className="flex flex-col gap-2.5">
        <h3 className="font-bold text-[29px] lg:text-[29px] xl:text-[35px]">
          Opis
        </h3>
        <p className="font-normal text-primary/80 text-[20px] lg:text-[20px] xl:text-[24px]">
          Lorem ipsum dolor sit amet consectetur. Suspendisse amet in blandit
          turpis gravida massa neque magna volutpat. Elit leo nulla arcu risus
          semper lacus.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
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
      </div>

      <div className="relative flex flex-col gap-4 overflow-visible">
        <h3 className="font-bold text-[29px] lg:text-[29px] xl:text-[35px]">
            Doświadczenie
        </h3>
        <Timeline />
      </div>

    </div>
  );
}