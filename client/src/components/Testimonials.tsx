import { Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  location: string;
  result: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function Testimonials({
  testimonials,
  title = "Histórias Reais de Pessoas que Resolveram Seus Problemas",
}: TestimonialsProps) {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-5xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-6 border border-amber-500/20 hover:shadow-lg hover:border-amber-400 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-200 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-semibold text-white mb-1">
                — {testimonial.author}
              </p>

              {/* Location */}
              <p className="text-sm text-slate-400 mb-3">{testimonial.location}</p>

              {/* Result Badge */}
              <div className="inline-block bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30">
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
