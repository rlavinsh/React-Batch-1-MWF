import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";
function App() {
  async function getData() {
    try {
      const res = await fetch(`https://randomuser.me/api/`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
    // fetch(`https://randomuser.me/api/`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div className="app">
      <h1>Random User</h1>
      <p>Discover a random person</p>

      <UserCard />
    </div>
  );
}

export default App;
