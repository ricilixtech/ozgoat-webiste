const ContactHero = () => {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
            className="font-heading t py-2 justify-between item-center text-center text-sm text-blue-400 font-medium mb-4"
          ><a className="rounded-2xl px-3 py-2 bg-blue-950">
              LET,S START</a>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6">
            Let's Build Something Great Together
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Ready to transform your business operations? Get in touch and let's discuss 
            how we can help you achieve your goals.
          </p>
        </div>
      </section>
    );
  };
  
  export default ContactHero;