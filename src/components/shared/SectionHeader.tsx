interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-10 space-y-3">
      <h2 className="text-h2 font-bold text-foreground md:text-h1">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-body text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
