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

// export default async function getUsers() {
//   const url = `${process.env.API_BASE_URL}/users`;

//   const headers = {
//     "Content-Type": "application/json",
//     "api-key": process.env.API_KEY,
//   };

//   try {
//     const reponse = await fetch(url, { method: "GET", headers });
//     if (!Response.ok) {
//       throw new Error("Error");
//     } else {
//       const users = await reponse.json();
//       return users;
//     }
//   }
// }
