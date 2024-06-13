import { MdDownload } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function PageDownload({ url, label, className }) {
  return (
    <div className={twMerge("flex justify-center items-center", className)}>
      <a
        href={url}
        download
        target="_blank"
        className="flex items-center gap-2 text-white hover:underline"
      >
        <MdDownload />
        {label}
      </a>
    </div>
  );
}