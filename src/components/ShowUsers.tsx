// import {User} from "../App";
//
// interface Props {
//   userList: User[];
// }
//
// const ShowUsers= ({ userList }: Props) => {
//   return (
//     <>
//       <h2>Our users:</h2>
//       {userList.length === 0 && <div>There are no users yet :(</div>}
//
//       <ul className="user-list">
//         {userList.map((user, index) => (
//           <li key={index} style={{margin: '10px 0'}} className="user-item">
//             <div>{user.email}</div>
//             <div>{user.first_name}</div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
//
// export default ShowUsers;

import React from 'react';
import { User } from "../App";

interface Props {
    userList: User[];
}

const ShowUsers = ({ userList }: Props) => {
    return (
        <div className="container">
            <h2>Our users:</h2>
            {userList.length === 0 && <div>There are no users yet :(</div>}

            <div className="row">
                {userList.map((user, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <div>{user.email}</div>
                                <div>{user.first_name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowUsers;