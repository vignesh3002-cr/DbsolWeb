import { motion } from "framer-motion";

const clients = [
  {
    name: "microsoft",
    light: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    dark: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "amazon",
    light: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    medium: true,
    dark: "/images/amazon-dark.png",
    medium: true,
  },
  {
    name: "google",
    light: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    dark: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "netflix",
    light: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    dark: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "ibm",
    light: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    dark: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "apple",
    light: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    dark: "https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg",
  },
];

export default function TrustedClients() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">Trusted by Industry Leaders</h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => {
              const sizeClass = client.medium ? "h-20" : "h-8";

              return (
                <div key={index} className="min-w-[150px] flex justify-center items-center">
                  
                  {/* Light Logo */}
                  <img
                    src={client.light}
                    className={`object-contain block dark:hidden ${sizeClass}`}
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