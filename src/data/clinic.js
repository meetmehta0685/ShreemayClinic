export const clinicName = "Shreemay Skin Clinic";
export const doctorName = "Dr. Hiteshree Shah";
export const clinicAddress =
  "Shop No. 8, 1st Floor, Ananya Complex, Akshar Chowk, O.P. Road, Vadodara 390012";

// Portrait for the "Meet Dr. Hiteshree Shah" sections. It is currently the same photo as the
// homepage hero, cropped closer; replace it (with its width and height) when the clinic shares a new one.
export const doctorProfilePhoto = { src: "/images/dr-hiteshree-iadvl-optimized.jpg", width: 1000, height: 936 };

export const phoneHref = "tel:+917861951664";
export const phoneDisplay = "78619 51664";
const onlineBookingLive = process.env.NEXT_PUBLIC_ONLINE_BOOKING === "on";
export const bookingAction = onlineBookingLive
  ? { live: true, href: "/book", label: "Book an appointment" }
  : { live: false, href: phoneHref, label: "Call to book" };
export const whatsAppHref =
  "https://wa.me/917861951664?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Shreemay%20Skin%20Clinic";
const clinicMapsQuery = `${clinicName}, ${clinicAddress}`;
export const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicMapsQuery)}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinicMapsQuery)}&output=embed`;
export const instagramHref = "https://www.instagram.com/dr_hiteshreeshah_mddermat/";

export const clinicHours = [
  { days: "Monday to Saturday", hours: "11 AM to 2 PM · 5 PM to 8 PM" },
  { days: "Sunday", hours: "Closed" },
];
