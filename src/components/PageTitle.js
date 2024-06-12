import { twMerge } from "tailwind-merge";

export default function PageTitle({ children, className }) {
  return (
    <h1 className={twMerge("PageTitle text-4xl md:text-7xl font-medium text-white text-center", className)}>
      {children}
    </h1>
  );
}