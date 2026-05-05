import React, { useState } from "react";
import {
  Mail,
  Send,
  ChevronRight,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { SITE_DETAILS, CONTACT_API_URL } from "../config";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    device: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          subject: `Repair Service Inquiry: ${formState.device}`,
          to_email: SITE_DETAILS.email
        }),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormState({ name: "", email: "", device: "", message: "" });
      } else {
        throw new Error('Failed to send request. Please try again later.');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <main className="w-full bg-white font-['Poppins']">
      <SEO
        title="Contact & Book Computer Repair Service | C.E. Computer Repair"
        description="Contact us to book computer repair services including laptop repair, screen replacement, and diagnostics. Easy booking with reliable service support."
      />

      <section className="w-full bg-[#062238] py-20 lg:py-28">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#1E86C8] uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Book Service</span>
          </div>

          <h1 className="text-white text-[30px] md:text-[40px] lg:text-[50px] font-medium leading-tight mb-6">
            Contact & Book Computer Repair Service
          </h1>

          <p className="text-white/75 text-[17px] leading-[1.8] max-w-[760px]">
            Need help with your device? Contact us to book computer repair services including laptop repair, screen replacement, and diagnostics.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F7F7F7] py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-10 lg:gap-16">
            
            <div className="space-y-6">
              <div className="bg-white border border-[#D7E9F7] p-7">
                <MapPin className="w-7 h-7 text-[#1E86C8] mb-5" />
                <h3 className="text-[#082F57] text-[22px] font-medium mb-3">
                  Our Location
                </h3>
                <p className="text-[#6B7280] text-[15px] leading-[1.8]">
                  {SITE_DETAILS.address}
                </p>
              </div>

              <div className="bg-white border border-[#D7E9F7] p-7">
                <Mail className="w-7 h-7 text-[#1E86C8] mb-5" />
                <h3 className="text-[#082F57] text-[22px] font-medium mb-3">
                  Email Us
                </h3>
                <a
                  href={`mailto:${SITE_DETAILS.email}`}
                  className="text-[#1E86C8] text-[15px] font-medium break-all"
                >
                  {SITE_DETAILS.email}
                </a>
              </div>

              <div className="bg-[#062238] p-7">
                <h3 className="text-white text-[24px] font-medium mb-6">
                  Service Commitment
                </h3>

                <div className="space-y-4">
                  {[
                    "Free initial diagnosis available",
                    "No unnecessary repairs recommended",
                    "Service based on actual device condition",
                    "Focused on necessary repairs only",
                  ].map((note, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#1E86C8] shrink-0 mt-0.5" />
                      <p className="text-white/75 text-[15px] leading-[1.6]">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#D7E9F7] p-7 md:p-10">
              <h2 className="text-[#082F57] text-[28px] md:text-[36px] font-medium mb-8">
                Request a Service
              </h2>

              {status.success ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#1E86C8] mx-auto mb-6" />
                  <h3 className="text-[#082F57] text-[28px] font-medium mb-4">
                    Request Received!
                  </h3>
                  <p className="text-[#6B7280] text-[16px] leading-[1.8] max-w-[520px] mx-auto">
                    Thank you for reaching out. We've received your service request and will get back to you shortly to guide you through the next steps.
                  </p>
                  <button 
                    onClick={() => setStatus({ ...status, success: false })}
                    className="mt-8 bg-[#1E86C8] hover:bg-[#0A4F86] text-white px-8 py-4 font-medium uppercase tracking-[0.08em] transition"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-[#F4F8FC] border border-[#D7E9F7] px-5 py-4 outline-none"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-[#F4F8FC] border border-[#D7E9F7] px-5 py-4 outline-none"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <input
                    required
                    type="text"
                    placeholder="Device Type (Laptop / Desktop)"
                    className="w-full bg-[#F4F8FC] border border-[#D7E9F7] px-5 py-4 outline-none"
                    value={formState.device}
                    onChange={(e) => setFormState({ ...formState, device: e.target.value })}
                  />

                  <textarea
                    required
                    rows="6"
                    placeholder="Issue Description"
                    className="w-full bg-[#F4F8FC] border border-[#D7E9F7] px-5 py-4 outline-none resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />

                  {status.error && (
                    <div className="flex items-center gap-3 text-red-600 text-sm font-medium bg-red-50 p-4 rounded-xl border border-red-100">
                      <AlertCircle className="w-5 h-5" />
                      {status.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full bg-[#1E86C8] hover:bg-[#0A4F86] text-white py-4 font-medium uppercase tracking-[0.08em] flex items-center justify-center gap-3 transition disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status.loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Book an Appointment
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;