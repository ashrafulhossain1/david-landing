interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return <div className={`max-w-312 mx-auto ${className}`}>{children}</div>;
}
