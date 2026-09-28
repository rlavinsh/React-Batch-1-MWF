import React from "react";

const App = () => {
  function getData(userName, userEmail) {
    console.log(`My Name is${userName}`);
    console.log(`this is my Email: ${userEmail}`);
  }
  function greet() {
    console.log("welcome students");
  }
  function mouseEntered() {
    console.log("Mouse Entered event triggered");
  }

  function mouseLeave() {
    console.log("Mouse Leave event triggered");
  }

  function trackTyping(event) {
    // console.log("user typing...");
    console.log(event.target.value);
  }

  function getFormData(event) {
    event.preventDefault();
    console.log("Form submitted");
  }
  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <>
      {/* <div>
      <h1>Hello React</h1>
      <button onClick={() => getData("John", "john123@gmail.com")}>
        click
      </button>
      <h2
        style={{ border: "2px solid black", margin: "10px" }}
        onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeave}
      >
        Mouse Event
      </h2>
      <label htmlFor="">UserName: </label>
      <input type="text" onChange={trackTyping} /> */}
      {/* onMouseEnter
      onMouseLeave */}
      {/* <br />
      <br />
      <form onSubmit={getFormData}>
        <label htmlFor="">UserName:</label>
        <input type="text" />
        <button>submit</button>
      </form>
    </div> */}

      <form>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" onChange={handleChange} />
        <br /> <br />
        <label htmlFor="">Course:</label>
        <select onChange={handleChange}>
          <option value="">Select a Course</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">Javascript</option>
          <option value="react">React</option>
        </select>
      </form>
    </>
  );
};

export default App;
