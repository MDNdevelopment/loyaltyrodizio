export default async function addUser(payload) {
  try {
    const response = await fetch("/api/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data.ok === true;
  } catch (e) {
    return false;
  }
}
