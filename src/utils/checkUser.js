export default async function checkUser(payload) {
  try {
    console.log({ payload });
    const response = await fetch("/api/check-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    console.log({ data });
    if (data.error) {
      return {
        ok: false,
        errors: data.error,
      };
    }
    if (data.isRegistered) {
      return {
        ok: true,
        userExists: true,
        errors: "El usuario ya se encuentra registrado",
      };
    }
    return {
      ok: true,
      userExists: false,
      errors: "",
    };
  } catch (e) {
    console.log("error in checking registered");
    return {
      ok: false,
      errors: e,
    };
  }
}
