import { motion } from "framer-motion";

const clients = [
  {
    name: "microsoft",
    light: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    dark: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
  name: "Shelter",
  light: "/images/Shelter.png",
  medium: true,
  dark: "/images/Shelter.png",
  },
  {
    name: "amazon",
    light: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    medium: true,
    dark: "/images/amazon-dark.png",
  },
  {
    name: "Eclosia",
    light: "/images/eclosia.jpg",
    dark: "/images/eclosia.jpg",
    medium: true,
  },
  {
    name: "Sanvics",
    light: "/images/sanvics-logo.png",
    dark: "/images/sanvics-logo.png",
  },
  {
    name: "KSG",
    light: "https://static.wixstatic.com/media/6e6166_ecdcac2b648f4cd4a662700039698e48~mv2.png/v1/fill/w_208,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/220250715_199165498885697_4946237034743179875_n.png",
    dark: "https://static.wixstatic.com/media/6e6166_ecdcac2b648f4cd4a662700039698e48~mv2.png/v1/fill/w_208,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/220250715_199165498885697_4946237034743179875_n.png",
    medium: true,
    lightClass: "brightness-0",
  },
 {     
  name:"linkedin",
  light:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  dark:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
 },
];

export default function TrustedClients() {
  return (
    <section className="py-4 md:py-8 lg:py-12 overflow-hidden bg-white dark:bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Trusted by Industry Leaders</h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => {
              const sizeClass = client.medium ? "h-24" : "h-12";

              return (
                <div key={index} className="min-w-[150px] flex justify-center items-center">
                  
                  {/* Light Logo */}
                  <img
                    src={client.light}
                    className={`object-contain block dark:hidden ${sizeClass} ${client.lightClass || ""}`}
                    alt={client.name}
                  />

                  {/* Dark Logo */}
                  <img
                    src={client.dark}
                    className={`object-contain hidden dark:block ${sizeClass}`}
                    alt={client.name}
                  />

                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}