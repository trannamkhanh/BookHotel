import { services } from '../data/services';
import { Sparkles, UtensilsCrossed, Waves, Dumbbell, MapPin, Presentation } from 'lucide-react';

const iconMap: Record<string, any> = {
  Sparkles,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  MapPin,
  Presentation,
};

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl mb-4">Dịch Vụ</h1>
          <p className="text-stone-300 text-lg">
            Trải nghiệm các dịch vụ cao cấp tại resort của chúng tôi
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-56">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-3">
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-xl text-white">{service.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
