import TableUsers from "../../components/tables/table-users";

export default function UsersPage() {
  return (
    <div>
      <h1>Listado de usuarios</h1>
      <div className='min-h-screen'>
        <TableUsers />
      </div>
    </div>
  );
}
