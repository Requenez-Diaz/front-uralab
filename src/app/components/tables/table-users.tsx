import getUsers from "@/app/action/get/get-users";
import { table } from "console";

export default async function TableUsers() {
  const data = await getUsers();

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Telefono</th>
        </tr>

        <tbody>
          {Object.values(data).map((user: any) => (
            <tr key={`user-${user.id}`}>
              <th>{user.name}</th>
              <th>{user.lastname}</th>
            </tr>
          ))}
        </tbody>
      </thead>
    </table>
  );
}
