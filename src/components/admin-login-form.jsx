"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/neon/auth-client";

export default function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [codeRequested, setCodeRequested] = useState(false);
  const [otp, setOtp] = useState("");

  async function sendCode(address) {
    setError("");
    setSubmitting(true);
    try {
      await authClient.emailOtp.sendVerificationOtp({
        email: address,
        type: "sign-in",
        fetchOptions: { throw: true },
      });
      setEmail(address);
      setOtp("");
      setCodeRequested(true);
    } catch {
      setError("We could not send a sign-in code. Check your clinic email and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleRequestCode(event) {
    event.preventDefault();
    const address = String(new FormData(event.currentTarget).get("email") ?? "").trim().toLowerCase();
    await sendCode(address);
  }

  async function handleVerifyCode(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await authClient.signIn.emailOtp({
        email,
        otp: otp.trim(),
        fetchOptions: { throw: true },
      });
    } catch {
      setError("That code did not work. Check it and try again, or request a new code.");
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    router.replace("/admin");
    router.refresh();
  }

  return (
    <form className="admin-login-form" onSubmit={codeRequested ? handleVerifyCode : handleRequestCode}>
      {!codeRequested ? (
        <div className="booking-field">
          <label htmlFor="admin-email">Clinic email</label>
          <input id="admin-email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
      ) : (
        <>
          <p>A one-time sign-in code was sent to {email}.</p>
          <div className="booking-field">
            <label htmlFor="admin-otp">One-time code</label>
            <input id="admin-otp" name="otp" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength={10} value={otp} onChange={(event) => setOtp(event.target.value)} required />
          </div>
          <button className="admin-text-button" type="button" onClick={() => setCodeRequested(false)} disabled={submitting}>Use a different email</button>
          <button className="admin-text-button" type="button" onClick={() => sendCode(email)} disabled={submitting}>Send a new code</button>
        </>
      )}
      {error ? <p className="booking-error" role="alert">{error}</p> : null}
      <button className={buttonVariants({ size: "lg" }) + " admin-login-submit"} type="submit" disabled={submitting}>
        {submitting ? (codeRequested ? "Checking code…" : "Sending code…") : (codeRequested ? "Verify code" : "Email me a sign-in code")}
      </button>
    </form>
  );
}
