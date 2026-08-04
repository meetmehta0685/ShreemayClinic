import { ArrowUpRightIcon, SparklesIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const bookingUrl = "https://booking.appointy.com/en-US/hite123/bookings/calendar";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar" role="region" aria-label="Clinic announcement">
      <div className="page-container announcement-inner">
        <Badge variant="outline" className="announcement-badge">
          <SparklesIcon data-icon="inline-start" />
          Doctor-led care
        </Badge>
        <p>
          Start with a clear consultation for your skin, hair, laser, or vitiligo concern.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "link", size: "sm" })}
        >
          Book your visit
          <ArrowUpRightIcon data-icon="inline-end" />
        </a>
      </div>
    </div>
  );
}
