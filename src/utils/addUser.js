import callWebhook from "./callWebhook";

export default async function addUser(payload) {
  try {
    const response = await callWebhook(
      process.env.NEXT_PUBLIC_URL_ADD,
      payload
    );

    console.log(response);
    if (!response.data.ok) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}
