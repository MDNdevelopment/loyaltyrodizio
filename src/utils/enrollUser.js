export default async function enrollUser(payload) {
  try {
    const response = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      errors: "Error al registrar usuario, por favor inténtalo de nuevo.",
    };
  }
}
