import ContactFormCard from "@/components/ContactFormCard";

const DemoSectionV2 = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactFormCard
          title="Book A Demo"
          description="We'll show you the platform and answer your questions"
          textColor="text-black"
        />
        <ContactFormCard
          title="Talk To Sales"
          description="For teams with complex workflows or custom needs"
          textColor="text-black"
        />
      </div>
    </section>
  );
};

export default DemoSectionV2;
