export default async function getModalidades() {
  const url = `${process.env.API_BASE_URL}/modalidades`;
  const options = {};

  const modalidades = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.API_KEY,
    },
  }).then((res) => res.json());
  return modalidades;
}
