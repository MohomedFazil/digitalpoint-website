import { useState } from 'react';
import { Footer } from '../components/Footer';
import {
  Printer,
  Flag,
  Monitor,
  PenTool,
  Briefcase,
  Settings,
  Truck,
  CheckCircle,
  Clock,
  Award,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Palette,
  Store,
  LayoutGrid,
  Gem,
  Tent,
  Car,
  Layers,
  Scissors,
  Type,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const ALL_SERVICES: Service[] = [
  {
    icon: Palette,
    title: "Event Branding",
    description: "Complete branding solutions for events, exhibitions, and promotions with impactful visual designs.",
    features: ["Stage Branding", "Backdrop Design", "Directional Signage"]
  },
  {
    icon: Store,
    title: "Shop Branding",
    description: "Attractive shop branding solutions to enhance visibility and create a strong brand presence.",
    features: ["Shop Front Branding", "Window Graphics"]
  },
  {
    icon: LayoutGrid,
    title: "Display Racks",
    description: "Custom-designed display racks for retail and promotional product showcasing.",
    features: ["Metal Racks", "Acrylic Racks", "Custom Sizes"]
  },
  {
    icon: Gem,
    title: "Crystal & Panel Works",
    description: "Premium crystal panels and decorative panels for signage and interior branding.",
    features: ["Crystal Letters", "Acrylic Panels", "LED Panels"]
  },
  {
    icon: Tent,
    title: "Stall Design",
    description: "Creative and functional stall designs for exhibitions, trade fairs, and expos.",
    features: ["3D Stall Design", "Fabrication", "On-site Installation"]
  },
  {
    icon: Car,
    title: "Vehicle Branding",
    description: "High-quality vehicle branding solutions to promote your business on the move.",
    features: ["Full Wraps", "Partial Wraps", "Sticker Branding"]
  },
  {
    icon: Layers,
    title: "Pylon & Hoarding Boards",
    description: "Large-scale outdoor advertising solutions for maximum brand visibility.",
    features: ["Pylon Boards", "Roadside Hoardings", "Weather-Resistant Prints"]
  },
  {
    icon: Monitor,
    title: "Display Dummies",
    description: "Eye-catching display dummies and standees for promotions and product launches.",
    features: ["Standee Displays", "Foam Board Prints", "Life-size Cutouts"]
  },
  {
    icon: Scissors,
    title: "CNC & Laser Cutting",
    description: "Precision cutting services for branding and signage materials.",
    features: ["CNC Routing", "Laser Cutting", "Custom Shapes"]
  },
  {
    icon: Type,
    title: "Plastic & S.S Letters",
    description: "Durable and stylish lettering solutions for indoor and outdoor signage.",
    features: ["Plastic Letters", "Stainless Steel Letters", "LED Letters"]
  },
  {
    icon: Flag,
    title: "Flex, Banner & Flag Printing",
    description: "Fast, affordable, and high-resolution printing for all promotional needs.",
    features: ["Flex Printing", "Flag Printing", "Funeral Banners"]
  },
  {
    icon: Printer,
    title: "Sticker & Sublimation Printing",
    description: "High-quality sticker and sublimation printing for branding and merchandise.",
    features: ["Transparent Stickers"]
  },
  {
    icon: Lightbulb,
    title: "Light Boards & Name Boards",
    description: "Illuminated and non-illuminated boards for professional business identification.",
    features: ["LED Light Boards", "Name Boards"]
  }
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative h-full">
      <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl md:shadow-xl md:hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Icon container */}
        <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mb-8 md:group-hover:rotate-6 transition-transform shadow-lg">
          <service.icon className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight font-['Outfit']">{service.title}</h3>

        <p className="text-gray-600 leading-relaxed font-medium mb-8">
          {service.description}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm font-bold text-gray-500 group-hover:text-gray-700 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#E91E63] mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(ALL_SERVICES.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentServices = ALL_SERVICES.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const section = document.getElementById('services-grid');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Montserrat'] selection:bg-[#E91E63] selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] font-['Outfit']">
          {/* Background Visuals */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop"
              alt="Digital Printing Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-transparent to-[#050505]"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-[#1b63bb]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-[#E91E63]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse [animation-delay:1s]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.5em] uppercase mb-12 text-[#E91E63] animate-fade-in-up bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-[#E91E63] rounded-full animate-ping"></span>
              <span>Our Expertise</span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-none animate-fade-in-up select-none uppercase overflow-visible">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                Our
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_50px_rgba(233,30,99,0.3)] italic mt-2 pr-4">
                Capabilities.
              </span>
            </h1>

            <div className="relative max-w-3xl animate-fade-in-up [animation-delay:0.4s]">
              <p className="text-white/95 text-lg md:text-2xl lg:text-3xl leading-relaxed font-bold tracking-wider [text-shadow:_0_4px_15px_rgba(0,0,0,0.5)]">
                <span className="opacity-80 font-light italic">Precision in every pixel.</span>
                <br />
                <span>Excellence in every print.</span>
              </p>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Services Grid */}
        <section id="services-grid" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-xs mb-4 block">What We Do</span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-normal uppercase mb-8 font-['Outfit'] overflow-visible">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic pr-4">Printing Solutions</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-xl font-medium leading-relaxed font-['Outfit']">
                Our premium printing solutions represent the core of our technical expertise, each service specifically established to address diverse branding needs and deliver high-impact visual results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {currentServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>

            {/* Pagination Section */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-4 mt-16">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${currentPage === 1
                    ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                    : 'text-gray-600 border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63] hover:shadow-lg'
                    }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-14 h-14 rounded-2xl font-black transition-all duration-300 ${currentPage === i + 1
                      ? 'bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white shadow-xl scale-110'
                      : 'text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${currentPage === totalPages
                    ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                    : 'text-gray-600 border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63] hover:shadow-lg'
                    }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <span className="text-[#E91E63] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Value</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight uppercase mb-8 font-['Outfit'] overflow-visible">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic pr-4">Choose Us?</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-xl font-medium leading-relaxed font-['Outfit']">
                We combine industry expertise with state-of-the-art technology to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="group p-10 rounded-[2.5rem] bg-white border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#E91E63]/10 transition-colors">
                  <Clock className="w-10 h-10 text-[#E91E63]" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Open 24 Hours</h3>
                <p className="text-gray-600 font-medium">
                  We are always available for your urgent needs. Day or night, we're here to help.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-10 rounded-[2.5rem] bg-white border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#1b63bb]/10 transition-colors">
                  <Award className="w-10 h-10 text-[#1b63bb]" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">High Quality</h3>
                <p className="text-gray-600 font-medium">
                  Using modern equipment to ensure the best results. Premium materials for a premium finish.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-10 rounded-[2.5rem] bg-white border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#E91E63]/10 transition-colors">
                  <Users className="w-10 h-10 text-[#E91E63]" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Experienced Team</h3>
                <p className="text-gray-600 font-medium">
                  Pioneers in the advertising field. Our expertise translates into your success.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group p-10 rounded-[2.5rem] bg-white border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#1b63bb]/10 transition-colors">
                  <MapPin className="w-10 h-10 text-[#1b63bb]" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">Local & Convenient</h3>
                <p className="text-gray-600 font-medium">
                  Located in the heart of Makola, Kiribathgoda. Easy access for all our local partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-xs mb-4 block">How We Work</span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight uppercase font-['Outfit'] overflow-visible">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic pr-4">Process</span>
              </h2>
            </div>

            <div className="relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#1b63bb]/20 via-[#E91E63]/20 to-[#1b63bb]/20 -translate-y-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Step 1 */}
                <div className="relative group">
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-8 h-8 text-[#1b63bb]" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">1. Consultation</h3>
                    <p className="text-gray-600 font-medium">We discuss your needs, budget, and timeline to understand exactly what you are looking for.</p>
                  </div>
                  <div className="hidden lg:block absolute top-0 left-12 w-8 h-8 rounded-full bg-[#1b63bb] border-4 border-white shadow-lg -translate-y-1/2 z-20"></div>
                </div>

                {/* Step 2 */}
                <div className="relative group">
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <PenTool className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">2. Design & Prep</h3>
                    <p className="text-gray-600 font-medium">Our team creates or verifies your designs to ensure they meet high print quality standards.</p>
                  </div>
                  <div className="hidden lg:block absolute top-0 left-12 w-8 h-8 rounded-full bg-amber-600 border-4 border-white shadow-lg -translate-y-1/2 z-20"></div>
                </div>

                {/* Step 3 */}
                <div className="relative group">
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Settings className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">3. Production</h3>
                    <p className="text-gray-600 font-medium">Using state-of-the-art machinery, we bring your vision to life with precision and care.</p>
                  </div>
                  <div className="hidden lg:block absolute top-0 left-12 w-8 h-8 rounded-full bg-[#E91E63] border-4 border-white shadow-lg -translate-y-1/2 z-20"></div>
                </div>

                {/* Step 4 */}
                <div className="relative group">
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Truck className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">4. Delivery</h3>
                    <p className="text-gray-600 font-medium">We ensure safe packaging and timely delivery or installation at your specified location.</p>
                  </div>
                  <div className="hidden lg:block absolute top-0 left-12 w-8 h-8 rounded-full bg-green-600 border-4 border-white shadow-lg -translate-y-1/2 z-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-[#050505]">
          {/* Background Decorative Glows */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#1b63bb]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#E91E63]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <div className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.4em] uppercase mb-8 text-[#E91E63]">
                  <span className="w-8 h-[1px] bg-[#E91E63]"></span>
                  <span>Get Started</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none font-['Outfit']">
                  Need a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00]">Custom Quote?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-xl font-medium leading-relaxed">
                  Ready to elevate your project? Get the best prices for your bulk printing needs. Our specialist team is here to provide high-quality solutions tailored to your vision.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button
                    onClick={() => window.location.href = '/contact-us'}
                    className="group relative overflow-hidden bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white px-10 py-8 rounded-full font-black text-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(233,30,99,0.4)] flex items-center gap-4 w-full sm:w-auto"
                  >
                    <span className="relative z-10">Contact Us Now</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="relative group lg:block hidden">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop"
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="CTA Visual"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
