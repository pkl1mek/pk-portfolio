import SkillList from './SkillList';

export default function InfoContainer() {
  return (
    <div className="flex flex-1 flex-col gap-10 text-primary">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-[29px] font-bold">Opis</h3>
        <p className="text-[20px] font-normal text-primary/80">
          Lorem ipsum dolor sit amet consectetur. Suspendisse amet in blandit
          turpis gravida massa neque magna volutpat. Elit leo nulla arcu risus
          semper lacus.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-2.5">
          <h3 className="text-[29px] font-bold">Wykształcenie</h3>
          <p className="text-[20px] font-normal text-primary/80">
            Akademia Górniczo-Hutnicza w Krakowie
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-[29px] font-bold">Umiejętności</h3>
          <SkillList />
        </div>

      </div>
    </div>
  );
}