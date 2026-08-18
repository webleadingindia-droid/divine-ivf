"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Sparkles, Stethoscope, Baby, Users, Plus } from "lucide-react";
import { serviceGroups } from "@/data/services";

export function ServicePathways() {
  // Map icons to service groups
  const getIcon = (key: string) => {
    const icons: Record<string, any> = {
      ivf: Heart,
      iui: Sparkles,
      evaluation: Shield,
      "advanced-ivf": Stethoscope,
      "male-fertility": Users,
      "womens-health": Heart,
      "reproductive-procedures": Sparkles,
      "pregnancy-care": Baby,
    };
    return icons[key] || Sparkles;
  };

  // SIRF PEHLE 3 GROUPS (CARDS) HOME PAGE PAR, HAR CARD ME SIRF 3 SERVICES
  const limitedGroups = serviceGroups.slice(0, 3).map((group) => ({
    ...group,
    limitedServices: group.services.slice(0, 3), // Sirf 3 services
    totalServices: group.services.length,
    extraCount: group.services.length - 3, // Bachi hui services
  }));

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-rose-50/10 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-50/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 opacity-5 animate-float-slow">
          <Heart className="h-32 w-32 text-rose-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 animate-float-medium">
          <Baby className="h-28 w-28 text-rose-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50 text-rose-700 text-xs font-medium mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Care Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-[1.15]">
            Every service, organised{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif italic">
              around your care
            </span>
          </h2>
          
          <p className="text-sm text-ink-400 mt-3 max-w-md mx-auto">
            Comprehensive fertility, gynaecology and pregnancy care under one roof
          </p>
        </div>

        {/* Service Cards - Sirf 3 cards, 3 services per card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {limitedGroups.map((group) => {
            const Icon = getIcon(group.key);
            
            return (
              <div
                key={group.key}
                className="group relative overflow-hidden rounded-3xl bg-white border border-rose-100/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-rose-200"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="h-5 w-5 text-rose-600" />
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-rose-600 shadow-lg">
                    {group.totalServices} Services
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {group.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm text-ink-500 leading-relaxed mb-3">
                    {group.summary}
                  </p>

                  {/* SIRF 3 SERVICES - limitedServices use kar rahe hain, har service apne page par link hai */}
                  <ul className="space-y-1.5 mb-3">
                    {group.limitedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.slug}
                          className="flex items-center gap-2.5 text-xs text-ink-600 hover:text-rose-600 transition-colors"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* View All Services Button */}
                  <Link
                    href={group.href}
                    className="flex items-center justify-between pt-3 border-t border-rose-100/50 group/link"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 group-hover/link:text-rose-700 transition-colors">
                      View All Services
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </span>
                    {group.extraCount > 0 && (
                      <div className="flex items-center gap-1 px-2.5 py-0.5 bg-rose-50 rounded-full text-xs text-rose-600">
                        <Plus className="h-3 w-3" />
                        {group.extraCount} more
                      </div>
                    )}
                  </Link>
                </div>

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Shield className="h-4 w-4" />
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
