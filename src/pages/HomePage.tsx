function HomePage() {
  return (
    <>
      <div className="container d-flex align-items-center flex-column mt-5">
        <div>
          <h1>Test out a basic user login flow</h1>
        </div>
        <div>
          <p className="fs-5">Sign up to add a user!</p>
        </div>
        <div className="align-items-lg-start">
          <div className="fs-5">
            <strong>View users: </strong> See all the users that have signed up
          </div>
          <div className="fs-5">
            <strong>Sign up: </strong> Create a new user (only visible when not
            logged in)
          </div>
          <div className="fs-5">
            <strong>Profile: </strong> See the logged in user's information
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
