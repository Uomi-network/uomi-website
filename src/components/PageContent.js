export default function PageContent({ html, className }) {
  return (
    <div
      className={`PageContent text-white ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}