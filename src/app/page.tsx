import ProfileContainer from '@/components/ProfileContainer';
import InfoContainer from '@/components/InfoContainer';

export default function HomePage() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <div
        className="
        w-full flex flex-col md:flex-row
        items-center lg:items-start
        justify-between
        gap-12 py-20
      "
      >
        <div className="flex flex-col gap-6 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-black text-primary leading-tight">
            Tworzenie
            <br />
            nowoczesnych
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-bold text-primary neon neon-green leading-tight">
            Stron Webowych
            <br />
            Branding & Design
          </h1>
          <p className="text-2xl md:text-3xl lg:text-[35px] xl:text-[35px] font-light text-primary">
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
      <section id="o-mnie" className="w-full py-20 text-start">
        <h2 className="relative inline-block text-[41px] font-black text-primary">
          Kim jestem
          <span
            className="
              absolute -bottom-2 left-0 h-[3px] w-3/4
              bg-primary neon neon-green
            "
          />
        </h2>
        <div className="mt-12 flex flex-col md:flex-row gap-16">
          <ProfileContainer />
          <InfoContainer />
        </div>
      </section>
    </main>
  );
}