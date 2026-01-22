import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle2, Target, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white font-['Montserrat'] selection:bg-[#E91E63] selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] font-['Outfit']">
          {/* Background Visuals */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
              alt="Vibrant Printing Colors"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-[#1b63bb]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-[#E91E63]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse [animation-delay:1s]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.5em] uppercase mb-12 text-[#E91E63] animate-fade-in-up bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-[#E91E63] rounded-full animate-ping"></span>
              <span>About Digital Point</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-none animate-fade-in-up select-none uppercase overflow-visible">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                We Are
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_50px_rgba(233,30,99,0.3)] italic mt-2 pr-4">
                Digital Point.
              </span>
            </h1>

            <div className="relative max-w-3xl animate-fade-in-up [animation-delay:0.4s]">
              <p className="text-white/95 text-lg md:text-2xl lg:text-3xl leading-relaxed font-bold tracking-wider [text-shadow:_0_4px_15px_rgba(0,0,0,0.5)]">
                <span className="opacity-80 font-light italic">Your trusted partner for premium printing.</span>
                <br />
                <span>Integrated Marketing Communications.</span>
                <br />

              </p>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Story Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <img src="/assets/projects-img/project10.jpeg" className="rounded-3xl shadow-2xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500" alt="Printing" />
                    <div className="bg-gradient-to-br from-[#1b63bb] to-[#E91E63] p-1 rounded-3xl shadow-xl overflow-hidden">
                      <div className="bg-white p-8 rounded-[1.4rem] h-full flex flex-col justify-center">
                        <div className="text-5xl font-black text-[#E91E63] mb-2">3+</div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Years of Innovation</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-12">
                    <img src="/assets/projects-img/project01.jpeg" className="rounded-3xl shadow-2xl w-full h-[32rem] object-cover transform hover:scale-105 transition-transform duration-500" alt="Team meeting" />
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] font-black uppercase tracking-[0.3em] text-sm block">Our Story</span>
                  <h2 className="text-5xl font-black text-gray-900 leading-tight overflow-visible">From Press to <span className="italic pr-4">Partner</span></h2>
                </div>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                  <p>
                    Founded in 2022 with a passion for precision and quality, Digital Point started as a small high quality printing press. We quickly realized our clients wanted more than just prints — they wanted their ideas to stand out.
                  </p>
                  <p>
                    Today, we provide comprehensive printing solutions, bridging creativity and professionalism. Our mission is simple: to help businesses and individuals communicate with impact, style, and clarity through premium printed materials.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-[#E91E63]/30 transition-colors">
                      <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-6 h-6 text-[#1b63bb]" />
                      </div>
                      <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Premium Quality</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-[#1b63bb]/30 transition-colors">
                      <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-6 h-6 text-[#E91E63]" />
                      </div>
                      <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Global Reach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 bg-gray-50 relative overflow-hidden">
          {/* Background Sparkles/Glows */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1b63bb]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E91E63]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#1b63bb]/20 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] rounded-[2.5rem] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 blur-[8px]"></div>
                <div className="relative bg-white p-12 rounded-[2.5rem] border border-transparent md:border-gray-100 shadow-2xl md:shadow-xl md:shadow-gray-200/50 md:hover:shadow-2xl transition-all duration-500 h-full flex flex-col md:group-hover:border-transparent">
                  <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mb-10 rotate-6 md:rotate-0 md:group-hover:rotate-6 transition-transform shadow-lg relative overflow-hidden">
                    <Target className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shine_1.5s_ease-in-out_infinite] md:animate-none md:group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight font-['Outfit']">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium font-['Outfit']">
                    To be the pioneering one-stop solution for all advertising and digital printing needs in the Kiribathgoda area, providing top-quality products and unmatched service, 24 hours a day.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E91E63] to-[#ff8a00] rounded-[2.5rem] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 blur-[8px]"></div>
                <div className="relative bg-white p-12 rounded-[2.5rem] border border-transparent md:border-gray-100 shadow-2xl md:shadow-xl md:shadow-gray-200/50 md:hover:shadow-2xl transition-all duration-500 h-full flex flex-col md:group-hover:border-transparent">
                  <div className="w-20 h-20 bg-[#E91E63] rounded-3xl flex items-center justify-center mb-10 -rotate-6 md:rotate-0 md:group-hover:-rotate-6 transition-transform shadow-lg relative overflow-hidden">
                    <Zap className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shine_1.5s_ease-in-out_infinite] md:animate-none md:group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight font-['Outfit']">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium font-['Outfit']">
                    Digital Point (Pvt) Ltd is a 5-star rated advertising agency dedicated to helping your business stand out. With state-of-the-art digital printing technology and a passion for creativity, we handle projects of all sizes with professionalism and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Business Units / Our Subsidiaries */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-[#1b63bb] font-black uppercase tracking-[.4em] text-xs mb-4 block">Strategic Business Units</span>
              <h2 className="text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter overflow-visible">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic pr-4">Subsidiaries</span></h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-xl font-medium leading-relaxed font-['Outfit']">
                Our subsidiaries represent the expanding footprint of our organization, each established to address specific market needs and deliver specialized solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Digital Point */}
              <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-gray-100 overflow-hidden shadow-md">
                  <img src="/page-logo/logo01.jpg" alt="Digital Point" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#E91E63] transition-colors uppercase tracking-tight">Digital Point</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                  Our flagship printing and marketing communications division, delivering premium quality prints and integrated marcom solutions to businesses worldwide.
                </p>
                <div className="text-[#1b63bb] font-black text-xs uppercase tracking-[.3em]">
                  Digital Design
                </div>
              </div>

              {/* Subsidiary 2 */}
              <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-gray-100 overflow-hidden shadow-md">
                  <img src="/page-logo/logo03.jpg" alt="Sithuki" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#1b63bb] transition-colors uppercase tracking-tight">Sithuki Agency</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                  Connecting skilled professionals with global employers through seamless recruitment, visa support, and compliance services.
                </p>
                <div className="text-[#E91E63] font-black text-xs uppercase tracking-[.3em]">
                  Employment Agency
                </div>
              </div>

              {/* Subsidiary 3 */}
              <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-gray-100 overflow-hidden shadow-md">
                  <img src="/page-logo/logo02.jpg" alt="Wego" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#ff8a00] transition-colors uppercase tracking-tight">Wego Travels</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                  A full-service travel agency offering personalized travel experiences, curated tours, and seamless booking solutions.
                </p>
                <div className="text-gray-400 font-black text-xs uppercase tracking-[.3em]">
                  Travel Agency
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
            <img
              src="/printing-cta-bg.png"
              className="w-full h-full object-cover opacity-30"
              alt="CTA Background"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Ready to Start <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63]">Your Project?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Digital Point provides high-quality prints, from banners to posters, making every project look professional and vibrant.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={() => window.location.href = '/contact-us'}
                className="group relative overflow-hidden bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white px-12 py-8 rounded-full font-black text-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(233,30,99,0.4)] flex items-center gap-4 w-full sm:w-auto"
              >
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

