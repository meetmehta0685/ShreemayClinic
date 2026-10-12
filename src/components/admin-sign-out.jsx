"use client";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/neon/auth-client";

export default function AdminSignOut({ button = false }) {
  const router = useRouter();

  async function signOut() {
    try {
      await authClient.signOut();
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  if (!button) {
    return <button className="admin-text-button" type="button" onClick={signOut}>Sign out</button>;
  }

  return <button className="admin-signout-button" type="button" onClick={signOut}>Sign out</button>;
}
