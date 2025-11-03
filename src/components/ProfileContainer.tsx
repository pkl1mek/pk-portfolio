import PhotoContainer from './PhotoContainer';
import IconLink from './IconLink';
import Button from './Button';

export default function ProfileContainer() {
  return (
    <div
      className="
        flex flex-col items-center
        gap-9 p-6
        max-w-[362px]
      "
    >
      <PhotoContainer />

      <div className="w-full flex items-center justify-center gap-9">
        <IconLink
          href="https://github.com/pkl1mek"
          ariaLabel="Mój profil GitHub"
          iconName="github.svg"
        />
        <IconLink
          href="https://linkedin.com/in/twoj-profil"
          ariaLabel="Mój profil LinkedIn"
          iconName="linkedin.svg"
        />
        <IconLink
          href="mailto:twoj-email@example.com"
          ariaLabel="Napisz do mnie e-mail"
          iconName="mail.svg"
        />
        <IconLink
          href="tel:+48123456789"
          ariaLabel="Zadzwoń do mnie"
          iconName="phone.svg"
        />
      </div>

      <Button
        content="Certyfikaty"
        iconName="certificates.svg"
        radius={36}
      />
    </div>
  );
}