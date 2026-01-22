import { Footer } from '../components/Footer';
import { Linkedin, Twitter, Award, Target, Users } from 'lucide-react';

// Data placeholders
const mainLeader = {
  name: "Mr.Maha Pathiranage Dinesh Sanjeewa",
  role: "Chairman",
  image: "/assets/leadership-img/chairmen.jpg",
  bio: "It is my privilege to introduce Digital Point, a premier printing and marketing communications company founded in 2022. We are committed to delivering high-quality printing solutions and creative marcom services to businesses and individuals alike. At Digital Point, we understand that effective communication is the cornerstone of every successful brand. Our mission is to simplify your printing and marketing needs by providing precision, creativity, and reliability in every project, while building long-term relationships founded on trust, transparency, and professionalism. Quality, creativity, and client satisfaction are at the heart of everything we do, empowering businesses to communicate clearly, effectively, and beautifully with their audiences. We warmly invite you to experience the difference Digital Point can bring to your branding and printing projects."
};

const directors = [
  { name: "Mr.Lahiru Perera", role: "Director", image: "/assets/leadership-img/director03.jpeg" },
  { name: "Mr.Manjula D. Perera", role: "Director", image: "/assets/leadership-img/director01.jpeg" },
  { name: "Mr.Dilshan Perera", role: "Director", image: "/assets/leadership-img/director02.jpeg" },
];

const managers = [
  { name: "Chandrani Kankanamge", role: "Secretary", image: "/assets/leadership-img/secretary.jpeg" },
];

export function Leadership() {
  return (
    <div className="min-h-screen bg-white font-['Montserrat'] selection:bg-[#E91E63] selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] font-['Outfit']">
          {/* Background Visuals */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Leadership Team"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-[#1b63bb]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-[#E91E63]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse [animation-delay:1s]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.5em] uppercase mb-12 text-[#E91E63] animate-fade-in-up bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-[#E91E63] rounded-full animate-ping"></span>
              <span className='text-sm'>The Leadership Team</span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-none animate-fade-in-up select-none uppercase">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                Guiding
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_50px_rgba(233,30,99,0.3)] italic mt-2">
                Visionaries.
              </span>
            </h1>

            <div className="relative max-w-3xl animate-fade-in-up [animation-delay:0.4s]">
              <p className="text-white/95 text-sm md:text-2xl lg:text-3xl leading-relaxed font-bold tracking-wider [text-shadow:_0_4px_15px_rgba(0,0,0,0.5)]">
                <span className="opacity-80 font-light italic">Leading with innovation and excellence.</span>
                <br />

                <span>Building the next generation of brands.</span>
              </p>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Leader Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 group transition-all duration-500 hover:shadow-pink-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
                <div className="lg:col-span-5 h-[600px] lg:h-auto relative overflow-hidden">
                  <img
                    src={mainLeader.image}
                    alt={mainLeader.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="lg:col-span-7 p-12 lg:p-20 flex flex-col justify-center bg-white relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E91E63]/10 to-transparent text-[#E91E63] text-xs font-black tracking-[0.3em] uppercase rounded-full mb-8 w-fit border border-[#E91E63]/20">
                    <Award className="w-4 h-4" />
                    Visionary Leader
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">{mainLeader.name}</h2>
                  <p className="text-2xl text-[#1b63bb] mb-10 font-black italic tracking-tight">{mainLeader.role}</p>
                  <div className="relative">
                    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#E91E63] to-[#1b63bb] rounded-full opacity-40"></div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg font-medium italic">
                      "{mainLeader.bio}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directors Section */}
        <section className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Guardians</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">Board of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic px-2">Directors</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {directors.map((director, index) => (
                <div key={index} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10 relative bg-white">
                    <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase group-hover:text-[#E91E63] transition-colors">{director.name}</h3>
                    <p className="text-[#1b63bb] font-black text-sm uppercase tracking-[0.2em]">{director.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Managers Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-[#E91E63] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Operational Excellence</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic px-2">Team</span></h2>
            </div>
            <div className="flex justify-center">
              <div className="max-w-lg w-full">
                {managers.map((manager, index) => (
                  <div key={index} className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <div className="aspect-[1/1] overflow-hidden relative">
                      <img
                        src={manager.image}
                        alt={manager.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-10 relative bg-white">
                      <div className="absolute top-0 right-10 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center group-hover:bg-[#E91E63] group-hover:text-white transition-all duration-300">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase">{manager.name}</h3>
                      <p className="text-[#E91E63] font-black text-sm uppercase tracking-[0.2em]">{manager.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* United by Purpose Section */}
        <section className="py-20 sm:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8 sm:space-y-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#E91E63] to-[#1b63bb] rounded-3xl flex items-center justify-center shadow-2xl transform shadow-pink-500/20">
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-none">United by <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x italic pr-2">Purpose</span></h2>
                  <p className="text-lg sm:text-2xl text-gray-400 font-medium leading-relaxed italic">
                    "Our leadership team shares a common vision: to help businesses and individuals communicate effectively through high-quality printing and creative marcom solutions."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:gap-12 pt-8 sm:pt-10">
                  <div className="space-y-2 border-l-4 border-[#1b63bb] pl-6">
                    <h4 className="text-3xl sm:text-5xl font-black text-white">100%</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-black tracking-[0.3em]">Client Dedication</p>
                  </div>
                  <div className="space-y-2 border-l-4 border-[#E91E63] pl-6">
                    <h4 className="text-3xl sm:text-5xl font-black text-white">24/7</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-black tracking-[0.3em]">Excellence</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-6 sm:space-y-8 sm:translate-y-12">
                    <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group">
                      <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#E91E63] mb-6 sm:mb-8 group-hover:scale-110 transition-transform" />
                      <h3 className="font-black text-xl sm:text-2xl mb-3 sm:mb-4 uppercase tracking-tight">Excellence</h3>
                      <p className="text-gray-400 font-medium text-sm sm:text-base">Setting the highest standards in every project.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group">
                      <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#1b63bb] mb-6 sm:mb-8 group-hover:scale-110 transition-transform" />
                      <h3 className="font-black text-xl sm:text-2xl mb-3 sm:mb-4 uppercase tracking-tight">Collaboration</h3>
                      <p className="text-gray-400 font-medium text-sm sm:text-base">Working together to achieve common goals.</p>
                    </div>
                  </div>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group">
                      <Target className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mb-6 sm:mb-8 group-hover:scale-110 transition-transform" />
                      <h3 className="font-black text-xl sm:text-2xl mb-3 sm:mb-4 uppercase tracking-tight">Innovation</h3>
                      <p className="text-gray-400 font-medium text-sm sm:text-base">Constantly evolving and improving our methods.</p>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-[#E91E63] to-[#1b63bb] rounded-[2rem] sm:rounded-[2.5rem] p-1 shadow-2xl shadow-blue-500/20">
                      <div className="bg-gray-900 h-full w-full rounded-[1.9rem] sm:rounded-[2.3rem] flex items-center justify-center p-6 sm:p-8">
                        <img src="/logo.png" className="w-full opacity-80" alt="Logo" />
                      </div>
                    </div>
                  </div>
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

