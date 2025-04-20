

function UserList({ data, handleDelete }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>surname</th>
            <th>Email</th>
            <th>Company</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.name}</td>
                <td>{elem.username ? elem.username : 'Unknown'}</td>
                <td>{elem.email}</td>
                <td>{elem.company.name}</td>
                <td onClick={() => handleDelete(elem.id)}>X</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList
