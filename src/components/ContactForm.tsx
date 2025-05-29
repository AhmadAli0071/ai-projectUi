
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
<section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto">
    {/* Centered Heading */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-2">Contact</h2>
      <p className="text-lg text-gray-600">We’d love to hear from you!</p>
    </div>

    {/* Form Card */}
    <div className="bg-white rounded-3xl shadow-lg p-8 text-gray-900 max-w-2xl mx-auto">
      <form className="space-y-6">
        {/* First Row: First Name + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-3 rounded-lg bg-gray-100 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-3 rounded-lg bg-gray-100 w-full"
          />
        </div>

        {/* Second Row: Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-gray-100 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-lg bg-gray-100 w-full"
          />
        </div>

        {/* Message Field */}
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-gray-100"
        />

        {/* Submit Button */}
        <Button className="w-full bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 border-none">
          Submit
        </Button>
      </form>
    </div>
  </div>
</section>




  );
};

export default ContactForm;
