import React from "react";
import { motion } from "framer-motion";

const RoleplayScenario = () => {

  const conversations = [
    {
      type: "client",
      text: `Look, I’ve seen the demo. The dashboards are impressive, no doubt. But my General Managers are already overwhelmed. If I ask them to log into another system and spend time analyzing data every day, they’ll push back hard. How is this not just adding more noise to their workflow?`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `I’m really glad you brought that up. Honestly, if this were just another dashboard, I’d tell you not to invest in it.

What we’re doing is very different. We’re not adding work—we’re removing the parts of the job your GMs already dislike doing manually.`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `That’s what everyone says. But in reality, my team spends weeks learning a system, and then they go right back to Excel because that’s what they trust. How do you prevent that “Shadow Excel” problem?`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `We don’t fight that behavior—we use it.

Instead of forcing a new way of working, we start with the exact manual checks your team already does every morning. We call it the “Shadow Process.” Then we automate just those steps first.`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `Alright, but what about the learning curve? I can’t afford a drop in productivity during transition.`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `Absolutely—and that’s where our “Low-Floor” approach comes in.

On Day 1, your GMs don’t even need to log into the system. They receive a simple “Morning Pulse” email highlighting the 2–3 things that actually need their attention.

No dashboards. No digging. Just clarity.`,
      image: "/images/explainer.png"
    },
    {
      type: "client",
      text: `So you’re saying adoption happens gradually, not all at once?`,
      image: "/images/client.png"
    },
    {
      type: "expert",
      text: `Exactly. We design for adoption, not enforcement.

If a system feels like a burden, people avoid it. If it feels like a helpful assistant, they rely on it.`,
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
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Turning Skepticism into Adoption
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            A real conversation focused on workflow, not just dashboards.
          </p>
        </div>

        {/* Conversation */}
        <div className="space-y-10">
          {conversations.map((item, index) => (

            <motion.div
              key={index}
              className={`flex items-start gap-3 md:gap-4 ${
                item.type === "client" ? "justify-end" : "justify-start"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.1
              }}
            >

              {/* Expert Image (LEFT) */}
              {item.type === "expert" && (
                <motion.img
                  src={item.image}
                  className="w-12 md:w-20 lg:w-24 h-auto flex-shrink-0"
                  initial={{ opacity: 0, x: item.type === "client" ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              )}

              {/* Chat Bubble */}
              <motion.div
                className={`max-w-[85%] md:max-w-xl p-4 md:p-6 rounded-xl shadow-sm ${
                  item.type === "client"
                    ? "bg-red-100 dark:bg-red-800 text-gray-800 dark:text-gray-100 border dark:border-gray-400"
                    : "bg-green-50 dark:bg-green-700 text-gray-800 dark:text-gray-100 border dark:border-gray-400"
                }`}
              >
                <p className="whitespace-pre-line text-sm md:text-base">
                  {item.text}
                </p>
              </motion.div>

              {/* Client Image (RIGHT) */}
              {item.type === "client" && (
                <motion.img
                  src={item.image}
                  className="w-12 md:w-20 lg:w-24 h-auto flex-shrink-0"
                  initial={{ opacity: 0, x: item.type === "client" ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoleplayScenario;