import React, { useState } from "react";

const App = () => {
  // let a = [10, 20];
  // let b = a;
  // b.push(40);
  // console.log(a);

  // let b = [...a];
  // b.push(30);
  // console.log("After copy");
  // console.log(a);
  // console.log(b);

  // const user = {
  //   firstName: "Hello",
  //   "last Name": "world",
  // };

  // console.log(user.firstName);
  // console.log(user["last Name"]);

  // Method-2
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: [],
  });

  function handleChange(e) {
    // console.log(e.target);

    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSkill(e) {
    // console.log(e.target.value);
    if (e.target.checked) {
      setUserData({
        skills: [...userData.skills, e.target.value],
      });
    } else {
      setUserData({
        ...userData,
        skills: userData.skills.filter((skill) => {
          return skill !== e.target.value;
        }),
      });
    }
  }

  // Method-1
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // function handleName(e) {
  //   setName(e.target.value);
  // }

  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePassword(e) {
  //   setPassword(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // const user = {
    //   name: userData.,
    //   email: email,
    //   password: password,
    // };

    if (!userData.name.trim() || !userData.email.trim()) {
      alert("All fields are required");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      alert("Password not matched");
      return;
    }

    alert("form submitted");
    console.log(userData);

    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      skills: [],
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={userData.name}
          onChange={handleChange}
          name="name"
          required
        />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={userData.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={userData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <br />
        <label htmlFor="">Confirm Password:</label>
        <input
          type="password"
          placeholder="Enter your confrim Password"
          value={userData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <br />
        <br />
        <input type="checkbox" value="HTML" onChange={handleSkill} />
        HTML
        <input type="checkbox" value="CSS" onChange={handleSkill} />
        CSS
        <input type="checkbox" value="JS" onChange={handleSkill} />
        JS
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h1>Preview Section</h1>
      <h2>Name:{userData.name}</h2>
      <h2>Email:{userData.email}</h2>
      <h2>Password:{userData.password}</h2>
      <h2>Skills: {userData.skills.join(",")}</h2>
    </div>
  );
};

export default App;
