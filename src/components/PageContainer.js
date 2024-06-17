import { twMerge } from "tailwind-merge";
import Container from "./Container";

export default function PageContainer({ children, className }) {
  return (
    <Container className={twMerge("PageContainer py-16 md:py-32 flex flex-col items-center", className)}>
      <div className="w-full max-w-5xl">
        {children}
      </div>
    </Container>
  );
}