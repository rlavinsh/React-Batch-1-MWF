// import React, { useEffect, useState } from "react";

// const Timer = () => {
//   const [coutn1, setCount1] = useState(0);

//   useEffect(() => {
//     let timerId = setInterval(() => {
//       //   console.log(coutn1);
//       console.log("state change ho rahi hein");

//       setCount1(coutn1 + 1);
//     }, 5000);

//     return () => {
//       console.log(coutn1, "cleaning ho rahi hein");
//       clearInterval(timerId);
//     };
//   });
//   return (
//     <div>
//       <h1>count1:{coutn1}</h1>
//     </div>
//   );
// };

// export default Timer;
