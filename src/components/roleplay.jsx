import React from "react";
import { motion } from "framer-motion";
import { Heading1 } from "lucide-react";

// ✅ Typewriter Component
const TypewriterText = ({ text, speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete && onComplete();
        }, 800); // pause after message
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <>{displayedText}</>;
};

const RoleplayScenario = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [hasStarted, setHasStarted] = React.useState(false);

  const conversations = [
    {
        type: "expert",
      text: `Greetings! How may I help you?`,
      image: "/images/explainer.png"
    },
    {  
    type: "client",
      text: `We’ve invested a lot in this ERP system. The features look great, but honestly… our team is still using Excel. Adoption is low.`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `That’s actually very common. The real challenge isn’t the system—it’s people...`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `What do you mean?`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `Even the best ERP systems fail if employees don’t use them properly. This is what we call the Adoption Gap—the gap between implementing a system and actually using it effectively`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `So how do we fix that?`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `We focus on people, not just technology:

              We simplify workflows so employees don’t feel overwhelmed,

              We provide role-based training (not generic sessions),

              We identify ‘power users’ in your team to drive adoption internally,
              
              And most importantly, we align the system with how your team actually works.`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `And how does this help us at the leadership level?`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `When adoption improves:

You get accurate, real-time data
Decision-making becomes faster and more reliable
ROI on your ERP investment actually shows up

That’s what wins over the C-suite—not just implementation, but measurable business impact.`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `Alright… that makes sense. But from my perspective, what do I actually gain?`,
      image: "/images/clientlast.png"
    },
    {
      type: "expert",
      text: `You get clarity without chasing people.

You’ll have a real-time executive view showing where performance is dipping, which locations need attention, and what actions are being taken—without sending a single follow-up email.

And after go-live, we stay with you through our Hyper-care phase—ensuring your team is supported, the system is optimized, and everything runs smoothly.

We don’t just implement. We make sure it works.`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `Alright… Thanks for the Explaination`,
      image: "/images/clientlast.png"
    },
    {
      type: "expert",
      text: `Welcome`,
      image: "/images/explainer.png"
    }
  ];

  return (
    <motion.section
      className="bg-gray-50 dark:bg-gray-900 py-16 md:p y-20 px-4"
      onViewportEnter={() => {
        if (!hasStarted) {
          setHasStarted(true);
          setActiveIndex(0);
        }
      }}
      viewport={{ amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-20 ">
            Turning Skepticism into Adoption
          </h2>
          <p className=""> 
            A realworld Scenario of Client and Explainer</p>
        </div>

        {/* Conversation */}
        <div className="space-y-8">

          {activeIndex >= 0 ? (
            conversations
              .slice(0, activeIndex + 1)
              .map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start gap-3 ${
                    item.type === "client" ? "justify-end" : "justify-start"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >

                  {/* Expert Image */}
                  {item.type === "expert" && (
                    <img src={item.image} className="w-12 md:w-20 lg:w-36" />
                  )}

                  {/* Chat Bubble */}
                  <motion.p
                    className={`max-w-[90%] md:max-w-xl p-5 md:p-6 rounded-xl shadow whitespace-pre-line text-lg md:text-xl ${
                      item.type === "client"
                        ? "bg-orange-100 dark:bg-orange-300 text-gray-900 dark:text-gray-900"
                        : "bg-green-50 dark:bg-green-200 text-gray-900 dark:text-gray-900"
                    }`}
                  >
                    {index === activeIndex ? (
                      <TypewriterText
                        text={item.text}
                        speed={30} // 🔥 change speed here
                        onComplete={() => {
                          if (activeIndex < conversations.length - 1) {
                            setActiveIndex((prev) => prev + 1);
                          }
                        }}
                      />
                    ) : (
                      item.text
                    )}
                  </motion.p>

                  {/* Client Image */}
                  {item.type === "client" && (
                    <img src={item.image} className="w-12 md:w-20 lg:w-28 lg:w-36" />
                  )}

                </motion.div>
              ))
          ) : null}

        </div>

      </div>
    </motion.section>
  );
};

export default RoleplayScenario;