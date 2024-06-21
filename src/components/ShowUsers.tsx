import {User} from "../App";

interface Props {
  userList: User[];
}

const ShowUsers= ({ userList }: Props) => {
  return (
    <>
      <h2>Our users:</h2>
      {userList.length === 0 && <div>There are no users yet :(</div>}

      <ul className="user-list">
        {userList.map((user) => (
          <li key={user.email}>
            <div>{user.email}</div>
            <div>{user.first_name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowUsers;
