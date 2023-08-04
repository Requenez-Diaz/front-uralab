import FormSumarDos from "@/app/components/forms/form-sumar-dos-numeros";
import TableRoles from "@/app/components/tables/table-roles";

export default function RolesPage() {
  return (
    <div>
      <h1>Listado de roles</h1>
      <div className='min-h-screen'>
        <TableRoles />
      </div>
    </div>
  );
}
