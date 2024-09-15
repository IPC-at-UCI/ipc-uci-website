
export default function Section({
  children,
  className,
}: {
  children?: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={className}>
      <div className={` bg-cover bg-center`}>
        {children}
      </div>
    </div>
  );
}
