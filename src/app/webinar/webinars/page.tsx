import { WebinarCard, WebinarPageHeader } from "../components";

import { mockWebinars } from "../data/webinarData";

export default function AllWebinarsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <WebinarPageHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockWebinars.map((webinar) => (
            <WebinarCard
              key={webinar.id}
              webinar={webinar}
              featured={webinar.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
