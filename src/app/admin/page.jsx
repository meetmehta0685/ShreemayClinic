import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import AdminDashboard from "@/components/admin-dashboard";
import AdminSignOut from "@/components/admin-sign-out";
import { getSignedInUser, isNeonAuthConfigured } from "@/lib/neon/auth-server";
import { getNeonDatabase, isNeonDatabaseConfigured } from "@/lib/neon/database";
import { getClinicStaff } from "@/lib/neon/staff";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Appointments | Shreemay Skin Clinic",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!isNeonAuthConfigured() || !isNeonDatabaseConfigured()) {
    return (
      <main className="admin-page">
        <div className="admin-unconfigured">
          <p className="booking-kicker">Clinic team</p>
          <h1>Appointments are not connected yet</h1>
          <p>The clinic database and staff accounts need to be set up before the dashboard can open.</p>
          <Link href="/">Return to the clinic website</Link>
        </div>
      </main>
    );
  }

  const user = await getSignedInUser();
  if (!user) redirect("/admin/login");

  const database = getNeonDatabase();
  let staff;
  try {
    staff = await getClinicStaff(database, user.id);
  } catch {
    return (
      <main className="admin-page">
        <div className="admin-unconfigured">
          <p className="booking-kicker">Clinic team</p>
          <h1>The dashboard could not reach its database</h1>
          <p>Please try again in a moment or contact the site administrator.</p>
        </div>
      </main>
    );
  }

  if (!staff) {
    return (
      <main className="admin-page">
        <div className="admin-unconfigured">
          <p className="booking-kicker">Clinic team</p>
          <h1>This account does not have dashboard access</h1>
          <p>Ask the clinic administrator to add your account, then sign in again.</p>
          <AdminSignOutLink />
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <Link className="admin-brand" href="/" aria-label="Shreemay Skin Clinic home">
          <Image src="/images/logo.png" alt="" width={52} height={52} />
          <span>Shreemay Skin Clinic</span>
        </Link>
        <div className="admin-header-actions">
          <span>Signed in as {staff.display_name}</span>
          <AdminSignOutLink button />
        </div>
      </header>
      <AdminDashboard />
    </main>
  );
}

function AdminSignOutLink({ button = false }) {
  return <AdminSignOut button={button} />;
}
