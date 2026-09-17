// Kept as the shared layout wrapper. Motion is reserved for the welcome portrait.
export default function MotionReveal({ children, className, role }) {
  return <div className={className} role={role}>{children}</div>;
}
