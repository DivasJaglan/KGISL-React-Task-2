function UserProfile({ name, age, email }) {
  const displayAge =
    age !== undefined && age !== null ? age : "Age not provided";
  return (
    <table className=" m-auto table table-dark table-striped table-hover table-bordered table-responsive">
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th scope="row">Age</th>
          <td>{displayAge}</td>
        </tr>
        <tr>
          <th scope="row">Category</th>
          <td>
            {typeof age === "number" && age >= 18
              ? "Adult"
              : age !== undefined && age !== null && typeof age === "number"
              ? "Minor"
              : "Age not provided"}
          </td>
        </tr>
        {email && (
          <tr>
            <th scope="row">Email</th>
            <td>{email}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserProfile;
