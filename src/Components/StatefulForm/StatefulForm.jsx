import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("Alamin");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 character of longer");
    } else {
      setEmail("");
      console.log(email, password, name);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          className="border-2 mb-2"
          value={name}
          type="text"
          name="name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          className="border-2 mb-2"
          type="email"
          name="email" 
          id=""
        />
        <br />
        <input
          onChange={handlePasswordChange}
          className="border-2 mb-2"
          type="password"
          required
          name="password"
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
