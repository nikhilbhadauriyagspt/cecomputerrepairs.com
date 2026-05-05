import React from "react";
import SEO from "../components/SEO";

const RefundPolicy = () => {
  return (
    <main className="w-full bg-white font-['Poppins']">
      <SEO
        title="Refund & Cancellation Policy | C.E. Computer Repair"
        description="Learn about our refund and cancellation policy including service eligibility, cancellations, and conditions for computer repair services."
      />

      {/* HERO */}
      <section className="w-full bg-[#062238] py-20 lg:py-28">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <h1 className="text-white text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-tight">
            Refund & Cancellation Policy
          </h1>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 text-[#374151] text-[15px] leading-[1.9] space-y-10">

          <p>
            Thank you for choosing our repair services. We hope you are satisfied with the work performed. However, if you are not completely satisfied with our service for any reason, you may be eligible for a refund. Please see below for more information on our refund policy.
          </p>

          {/* RETURNS */}
          <section>
            <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
              Returns / Refunds
            </h2>
            <p>
              All refund requests must be made within seven (7) days of the service completion date.
            </p>
          </section>

          {/* PROCESS */}
          <section>
            <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
              Process
            </h2>
            <p>
              To request a refund, please email customer service at{" "}
              <a
                href="mailto:contact@cecomputerrepairs.com"
                className="text-[#1E86C8] hover:underline"
              >
                contact@cecomputerrepairs.com
              </a>{" "}
              with your service order number. After receiving your request, we will review the service performed and notify you of the status of your refund.
            </p>

            <div className="mt-6 bg-[#F4F8FC] border border-[#D7E9F7] p-5">
              <p>C.E. Computer Repair</p>
              <p>Attn: Returns/Refunds</p>
              <p>1818 E Yesler Way, Suite 101</p>
              <p>Seattle, WA 98122, United States</p>
              <p>United States</p>
            </div>
          </section>

          {/* REFUNDS */}
          <section>
            <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
              Refunds
            </h2>
            <p>
              After reviewing your request and inspecting the condition of any parts replaced, we will process your refund. Please allow at least seven (7) days from the approval of your request to process your refund.
            </p>
            <p className="mt-4">
              Refunds may take 1-2 billing cycles to appear on your credit card statement, depending on your credit card company. We will notify you by email when your refund has been processed.
            </p>
          </section>

          {/* EXCEPTIONS */}
          <section>
            <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
              Exceptions
            </h2>
            <p>
              For issues related to recurring problems after a repair, please contact us immediately to arrange a follow-up diagnostic or refund.
            </p>
          </section>

          {/* QUESTIONS */}
          <section className="bg-[#F4F8FC] border border-[#D7E9F7] p-6">
            <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
              Questions
            </h2>
            <p>
              If you have any questions concerning our refund policy, please contact us at:
            </p>

            <div className="mt-4">
              <p>C.E. Computer Repair</p>
              <p>1818 E Yesler Way, Suite 101</p>
              <p>Seattle, WA 98122, United States</p>
              <p>United States</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@cecomputerrepairs.com"
                  className="text-[#1E86C8] hover:underline"
                >
                  contact@cecomputerrepairs.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
};

export default RefundPolicy;