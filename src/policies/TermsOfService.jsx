import React from "react";
import SEO from "../components/SEO";

const EmailLink = () => (
  <a
    href="mailto:contact@cecomputerrepairs.com"
    className="text-[#1E86C8] hover:underline"
  >
    contact@cecomputerrepairs.com
  </a>
);

const TermsOfService = () => {
  const sections = [
    {
      title: "1. OUR SERVICES",
      body: [
        "The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws.",
        "The Services are not tailored to comply with industry-specific regulations such as HIPAA, FISMA, or GLBA, so if your interactions would be subjected to such laws, you may not use the Services.",
      ],
    },
    {
      title: "2. INTELLECTUAL PROPERTY RIGHTS",
      body: [
        "We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, text, photographs, graphics, trademarks, service marks, and logos contained therein.",
        "Our Content and Marks are protected by copyright and trademark laws and are provided in or through the Services \"AS IS\" for your personal, non-commercial use or internal business purpose only.",
        "Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content to which you have properly gained access.",
        "No part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose without our express prior written permission.",
        <>
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in these Legal Terms, please address your request to{" "}
          <EmailLink />.
        </>,
        "Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.",
      ],
    },
    {
      title: "3. USER REPRESENTATIONS",
      body: [
        "By using the Services, you represent and warrant that you have the legal capacity and agree to comply with these Legal Terms; you are not a minor in your jurisdiction; you will not access the Services through automated or non-human means; you will not use the Services for any illegal or unauthorized purpose; and your use of the Services will not violate any applicable law or regulation.",
        "If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your access and refuse any current or future use of the Services.",
      ],
    },
    {
      title: "4. PROHIBITED ACTIVITIES",
      body: [
        "You may not access or use the Services for any purpose other than that for which we make the Services available.",
        "As a user of the Services, you agree not to systematically retrieve data or content from the Services without written permission; trick, defraud, or mislead us or other users; interfere with security-related features; use information obtained from the Services to harass or harm another person; submit false reports; use the Services inconsistently with laws; upload viruses or harmful material; engage in automated use; impersonate another person; interfere with the Services; attempt to bypass restrictions; copy or adapt software; use scraping tools; make unauthorized use of the Services; use the Services to compete with us; or sell or transfer your profile.",
      ],
    },
    {
      title: "5. USER GENERATED CONTRIBUTIONS",
      body: [
        "The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or on the Services.",
        "When you create or make available any Contributions, you represent and warrant that your Contributions do not infringe third-party rights; are not false, inaccurate, or misleading; are not unauthorized advertising or spam; are not obscene, harassing, abusive, discriminatory, threatening, or otherwise objectionable; do not violate privacy rights; do not violate laws protecting minors; and do not otherwise violate these Legal Terms.",
        "Any use of the Services in violation of the foregoing may result in termination or suspension of your rights to use the Services.",
      ],
    },
    {
      title: "6. CONTRIBUTION LICENSE",
      body: [
        "You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices.",
        "By submitting suggestions or feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.",
        "We do not assert ownership over your Contributions. You retain full ownership of your Contributions and any intellectual property rights associated with them. You are solely responsible for your Contributions.",
      ],
    },
    {
      title: "7. SERVICES MANAGEMENT",
      body: [
        "We reserve the right, but not the obligation, to monitor the Services for violations of these Legal Terms; take appropriate legal action against anyone who violates the law or these Legal Terms; refuse, restrict access to, limit availability of, or disable Contributions; remove excessive or burdensome files and content; and otherwise manage the Services to protect our rights and property.",
      ],
    },
    {
      title: "8. PRIVACY POLICY",
      body: [
        "We care about data privacy and security. Please review our Privacy Policy: https://cecomputerrepairs.com/privacy-policy.",
        "By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.",
        "The Services are hosted in the United States. If you access the Services from another region, you consent to have your data transferred to and processed in the United States.",
      ],
    },
    {
      title: "9. TERM AND TERMINATION",
      body: [
        "These Legal Terms shall remain in full force and effect while you use the Services.",
        "WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, TO DENY ACCESS TO AND USE OF THE SERVICES TO ANY PERSON FOR ANY REASON OR FOR NO REASON.",
        "If we terminate or suspend your access for any reason, you are prohibited from registering or creating a new account under your name, a fake name, borrowed name, or the name of any third party.",
      ],
    },
    {
      title: "10. MODIFICATIONS AND INTERRUPTIONS",
      body: [
        "We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice.",
        "We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance, resulting in interruptions, delays, or errors.",
        "You agree that we have no liability for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance.",
      ],
    },
    {
      title: "11. GOVERNING LAW",
      body: [
        "These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Washington applicable to agreements made and to be entirely performed within the State of Washington, without regard to conflict of law principles.",
      ],
    },
    {
      title: "12. DISPUTE RESOLUTION",
      body: [
        "Any legal action brought by either you or us shall be commenced or prosecuted in the state and federal courts located in Washington, and the parties consent to venue and jurisdiction in such courts.",
        "Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act are excluded from these Legal Terms.",
      ],
    },
    {
      title: "13. CORRECTIONS",
      body: [
        "There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and other information.",
        "We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information on the Services at any time, without prior notice.",
      ],
    },
    {
      title: "14. DISCLAIMER",
      body: [
        "THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK.",
        "TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.",
        "WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SERVICES.",
        "WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ERRORS, MISTAKES, INACCURACIES, PERSONAL INJURY, PROPERTY DAMAGE, UNAUTHORIZED ACCESS, INTERRUPTION, BUGS, VIRUSES, OR LOSS OR DAMAGE ARISING FROM USE OF CONTENT MADE AVAILABLE VIA THE SERVICES.",
        "WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES.",
      ],
    },
    {
      title: "15. LIMITATIONS OF LIABILITY",
      body: [
        "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES.",
        "OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.",
        "CERTAIN LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR CERTAIN DAMAGES, SO SOME LIMITATIONS MAY NOT APPLY TO YOU.",
      ],
    },
    {
      title: "16. INDEMNIFICATION",
      body: [
        "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand arising out of your use of the Services, breach of these Legal Terms, breach of representations and warranties, violation of third-party rights, or harmful act toward another user.",
        "We reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us.",
      ],
    },
    {
      title: "17. USER DATA",
      body: [
        "We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services.",
        "Although we perform routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.",
        "You agree that we shall have no liability to you for any loss or corruption of such data.",
      ],
    },
    {
      title: "18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
      body: [
        "Visiting the Services, sending us emails, and completing online forms constitute electronic communications.",
        "You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide electronically satisfy any legal requirement that such communication be in writing.",
        "YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.",
      ],
    },
    {
      title: "19. MISCELLANEOUS",
      body: [
        "These Legal Terms and any policies or operating rules posted by us constitute the entire agreement and understanding between you and us.",
        "Our failure to exercise or enforce any right or provision shall not operate as a waiver of such right or provision.",
        "These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time.",
        "If any provision is determined to be unlawful, void, or unenforceable, that provision is deemed severable and does not affect the validity of remaining provisions.",
        "There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Legal Terms.",
      ],
    },
    {
      title: "20. CONTACT US",
      body: [
        "In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:",
        "C.E. Computer Repair",
        "1818 E Yesler Wy Suite 101, Seattle, WA 98122, United States",
        "United States",
        <EmailLink />,
      ],
    },
  ];

  return (
    <main className="w-full bg-white font-['Poppins']">
      <SEO
        title="Terms & Conditions | C.E. Computer Repair"
        description="Review our terms and conditions for computer repair services including service terms, responsibilities, and usage guidelines."
      />

      <section className="w-full bg-[#062238] py-20 lg:py-28">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
          <p className="text-[#1E86C8] text-[13px] font-medium uppercase tracking-[0.24em] mb-5">
            Legal Agreement
          </p>
          <h1 className="text-white text-[36px] md:text-[52px] lg:text-[64px] font-medium leading-tight">
            Terms & Conditions
          </h1>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 text-[#374151] text-[15px] leading-[1.9] space-y-10">
          <section>
            <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
              Agreement to our legal terms
            </h2>

            <p>
              We are C.E. Computer Repair ("Company," "we," "us," "our"), a
              company operating in Seattle, United States at 1818 E Yesler Wy
              Suite 101, Seattle, WA 98122, United States.
            </p>

            <p>
              We operate the website https://cecomputerrepairs.com/ (the
              "Site"), as well as any other related products and services that
              refer or link to these legal terms (the "Legal Terms")
              (collectively, the "Services").
            </p>

            <p>
              C.E. Computer Repair is focused on computer repair and laptop
              repair services with an emphasis on hardware diagnostics,
              practical repair solutions, and clear service communication.
            </p>

            <p>
              You can contact us by email at <EmailLink />, or by mail to 1818 E
              Yesler Wy Suite 101, Seattle, WA 98122, United States.
            </p>

            <p>
              These Legal Terms constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you"),
              and C.E. Computer Repair, concerning your access to and use of the
              Services. You agree that by accessing the Services, you have read,
              understood, and agreed to be bound by all of these Legal Terms. IF
              YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
              DISCONTINUE USE IMMEDIATELY.
            </p>

            <p>
              Supplemental terms and conditions or documents that may be posted
              on the Services from time to time are hereby expressly
              incorporated herein by reference. We reserve the right, in our sole
              discretion, to make changes or modifications to these Legal Terms
              at any time and for any reason. We will alert you about any
              changes by updating the "Last updated" date of these Legal Terms,
              and you waive any right to receive specific notice of each such
              change.
            </p>

            <p>
              The Services are intended for users who are at least 18 years old.
              Persons under the age of 18 are not permitted to use or register
              for the Services.
            </p>

            <p>We recommend that you print a copy of these Legal Terms for your records.</p>
          </section>

          <section>
            <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
              Table of contents
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>OUR SERVICES</li>
              <li>INTELLECTUAL PROPERTY RIGHTS</li>
              <li>USER REPRESENTATIONS</li>
              <li>PROHIBITED ACTIVITIES</li>
              <li>USER GENERATED CONTRIBUTIONS</li>
              <li>CONTRIBUTION LICENSE</li>
              <li>SERVICES MANAGEMENT</li>
              <li>PRIVACY POLICY</li>
              <li>TERM AND TERMINATION</li>
              <li>MODIFICATIONS AND INTERRUPTIONS</li>
              <li>GOVERNING LAW</li>
              <li>DISPUTE RESOLUTION</li>
              <li>CORRECTIONS</li>
              <li>DISCLAIMER</li>
              <li>LIMITATIONS OF LIABILITY</li>
              <li>INDEMNIFICATION</li>
              <li>USER DATA</li>
              <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
              <li>MISCELLANEOUS</li>
              <li>CONTACT US</li>
            </ol>
          </section>

          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-[#082F57] text-[26px] font-medium mb-5">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;