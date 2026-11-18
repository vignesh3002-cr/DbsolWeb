const existingApproach = [
  "Get Started",
  "Get in Touch",
  "Generic Learn With Us menu",
  "Long auto-scrolling testimonials",
  "Generic contact form",
  "Generic service page layout",
];

const recommendedReplacement = [
  "Book a Free D365 Assessment",
  "Talk to a Dynamics Expert",
  "Learn with us",
  "Three to four static testimonials",
  "Business enquiry form with relevant fields",
  "Industry-specific page content and visuals",
];

const leadFormFields = [
  "Full Name",
  "Work Email",
  "Company Name",
  "Phone Number (optional)",
  "What business challenge are you looking to solve?",
];

const ctaPlacement = [
  "Hero section.",
  "After the service explanation.",
  "After the case study.",
  "Bottom of the page.",
];

export default function CompanyRecommendations() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-6 text-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[2.25rem] font-black leading-[0.95] tracking-[-0.06em] text-[#111111] md:text-[3.4rem] lg:text-[4rem]">
            UI/UX and conversion optimisation
          </h2>
          <div className="text-right text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#111111] md:text-[0.82rem]">
            CRO &amp; EXPERIENCE
          </div>
        </div>

        <p className="max-w-[1150px] text-[1.05rem] font-medium leading-relaxed text-[#2a2a2a] md:text-[1.35rem]">
          Existing issue: The audit identifies opportunities to improve CTA clarity, trust placement,
          mobile usability and lead capture.
        </p>

        <h3 className="mb-5 mt-5 text-[1.9rem] font-black tracking-[-0.04em] text-[#111111] md:text-[2.5rem]">
          Recommended CTA &amp; Layout Changes
        </h3>

        <div className="grid gap-7 lg:grid-cols-[1.45fr_1fr]">
          <div className="space-y-0">
            <div className="grid grid-cols-2 border border-[#111111] bg-[#111111] text-[1.02rem] font-black text-white md:text-[1.35rem]">
              <div className="border-r border-[#111111] px-5 py-4">Existing approach</div>
              <div className="px-5 py-4">Recommended replacement</div>
            </div>

            <div className="border border-t-0 border-[#d7d7d7] bg-[#f7f7f7]">
              {existingApproach.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-2 border-b border-[#d7d7d7] text-[1.05rem] md:text-[1.35rem]"
                >
                  <div className="px-4 py-4 font-normal text-[#1f1f1f] md:px-5 md:py-5">
                    {item}
                  </div>
                  <div className="border-l border-[#d7d7d7] bg-[#f1f1f1] px-4 py-4 font-black text-[#111111] md:px-5 md:py-5">
                    {recommendedReplacement[index]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="border border-[#d7d7d7] bg-[#f4f4f4]">
              <div className="border-b border-[#111111] bg-[#f0f0f0] px-5 py-4 text-[1.05rem] font-black text-[#111111] md:text-[1.35rem]">
                Recommended lead form fields:
              </div>
              <ol className="list-decimal space-y-2 px-8 py-5 text-[1.12rem] font-normal text-[#1d1d1d] md:text-[1.33rem]">
                {leadFormFields.map((field) => (
                  <li key={field} className="pl-1 leading-relaxed">
                    {field}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-[#d7d7d7] bg-[#f4f4f4]">
              <div className="flex items-start gap-4 px-5 py-5">
                <div className="h-[110px] w-[4px] bg-[#111111]" aria-hidden="true" />
                <div className="flex-1">
                  <div className="mb-3 text-[1.08rem] font-black text-[#111111] md:text-[1.35rem]">
                    CTA placement:
                  </div>
                  <ul className="list-disc space-y-2 pl-6 text-[1.08rem] font-normal text-[#1d1d1d] md:text-[1.3rem]">
                    {ctaPlacement.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#111111] px-6 py-5 text-white">
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="text-[1.12rem] font-black tracking-[-0.03em] md:text-[1.5rem]">
              Design and development requirements:
            </div>
            <ul className="list-disc space-y-1 pl-6 text-[1.06rem] font-normal text-white/90 md:text-[1.18rem]">
              <li>Ensure buttons are easy to identify and tap on mobile.</li>
              <li>Ensure forms are responsive and easy to complete.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
