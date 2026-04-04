import React from "react";

const RoleplayScenario = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto bg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Turning Skepticism into Adoption
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A real conversation focused on workflow, not just dashboards.
          </p>
        </div>

        {/* Conversation */}
        <div className="space-y-10">

          {/* CLIENT QUESTION */}
          <div className="flex items-start justify-end gap-4">
            <div className="max-w-xl bg-green-50 dark:bg-gray-700 border-gray-50 shadow-sm rounded-xl p-6 text-gray-700 dark:text-gray-100">
              <p>
                Look, I’ve seen the demo. The dashboards are pretty, but my General
                Managers are already underwater. If I give them another login
                and ask them to spend an hour a day optimizing, they’ll revolt.
                How is this not just more noise?
              </p>
            </div>

            {/* Client Image */}
            <img
              src="/images/client.png"
              alt="Client asking question"
              className="w-24 h-auto flex-shrink-0"
            />
          </div>

          {/* EXPLAINER ANSWER */}
          <div className="flex items-start justify-start gap-4">
            {/* Explainer Image */}
            <img
              src="/images/explainer.png"
              alt="Expert explaining"
              className="w-24 h-auto flex-shrink-0"
            />

            <div className="max-w-xl bg-blue-50 border dark:bg-gray-600 border-gray-100 dark:border-gray-600 shadow-sm rounded-xl p-6 text-gray-800 dark:text-gray-200">
              <p>
                I’m glad you said that. If this were just another dashboard,
                I’d tell you not to buy it.
                <br /><br />
                We’re not giving your GMs a new job. We’re automating the parts
                of their job they already hate doing manually.
              </p>
            </div>
          </div>

          {/* CLIENT QUESTION */}
          <div className="flex items-start justify-end gap-4">
            <div className="max-w-xl bg-green-50 dark:bg-gray-700 border-gray-50 shadow-sm rounded-xl p-6 text-gray-700 dark:text-gray-100">
              <p>
                Everyone promises that. Then my team spends months training
                and goes straight back to Excel because they trust it more.
                How do you stop the Shadow Excel problem?
              </p>
            </div>

            <img
              src="/images/client.png"
              alt="Client questioning"
              className="w-24 h-auto flex-shrink-0"
            />
          </div>

          {/* EXPLAINER ANSWER */}
          <div className="flex items-start justify-start gap-4">
            <img
              src="/images/explainer.png"
              alt="Expert explaining"
              className="w-24 h-auto flex-shrink-0"
            />

            <div className="max-w-xl bg-blue-50 border dark:bg-gray-600 border-gray-100 dark:border-gray-600 shadow-sm rounded-xl p-6 text-gray-800 dark:text-gray-200">
              <p>
                By embracing that Excel logic instead of fighting it.
                <br /><br />
                We start with the Shadow Process — the manual checks your team
                does every morning — and automate just those first.
              </p>
            </div>
          </div>

          {/* CLIENT QUESTION */}
          <div className="flex items-start justify-end gap-4">
            <div className="max-w-xl bg-green-50 dark:bg-gray-700 border-gray-50 shadow-sm rounded-xl p-6 text-gray-700 dark:text-gray-100">
              <p>
                And the learning curve? I can’t afford a productivity dip.
              </p>
            </div>

            <img
              src="/images/client.png"
              alt="Client concern"
              className="w-24 h-auto flex-shrink-0"
            />
          </div>

          {/* EXPLAINER ANSWER */}
          <div className="flex items-start justify-start gap-4">
            <img
              src="/images/explainer.png"
              alt="Expert explaining"
              className="w-24 h-auto flex-shrink-0"
            />

            <div className="max-w-xl bg-blue-50 border dark:bg-gray-600 border-gray-100 dark:border-gray-600 shadow-sm rounded-xl p-6 text-gray-800 dark:text-gray-200">
              <p>
                That’s where the Low‑Floor strategy comes in.
                <br /><br />
                On Day 1, your GMs don’t log in at all. They get a simple
                Morning Pulse email telling them the three things that matter.
                <br /><br />
                We win when the system feels like a digital assistant —
                not a digital warden.
              </p>
            </div>
          </div>

          {/* CLIENT QUESTION */}
          <div className="flex items-start justify-end gap-4">
            <div className="max-w-xl bg-green-50 dark:bg-gray-700 border-gray-50 shadow-sm rounded-xl p-6 text-gray-700 dark:text-gray-100">
              <p>And what do I get out of it?</p>
            </div>

            <img
              src="/images/client.png"
              alt="Client final question"
              className="w-24 h-auto flex-shrink-0"
            />
          </div>

          {/* EXPLAINER ANSWER */}
          <div className="flex items-start justify-start gap-4">
            <img
              src="/images/explainer.png"
              alt="Expert explaining"
              className="w-24 h-auto flex-shrink-0"
            />

            <div className="max-w-xl bg-blue-50 border dark:bg-gray-600 border-gray-100 dark:border-gray-600 shadow-sm rounded-xl p-6 text-gray-800 dark:text-gray-200">
              <p>
                The Executive View.
                <br /><br />
                A real‑time heat map showing exactly where performance is dipping
                without chasing updates across departments.
                <br /><br />
                You’re buying back time and clarity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoleplayScenario;