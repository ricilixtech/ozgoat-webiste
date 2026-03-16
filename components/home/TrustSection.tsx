"use client";

import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    company: "",
    description: "Automotive rubber spare parts supplier for cars",
    rating: 5,
    review:
      "OZGOAT streamlined our inventory and order management processes. Our operations are now faster and far more efficient.",
  },
  {
    company: "",
    description: "EV charger sales and distribution company",
    rating: 4,
    review:
      "With OZGOAT automation and AI integrations, we improved customer inquiries handling and boosted our sales workflow.",
  },
  {
    company: "",
    description: "Digital transformation and CRM consultancy",
    rating: 5,
    review:
      "OZGOAT helped streamline our CRM and business processes efficiently.",
  },
];

const TrustSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbLeft, setThumbLeft] = useState(0);

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    const visibleWidth = el.clientWidth;
    const totalWidth = el.scrollWidth;
    const maxScroll = totalWidth - visibleWidth;
    const scrollLeft = el.scrollLeft;

    const widthRatio = visibleWidth / totalWidth;
    const calculatedThumbWidth = widthRatio * 100;

    const scrollRatio = scrollLeft / maxScroll;
    const maxThumbMove = 100 - calculatedThumbWidth;
    const calculatedThumbLeft = scrollRatio * maxThumbMove;

    setThumbWidth(calculatedThumbWidth);
    setThumbLeft(calculatedThumbLeft);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <div
            className="font-heading t py-2 justify-between item-center text-center text-sm text-blue-400 font-medium mb-4"
          ><a className="rounded-2xl px-3 py-2 bg-blue-950">
              WHAT CLIENTS SAY</a>
          </div>
          <h2 className="font-heading font-bold tracking-tight text-4xl md:text-5xl text-white mb-4">
            Glowing Reviews
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Big or small, every project receives the same level of experience, structure and commitment and our reviews reflect that..
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            flex gap-8
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            snap-x snap-mandatory
            pb-6
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                snap-start
                min-w-[300px]
                sm:min-w-[360px]
                lg:min-w-[420px]
                xl:min-w-[480px]

                bg-gray-800
                p-8
                rounded-2xl
                border border-gray-900

                shadow-[8px_8px_30px_rgba(37,99,235,0.25)]
                hover:shadow-[14px_14px_50px_rgba(37,99,235,0.45)]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Company */}
              <h3 className="font-heading text-blue-400 text-xl font-semibold mb-2">
                {item.company}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 mb-4">
                {item.description}
              </p>

              {/* Review */}
              <p className="text-neutral-300 leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["RELIABLE", "AFFORDABLE", "SUSTAINABLE"].map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gray-900 text-gray-400 font-bold rounded-lg text-sm border border-gray-800"
            >
              {item}
            </div>
          ))}
        </div>
        {/* Custom Scroll Indicator */}
        <div className="mt-10 w-full max-w-xl mx-auto">
          <div className="relative h-2 bg-blue-900/40 rounded-full overflow-hidden">
            <div
              className="absolute top-0 h-full bg-blue-500 rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${thumbWidth}%`,
                left: `${thumbLeft}%`,
              }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;