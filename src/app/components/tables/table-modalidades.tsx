import getModalidades from "@/app/action/get/get-modalidades";

export default async function TableModalidades() {
  const data = await getModalidades();

  return (
    <table className='table-auto'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Carrera</th>
          <th>Modalidad</th>
          <th>Turno</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(data).map((modalidad: any) => (
          <tr key={`modalidad-${modalidad.id}`}>
            <td>{modalidad.id}</td>
            <td>{modalidad.carrera}</td>
            <td>{modalidad.modalidad}</td>
            <td>{modalidad.turno}</td>
            <td>{modalidad.descripcion}</td>
          </tr>
        ))}

        <tr>
          <td>1</td>
          <td>Administrador</td>
          <td>Editar, Eliminar</td>
        </tr>
      </tbody>
    </table>
  );
}
