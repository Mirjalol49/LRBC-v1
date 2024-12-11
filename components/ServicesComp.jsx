import { Card } from "@/components/ui/card";

export default function ServicesCard() {
  return (
    <Card className="max-w-xl overflow-hidden bg-[#1B2A4A] rounded-[32px]">
      <div className="p-8 space-y-6">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FDB813] relative">
            <svg
              className="absolute inset-0"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 16V48M16 32H48M16 16L48 48M48 16L16 48"
                stroke="#1B2A4A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Renovation &
            </h2>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Remodeling
            </h2>
          </div>
        </div>
        <p className="text-xl text-white/90 leading-relaxed max-w-md">
          Transforming spaces with precision and creativity to enhance
          functionality and style.
        </p>
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Construction worker installing ceiling"
            className="h-[300px] w-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
}
