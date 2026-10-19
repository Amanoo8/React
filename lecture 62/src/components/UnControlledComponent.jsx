function UnControlledComponent() {
    function signup(e) {
    e.preventDefault();
    const formData=new FormData(e.target)
    console.log(formData.get("email"));
     console.log(formData.get("name"));
     console.log(formData.get("password"));
  }
  return (
    <div>
      <h1>Form in React (UnControlled Component) </h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="name">Email : </label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          name="password"
          id="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default UnControlledComponent;