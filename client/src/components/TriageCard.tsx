import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TriageCardProps {
  icon: string;
  title: string;
  description: string;
  problems: string[];
  ctaText: string;
  ctaLink: string;
}

export default function TriageCard({
  icon,
  title,
  description,
  problems,
  ctaText,
  ctaLink,
}: TriageCardProps) {
  return (
    <div className="group bg-slate-800 border border-amber-500/20 rounded-lg p-6 hover:shadow-lg hover:border-amber-400 transition-all duration-300">
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-slate-300 text-sm mb-4">{description}</p>

      {/* Problems List */}
      <ul className="space-y-2 mb-6">
        {problems.map((problem, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-slate-200">
            <span className="text-amber-400 font-bold mt-0.5">•</span>
            <span>{problem}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href={ctaLink}>
        <Button
          className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold group-hover:gap-3 transition-all"
          size="sm"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </a>
    </div>
  );
}
