import { MapPin, Users, Clock, Shield } from "lucide-react";

interface SocialProofItem {
  icon: React.ReactNode;
  label: string;
}

const defaultProofs: SocialProofItem[] = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Atendimento em Cuiabá e região",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    label: "OAB/MT 10.889",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Análise em até 1 hora",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "Atendimento direto com advogado",
  },
];

interface SocialProofProps {
  items?: SocialProofItem[];
}

export default function SocialProof({ items = defaultProofs }: SocialProofProps) {
  return (
    <section className="w-full bg-gradient-to-r from-slate-900 to-slate-800 py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="text-center text-amber-300 mb-10 font-bold text-lg">
          Confiança e transparência em cada atendimento
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-300 border border-amber-400/30">
                  {item.icon}
                </div>
              </div>
              <p className="text-sm text-slate-200 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
