import "./User.css";
const User = (props) => {
  const { name, email, id, phone, website } = props;
  return (
    // <div>
    <div className="shadow-md w-3/12 mx-auto my-auto p-4 duration-75 hover:shadow-lg">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <h2>{id}</h2>
      <h3>{website}</h3>
      <div className="flex">
        <button>Update</button>
        <button>Delete</button>
        <button>Photos</button>
      </div>
    </div>
    // {/* </div> */}
  );
};
export default User;
