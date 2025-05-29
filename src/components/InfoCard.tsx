// components/InfoCard.tsx
import { Card, CardContent } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => (
  <Card className="bg-gray-100 rounded-2xl shadow-none border-0 w-full min-h-[230px]">
    <CardContent className="p-10">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-6">{title}</h3>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default InfoCard;
