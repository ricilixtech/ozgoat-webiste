"use client";

import Image from "next/image";

import Link from "next/link";

const row1Technologies = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier" },
    { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot" },
    { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
    { name: "Make", logo: "https://cdn.simpleicons.org/make" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },
    { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable" },
];

const row2Technologies = [
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    {
        name: "Power BI",
        logo: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/microsoft-power-bi/icon.svg",
    },
    { name: "Xero", logo: "https://cdn.simpleicons.org/xero" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const TechRow = ({
    items,
    reverse = false,
}: {
    items: { name: string; logo: string }[];
    reverse?: boolean;
}) => {
    return (
        <div className="relative overflow-hidden group">
            <div
                className={`
            flex w-max gap-6 md:gap-10
            ${reverse ? "animate-scroll-reverse" : "animate-scroll"}
            group-hover:[animation-play-state:paused]
          `}
            >
                {[...items, ...items].map((tech, index) => (
                    <div
                        key={index}
                        className="
flex items-center gap-2 md:gap-3
bg-gray-900 backdrop-blur-md shadow-md
rounded-xl md:rounded-2xl
px-3 md:px-6
py-2 md:py-3
min-w-[60px] md:min-w-[120px]
border border-gray-700
hover:shadow-purple-200 hover:shadow-lg
transition-all duration-300
"       >
                        <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={28}
                            height={28}
                            className="object-contain w-8 h-8"
                            unoptimized
                        />

                        <p className="text-sm md:text-base font-semibold text-white whitespace-nowrap">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Technologies = () => {
    return (
      <section className="py-20 bg-black overflow-hidden">
        <div className="flex justify-center mb-4">
  <div className="font-heading tracking-tight px-3 py-2 leading-tight rounded-2xl bg-blue-950 text-sm text-blue-400 text-center">
    OUR STACK
  </div>
</div>
        <div className="px-6">
  
          {/* Heading */}
          <div className="flex flex-col items-center justify-center text-center pb-15 px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                45+ Team of Experts Skilled in{" "}
                <span className="text-blue-500">50+ Cutting-Edge</span> Technologies
              </h2>
              <p className="text-neutral-400 text-sm md:text-base">
                Design. Develop. Maintain. Scale. Your full-stack development partner for every technology need.
              </p>
            </div>
          </div>
  
          {/* Desktop → 2 Rows */}
          <div className="hidden md:block space-y-12">
            <TechRow items={row1Technologies} />
            <TechRow items={row2Technologies} reverse />
          </div>
  
          {/* Mobile → 2 Rows */}
          <div className="md:hidden space-y-2">
            <TechRow items={row1Technologies} />
            <TechRow items={row2Technologies} reverse />
          </div>
  
          {/* ===== Get a Quote Button ===== */}
          <div className="flex justify-center mt-12">
            <Link href="/contact">
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition duration-300">
                Book An Discovery Call →
              </button>
            </Link>
          </div>
  
          {/* Bottom Statement */}
          <div className="mt-10 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                We leverage the <span className="font-semibold text-blue-600">latest programming languages</span>,
                powerful <span className="font-semibold text-blue-600">AI frameworks</span>,
                advanced <span className="font-semibold text-blue-600">automation platforms</span>,
                and secure <span className="font-semibold text-blue-600">cloud infrastructure</span>
                to design <span className="font-bold text-blue-600">intelligent, scalable systems </span>
                 that solve real business problems and accelerate sustainable growth.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  };export default Technologies;
