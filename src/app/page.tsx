import ProfileContainer from '@/components/ProfileContainer';
import InfoContainer from '@/components/InfoContainer';
import FirmContainer from '@/components/FirmContainer';
import Service from '@/components/Service';
import servicesData from '@/data/services.json';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';
import ProjectScroller from '@/components/ProjectScroller';

export default function HomePage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div
        className="
        w-full flex flex-col lg:flex-row
        items-center lg:items-start
        justify-between
        gap-12 py-20
      "
      >
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <h1 className="sm:text-[41px] lg:text-[50px] xl:text-[72px] font-black text-primary leading-tight">
            Tworzenie
            <br />
            nowoczesnych
          </h1>
          <h1 className="sm:text-[41px] lg:text-[50px] xl:text-[72px] font-bold text-primary neon neon-green leading-tight">
            Stron Webowych
            <br />
            Branding & Design
          </h1>
          <p className="sm:text-[35px] lg:text-[29px] xl:text-[41px] font-light text-primary">
            Łączę estetykę z funkcjonalnością
          </p>
        </div>
        <img
          src="screens.png"
          alt="Hero Image"
          className="
            w-full max-w-md
            lg:w-1/2 lg:max-w-none 
            h-auto max-h-[400px] 
            object-contain
          "
        />
      </div>

      <section id="o-mnie" className="w-full mt-25 text-start">
        <h2 className="relative inline-block sm:text-[35px] lg:text-[35px] xl:text-[50px] font-black text-primary">
          Kim jestem
          <span
            className="
              absolute -bottom-2 left-0 h-[3px] w-3/4
              bg-primary neon neon-green
            "
          />
        </h2>
        <div className="mt-12 flex flex-col lg:flex-row gap-16 lg:items-stretch">
          <ProfileContainer />
          <InfoContainer />
        </div>
      </section>
      <section id="uslugi" className="w-full mt-25 text-start">
        <h2 className="relative inline-block sm:text-[35px] lg:text-[35px] xl:text-[50px] font-black text-primary">
          Czym się zajmuję
          <span
            className="
              absolute -bottom-2 left-0 h-[3px] w-3/4
              bg-primary neon neon-green
            "
          />
        </h2>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Service
              key={service.title}
              iconName={service.iconName}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
      <section id="portfolio" className="w-full py-20 text-start">
        <h2 className="relative inline-block sm:text-[35px] lg:text-[35px] xl:text-[50px] font-black text-primary">
          Portfolio
          <span
            className="
              absolute -bottom-2 left-0 h-[3px] w-3/4
              bg-primary neon neon-green
            "
          />
        </h2>
        <div className="mt-12">
          <ProjectScroller>
            {projectsData.map((project) => (
              <ProjectCard
                key={project.title}
                type={project.type}
                color={project.color}
                title={project.title}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </ProjectScroller>
        </div>
      </section>
    </div>
  );
}