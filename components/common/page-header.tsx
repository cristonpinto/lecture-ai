export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">{eyebrow}</p>
        <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[0.98] text-white md:text-6xl">
          {title}
        </h1>
      </div>
      <p className="max-w-xl text-sm leading-7 text-zinc-400 md:text-base">{description}</p>
    </div>
  );
}
