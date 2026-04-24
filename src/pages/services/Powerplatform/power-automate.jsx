  import { motion } from "framer-motion";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { ChevronDown, Sparkles, Bot, Cloud, ShieldCheck, LayoutGrid } from "lucide-react";
  import Navbar from "./../../../components/Navbar";
  import Footer from "./../../../components/Footer";


  const categories = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutGrid,
      features: [
        {
          title: "Discover",
          description:
            "Optimize processes and uncover business automation opportunities with task and process mining.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-1.1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Automate",
          description:
            "Automate across nearly unlimited systems, desktop apps, and websites with AI-powered, digital, and robotic process automation.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-1.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Orchestrate",
          description:
            "Confidently scale automation across your organization with built-in security, governance, and 360-degree monitoring.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-1.3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Extend",
          description:
            "Accelerate digital transformation with automation-infused apps, websites, and agents in Microsoft Power Platform.",
          image:
            "/images/Power Automate/Extend.png",
        },
      ],
    },
    {
      id: "ai-features",
      label: "AI features",
      icon: Sparkles,
      features: [
        {
          title: "AI authoring",
          description:
            "Create, edit, and extend process automation faster using natural language with Copilot in Microsoft Power Automate.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-2.1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "AI insights",
          description:
            "Uncover optimization and automation opportunities faster with AI recommendations.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-2.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "AI processing",
          description:
            "Apply leading built-in AI models to intelligently automate document and image processing, prediction, and analysis.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-2.3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "AI generation",
          description:
            "Turn your raw data into engaging content responsibly with built-in GPT support.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-2.4?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
      ],
    },
    {
      id: "desktop-flows",
      label: "Desktop flows (RPA)",
      icon: Bot,
      features: [
        {
          title: "Desktop automation",
          description:
            "Use robotic process automation (RPA) to automate legacy systems with prebuilt or custom user-interface actions.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-3.1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Bot deployment with AI",
          description:
            "Use Copilot in Power Automate for desktop to accelerate development.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-3.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Attended and unattended RPA",
          description:
            "Run automation with human interaction or autonomously in the background.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-3.3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Hosted RPA",
          description:
            "Manage peaks and optimize resources with hosted infrastructure that automatically scales and dynamically balances loads.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-3.4?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
      ],
    },
    {
      id: "cloud-flows",
      label: "Cloud flows (DPA)",
      icon: Cloud,
      features: [
        {
          title: "Automation in the cloud",
          description:
            "Use digital process automation (DPA) to automate apps, data, and services running in the cloud or on-premises.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-4.1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Customized building",
          description:
            "Start from scratch, use a prebuilt template, or engage the agent to automate tasks and processes.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-4.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "API connectors",
          description:
            "Choose from more than 1,000 API connectors or create your own custom API connector.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-4.3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Better together",
          description:
            "Combine cloud flows with Microsoft 365, Dataverse, and Azure services for richer end-to-end workflows.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-4.4?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
      ],
    },
    {
      id: "orchestration",
      label: "Orchestration",
      icon: ShieldCheck,
      features: [
        {
          title: "Centralized governance",
          description:
            "Manage environments, data policies, and connectors from a single admin center with enterprise-grade controls.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-1.3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "360-degree monitoring",
          description:
            "Track every flow run, success rate, and bottleneck across your automation estate in real time.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-2.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Security & compliance",
          description:
            "Built-in DLP, role-based access, and compliance certifications to keep automation safe at scale.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-3.4?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
        {
          title: "Center of Excellence",
          description:
            "Adopt the CoE Starter Kit to accelerate maturity, reuse, and ROI of your automation program.",
          image:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-4.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
        },
      ],
    },
  ];

  const PowerAutomateFeatures = () => {
    const [activeCat, setActiveCat] = useState(categories[0].id);
    const [openFeature, setOpenFeature] = useState(categories[0].features[0].title);

    const current = categories.find((c) => c.id === activeCat) || categories[0];

    const handleCategoryChange = (id) => {
      setActiveCat(id);
      const cat = categories.find((c) => c.id === id) || categories[0];
      setOpenFeature(cat.features[0].title);
    };

    const activeFeature =
      current.features.find((f) => f.title === openFeature) ?? current.features[0];

    return (
      <div className="bg-gray-50 dark:bg-gray-900">
        <Navbar />

        <section className="relative flex items-center justify-center h-[380px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
            alt="Power Automate"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="relative z-10 px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold md:text-5xl"
            >
              Power Automate Solutions
            </motion.h1>
            <p className="mt-4 text-gray-200">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <span className="mx-2">➜</span>
              <span className="text-blue-400">Power Automate</span>
            </p>
          </div>
        </section>

        {/* SERVICE OVERVIEW */}
        
        <section className="py-20">
        
        <div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">
        
        <motion.div
        initial={{opacity:0,x:-40}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        >
        
        <h2 className="mb-6 md:text-left text-center text-4xl font-bold text-gray-800 dark:text-white">
        
        Power Automate
        
        </h2>
        
        <p className="md:text-left text-center mb-4 text-gray-600 dark:text-gray-300">
        
        Automate repetitive tasks, streamline workflows, and connect your business systems with ease. Our solutions help you eliminate manual effort, reduce errors, and improve operational efficiency across departments. From simple task automation to complex, end-to-end processes, we enable your organization to work smarter and faster.
        
        </p>
        
        <p className="md:text-left text-center text-gray-600 dark:text-gray-300">
        
        With intelligent automation and seamless integrations, you can gain real-time insights, enhance productivity, and focus on what truly matters—driving growth and innovation.
        
        </p>
        
        </motion.div>
        
        <motion.img
        initial={{opacity:0,x:40}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        src="/images/Power Automate/Power_Automate.webp"
        className="shadow-xl rounded-xl"
        />
        
        </div>
        
        </section>



        <section className="py-16 lg:py-14 bg-background  dark:bg-gray-800 dark:text-gray-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-heading font-semibold text-sm tracking-wide uppercase">
                Power Automate
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-2 dark:text-blue-600">
                Automate and optimize business processes
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-12">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const active = cat.id === activeCat;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full border dark:border-gray-700 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-primary text-primary-foreground border-primary shadow-md dark:shadow-white/20 scale-105 text-blue-600 dark:text-green-400 border-green-300"
                        : "bg-background text-foreground border-border hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div
              key={activeCat}
              className="grid lg:grid-cols-2 gap-10 items-start animate-fade-in"
            >
              <div className="space-y-3">
                {current.features.map((f) => {
                  const open = f.title === openFeature;

                  return (
                    <div
                      key={f.title}
                      className={`rounded-2xl border bg-card transition-all duration-300 overflow-hidden dark:border-slate-400/50  ${
                        open ? "border-primary shadow-lg hover:shadow-xl dark:shadow-gray-700/55 hover:border-primary hover:border-cyan-500 dark:hover:border-green-500" : " border-border hover:border-primary/90"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFeature(f.title)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={open}
                      >
                      <h3
                        className={`text-lg font-bold font-display transition-colors duration-300 ${
                          open
                            ? "text-blue-600 dark:text-green-400"
                            : "text-gray-800 dark:text-gray-300"
                        }`}
                      >
                          {f.title}
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                            open ? "rotate-180 text-primary " : "text-muted-foreground"
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                            {f.description}
                          </p>
                          <div className="lg:hidden px-5 pb-5">
                            <img
                              src={f.image}
                              alt={f.title}
                              loading="lazy"
                              className="rounded-lg w-full h-auto border border-border"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hidden lg:block sticky top-24">
                <div className="rounded-2xl border border-border bg-secondary/40 p-4 shadow-xl">
                  <img
                    key={activeFeature.image}
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    className="rounded-xl w-full h-auto animate-fade-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
              <section className="py-24  text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800">

<h2 className="mb-6 text-4xl font-bold dark:text-blue-600">
Start Your Automation Journey
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Automate tasks, connect systems, and optimize workflows to work smarter and grow faster.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Get Started 

</Link>

</section>
        <Footer />
      </div>
    );
  };

  export default PowerAutomateFeatures;
