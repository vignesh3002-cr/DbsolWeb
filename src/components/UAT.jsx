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
    {
        image:"/images/ERP.png"
    }
  ];

  return (
    <section className="py-16 px-5 text-black dark:text-white text-center bg-gradient-to-r bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-5">
          UAT (User Acceptance Testing) Guide
        </h2>
        <p className="text-lg opacity-90 mb-14 text-gray-900 dark:text-gray-100">
          5 Reasons UAT Fails and How We Prevent It
        </p>

        {/* Grid */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-auto">

          {data.map((item, index) => (
            <div
              key={index}
              className={`
                card-animate
               bg-gray-200 dark:bg-white/10 backdrop-blur-md p-5 rounded-xl text-center
                transform transition-all duration-300
                opacity-0 translate-y-2
                hover:-translate-y-2 hover:scale-103 hover:bg-gray-400

                ${index === 3 ? "lg:col-start-1 lg:justify-self-start" : ""}
                ${index === 4 ? "lg:col-start-3 lg:justify-self-start" : ""}
              `}
            >
              <h3 className="text-xl mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm mb-1 text-gray-800 dark:text-gray-300">
                <strong>Why:</strong> {item.why}
              </p>
              <p className="text-sm  text-gray-800 dark:text-gray-300">
                <strong>Solution:</strong> {item.solution}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}