export const clinicName = "Shreemay Skin Clinic";
export const doctorName = "Dr. Hiteshree Shah";
export const clinicAddress =
  "Shop No. 8, 1st Floor, Ananya Complex, Akshar Chowk, O.P. Road, Vadodara 390012";

export const bookingUrl = "/book";
export const phoneHref = "tel:+917861951664";
export const phoneDisplay = "78619 51664";
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
