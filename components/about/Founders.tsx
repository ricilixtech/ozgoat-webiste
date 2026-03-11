import Image from "next/image";
import { Linkedin } from "lucide-react";

const Founders = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="font-heading t py-2 justify-between item-center text-center text-sm text-blue-600 font-medium mb-4"
        ><a className="rounded-2xl px-3 py-1 bg-blue-100">
            THE TEAM</a>
        </div>
        <div className="text-center flex flex-col items-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight tracking-tight text-black mb-4">
            Meet the Experts Behind OZGOAT
          </h2>

          <p className="text-lg md:w-1/3 text-neutral-600 mx-auto">
            A cross-functional team of strategists, engineers, designers and delivery managers working as one.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {/* Imran Shaukat */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col min-h-[420px]">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/pictures/HomePage/imran.png"
                alt="Imran Shaukat"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Imran Shaukat
            </h3>

            <p className="text-blue-600 mb-4 font-medium">
              Founder & Tech Strategist
            </p>

            <p className="text-neutral-600">
            
                <span className="font-bold"> 20+ years</span> helping businesses scale by
                leveraging the right technology the right way. With a belief in Strategy First, Build Second.
            </p>

            <div className="mt-auto pt-4">
              <a
                href="https://www.linkedin.com/company/ozgoat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-[12px] 2xl:text-[14px] hover:bg-[#004182] text-white font-bold px-3 py-2 rounded-md transition"
              >
                <Linkedin size={18} className="bg-white text-[#0A66C2] rounded-sm p-[2px]" />
                View LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Abdul Hannan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col min-h-[420px]">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/pictures/hannan.png"
                alt="Abdul Hannan Asif"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Abdul Hannan Asif
            </h3>

            <p className="text-blue-600 mb-4 font-medium">
              Team Lead & Solutions Architect
            </p>

            <p className="text-neutral-600">
              Leads strategic automation initiatives and oversees the development of scalable AI-powered solutions.
            </p>

            <div className="mt-auto pt-4">
              <a
                href="https://www.linkedin.com/company/ozgoat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-[12px] 2xl:text-[14px] hover:bg-[#004182] text-white font-bold px-3 py-2 rounded-md transition"
              >
                <Linkedin size={18} className="bg-white text-[#0A66C2] rounded-sm p-[2px]" />
                View LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Waleed */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col min-h-[420px]">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/pictures/waleed.png"
                alt="Waleed Azam"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Waleed Azam
            </h3>

            <p className="text-blue-600 mb-4 font-medium">
              Senior Software Developer
            </p>

            <p className="text-neutral-600">
              Specializes in AI integrations, backend systems, and building robust automation infrastructure.
            </p>

            <div className="mt-auto pt-4">
              <a
                href="https://www.linkedin.com/company/ozgoat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-[12px] 2xl:text-[14px] hover:bg-[#004182] text-white font-bold px-3 py-2 rounded-md transition"
              >
                <Linkedin size={18} className="bg-white text-[#0A66C2] rounded-sm p-[2px]" />
                View LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Sharjeel */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col min-h-[420px]">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/pictures/sharjeel.png"
                alt="Sharjeel"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-heading text-xl text-neutral-900 mb-2">
              Sharjeel
            </h3>

            <p className="text-blue-600 mb-4 font-medium">
              Marketing & SEO Strategist
            </p>

            <p className="text-neutral-600">
              Drives brand growth through digital marketing, search engine optimization, and data-driven acquisition strategies.
            </p>

            <div className="mt-auto pt-4">
              <a
                href="https://www.linkedin.com/company/ozgoat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-[12px] 2xl:text-[14px] hover:bg-[#004182] text-white font-bold px-3 py-2 rounded-md transition"
              >
                <Linkedin size={18} className="bg-white text-[#0A66C2] rounded-sm p-[2px]" />
                View LinkedIn Profile
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founders;
