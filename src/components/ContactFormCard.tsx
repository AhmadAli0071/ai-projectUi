import { Button } from "@/components/ui/button";

interface ContactFormCardProps {
  title: string;
  description: string;
  textColor: string; // New optional prop for text color
}

const ContactFormCard = ({
  title,
  description,
  textColor, // Default to black if not provided
}: ContactFormCardProps) => {
  console.log("This is the text color: ", textColor);
  console.log("This is the text title: ", title);
  return (
    <div>
      <div className={`text-center mb-6`}>
        <h2 className={`text-4xl font-bold mb-2 ${textColor}`}>{title}</h2>
        <p className={`text-2xl text-gray-400 ${textColor}`}>{description}</p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 text-gray-900">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="px-4 py-3 rounded-lg bg-gray-100 w-full" />
            <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-lg bg-gray-100 w-full" />
            <input type="text" placeholder="Company Name" className="px-4 py-3 rounded-lg bg-gray-100 w-full" />
            <input type="text" placeholder="Job Title" className="px-4 py-3 rounded-lg bg-gray-100 w-full" />
          </div>
          <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg bg-gray-100" />
          <select className="w-full px-4 py-3 rounded-lg bg-gray-100">
            <option>Company Size</option>
            <option>1-10 employees</option>
            <option>11-50 employees</option>
            <option>51-200 employees</option>
            <option>200+ employees</option>
          </select>
          <input type="text" placeholder="Company Type" className="w-full px-4 py-3 rounded-lg bg-gray-100" />
          <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-100" />
          <Button className="w-full bg-[linear-gradient(to_right,#2a7eb1,#0cc1c7)] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 border-none">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormCard;
