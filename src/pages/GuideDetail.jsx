import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData.jsx';
import { 
  ArrowLeft, 
  ChevronRight, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  ArrowUpRight,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import SEO from '../components/SEO';

const GuideDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center p-10 bg-white rounded-[2.5rem] shadow-xl border border-zinc-100">
        <h1 className="text-3xl font-serif text-zinc-900 mb-4">Service not found</h1>
        <p className="text-zinc-500 mb-8">The service you are looking for doesn't exist or has been moved.</p>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all services
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${service.title} | C.E. Computer Repair`} 
        description={service.shortDesc} 
      />
      
      {/* Header / Hero */}
      <section className="relative pt-32 pb-16 bg-zinc-50/50 overflow-hidden border-b border-zinc-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-[12px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-10">
            <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-blue-800 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-400 truncate max-w-[200px] md:max-w-none">{service.title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.bg} ${service.color} shadow-sm border border-white`}>
                  {React.cloneElement(service.icon, { className: "w-7 h-7 stroke-[1.5]" })}
                </div>
                <span className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest">Hardware Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-[1.15] mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
            
            {/* Body Content */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Overview Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Info className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif text-zinc-900">Service Overview</h2>
                </div>
                <div className="bg-zinc-50/70 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/10 rounded-bl-full" />
                  <p className="text-[17px] md:text-[18px] text-zinc-600 leading-[1.8] font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Common Cases Section */}
              {service.cases && service.cases.length > 0 && (
                <div className="space-y-12">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-serif text-zinc-900">Common Issues We Handle</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.cases.map((caseItem, index) => (
                      <div 
                        key={index} 
                        className="group bg-white rounded-2xl p-6 border border-zinc-100 hover:border-blue-100 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-zinc-800">{caseItem}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust Section */}
              <div className="bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Quality & Transparency</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Every service begins with a thorough diagnosis. We explain the issue clearly 
                      and only recommend necessary repairs using quality, compatible parts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <div className="pt-16 border-t border-zinc-100 flex items-center justify-between">
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-3 text-zinc-900 font-bold hover:text-blue-600 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to all services
                </Link>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                
                {/* Book Card */}
                <div className="bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Book Service</h3>
                    <p className="text-zinc-600 mb-8 leading-relaxed text-[15px]">
                      Need help with this specific hardware issue? Schedule an inspection today.
                    </p>
                    <Link 
                      to="/contact-book-service" 
                      className="flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-800 text-white py-4.5 rounded-2xl font-bold transition-all shadow-lg active:scale-[0.98]"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Other Services */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Other Services</h4>
                    <Link to="/services" className="text-[11px] font-bold text-blue-600 uppercase hover:underline">View All</Link>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {servicesData.filter(s => s.id !== service.id).slice(0, 4).map(other => (
                      <Link 
                        key={other.id} 
                        to={`/services/${other.id}`}
                        className="group flex flex-col p-6 rounded-[2rem] bg-white border border-zinc-100 hover:border-blue-100 hover:shadow-xl transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${other.bg} ${other.color} border border-white group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                            {React.cloneElement(other.icon, { className: "w-5 h-5" })}
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-blue-600 transition-all" />
                        </div>
                        <h5 className="text-[16px] font-bold text-zinc-900 group-hover:text-blue-700 transition-colors line-clamp-1">{other.title}</h5>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GuideDetail;
