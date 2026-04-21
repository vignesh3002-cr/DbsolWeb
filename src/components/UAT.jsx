import { useEffect } from "react";

export default function UATSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-animate");

    const handleScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          card.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      title: "Unclear Requirements",
      why: "Lack of clarity leads to confusion in testing.",
      solution: "Define clear acceptance criteria and align stakeholders.",
    },
    {
      title: "Lack of User Involvement",
      why: "End users are not engaged early.",
      solution: "Involve users from the start for continuous feedback.",
    },
    {
      title: "Inadequate Test Planning",
      why: "Missing structured test cases.",
      solution: "Cover all workflows with proper test plans.",
    },
    {
      title: "Poor Communication",
      why: "Gaps between teams create issues.",
      solution: "Maintain clear and consistent communication.",
    },
    {
      title: "Insufficient Training",
      why: "Users are not familiar with the system.",
      solution: "Provide proper training and guidance.",
    },
  ];

  return (
    <section className="py-16 px-5 text-black dark:text-white text-center bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-5">
          UAT (User Acceptance Testing) Guide
        </h2>

        <p className="text-lg opacity-90 mb-14 text-gray-900 dark:text-gray-100">
          5 Reasons UAT Fails and How We Prevent It
        </p>

        {/* GRID */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 cards */}
          {data.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="
                card-animate
                bg-gray-200 dark:bg-white/10 p-5 rounded-xl
                transform transition-all duration-300
                opacity-0 translate-y-2
                hover:-translate-y-2 hover:scale-103 hover:bg-gray-400
              "
            >
              <h3 className="text-xl mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm mb-1">
                <strong>Why:</strong> {item.why}
              </p>
              <p className="text-sm">
                <strong>Solution:</strong> {item.solution}
              </p>
            </div>
          ))}

          {/* IMAGE — middle on desktop, last on mobile */}
          <div
            className="
              flex justify-center items-center
              order-6 lg:order-5
              lg:col-start-2
            "
          >
            <img
              src="/images/ERP3.png"
              alt="ERP Illustration"
              className="max-w-full rounded-lg"
            />
          </div>

          {/* Last card */}
          <div
            className="
              card-animate
              bg-gray-200 dark:bg-white/10 p-5 rounded-xl
              transform transition-all duration-300
              opacity-0 translate-y-2
              hover:-translate-y-2 hover:scale-103 hover:bg-gray-400
              order-5 lg:order-6
            "
          >
            <h3 className="text-xl mb-2 font-semibold">
              {data[4].title}
            </h3>
            <p className="text-sm mb-1">
              <strong>Why:</strong> {data[4].why}
            </p>
            <p className="text-sm">
              <strong>Solution:</strong> {data[4].solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}