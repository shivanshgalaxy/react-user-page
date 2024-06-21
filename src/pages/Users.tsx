import ShowUsers from "../components/ShowUsers";
import {useContext} from "react";
import {User, UserContext} from "../App";

function Users() {
    const {users, setUser} = useContext(UserContext)

    return (
    <div className="input-form-container">
      <ShowUsers userList={users}></ShowUsers>
    </div>
  );
}

export default Users;
