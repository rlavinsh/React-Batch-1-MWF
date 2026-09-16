import React from "react";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <div className="parent">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </>
  );
};

export default App;
