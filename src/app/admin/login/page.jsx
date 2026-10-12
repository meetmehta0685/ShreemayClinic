import Link from "next/link";
import { redirect } from "next/navigation";

import AdminLoginForm from "@/components/admin-login-form";
import { getSignedInUser, isNeonAuthConfigured } from "@/lib/neon/auth-server";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Clinic sign in | Shreemay Skin Clinic",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (isNeonAuthConfigured() && await getSignedInUser()) redirect("/admin");

  return (
    <main className="admin-auth-page">
      <section className="admin-auth-panel" aria-labelledby="admin-login-title">
        <Link className="admin-brand" href="/" aria-label="Shreemay Skin Clinic home">
          <span className="admin-brand-mark" aria-hidden="true">SH</span>
          <span>Shreemay Skin Clinic</span>
        </Link>
        <p className="booking-kicker">Clinic team</p>
        <h1 id="admin-login-title">Sign in to appointments</h1>
        <p>Use your clinic account to view patient details and manage consultation bookings.</p>
        <AdminLoginForm />
        <Link className="admin-back-link" href="/">Back to clinic website</Link>
      </section>
    </main>
  );
}
