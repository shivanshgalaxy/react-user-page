interface Props {
  emailList: string[];
  firstNameList: string[];
}

const ShowUsers= ({ emailList, firstNameList }: Props) => {
  return (
    <>
      <h2>Our users:</h2>
      {emailList.length === 0 && <div>There is no user yet :(</div>}

      <ul className="user-list">
        {emailList.map((email, index) => (
          <li>
            <div>{email}</div>
            <div>{firstNameList[index]}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowUsers;
