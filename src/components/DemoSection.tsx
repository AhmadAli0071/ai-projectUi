import ContactFormCard from "./ContactFormCard";
const DemoSection = () => {
  return (
   <section className="bg-gradient-to-r from-[#2a7eb1] to-[#0cc1c7] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <ContactFormCard
          title="Book A Demo"
          description="We'll show you the platform and answer your questions"
          textColor="text-white"
        />
        <ContactFormCard
          title="Talk To Sales"
          description="For teams with complex workflows or custom needs"
          textColor="text-white"
        />

        </div>
      </section>
  );
};

export default DemoSection;
