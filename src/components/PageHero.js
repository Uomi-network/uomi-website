import Image from "next/image";

export default function PageHero({ className }) {
  return (
    <div
      className={`PageHero flex justify-center items-center mb-24 ${className}`}
    >
      <Image
        src="/assets/logo-lines.svg"
        alt="Hero"
        width={200}
        height={52}
      />
    </div>
  );
}