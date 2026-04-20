import type { LucideIcon } from "lucide-react";

export function BenefitCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-lg border border-[#E5E5E5] bg-white p-5">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#007AFF]">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#666666]">{description}</p>
    </article>
  );
}
