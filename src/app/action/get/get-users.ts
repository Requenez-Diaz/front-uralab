export default async function getUsers() {
  const url = `${process.env.API_BASE_URL}/users`;
  const options = {};

  const users = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.API_KEY,
    },
  }).then((res) => res.json());
  return users;
}
