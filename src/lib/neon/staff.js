export async function getClinicStaff(database, userId) {
  if (!database || !/^[0-9a-f-]{36}$/i.test(userId ?? "")) return null;

  const rows = await database.query(
    "select display_name from public.clinic_staff where user_id = $1::uuid limit 1",
    [userId]
  );
  return rows[0] ?? null;
}
