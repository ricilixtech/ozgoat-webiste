import Image from 'next/image';

const VisionPhilosophy = () => {
  return (
    <section className="py-16 md:py-20 bg-white max-h-[800px] overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className='xl:px-4'>
          <div
          className="font-heading t py-2 text-sm text-blue-600 font-medium mb-4"
        ><a className="font-body rounded-2xl px-3 py-1 bg-blue-100">
            OUR STORY</a>
        </div>
            <h2 className="font-heading font-bold text-3xl xl:text-4xl text-neutral-900 mb-6"><p>Built by Builders,</p>
              for Builders</h2>
            <p className="text-neutral-600 mb-4 xl:w-2/3">


              Founded in 2022 in Melbourne, OZGOAT started with a simple belief: businesses deserve technology that actually works. Not just code that ships, but solutions that solve real problems and drive measurable growth.
            </p>
            <p className="text-neutral-600 my-4">
              Our founder Imran Shaukat brings 20+ years of technology strategy experience from telecoms, fintech, and enterprise sectors across four continents. That breadth of experience is baked into every project we take on.
            </p>
            <p className='text-neutral-600'>Today OZGOAT operates with a team of 45+ specialists across Melbourne, Lahore, Dubai and London — giving clients round-the-clock coverage and deep cultural context in every market we serve.</p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team Collaboration"
              fill
              className="rounded-large shadow-custom object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPhilosophy;